describe("todos", () => {
  let newItem;

  before(() => {
    newItem = "Feed the cat";
    cy.visit("localhost:8080");
  });

  it("displays no items initially", () => {
    cy.findAllByTestId(/^todo-item/).should("have.length", 0);
  });

  it("adds an item", () => {
    cy.findAllByTestId("todoTextInput").first().type(`${newItem}{enter}`);
    cy.findByText("Add Todo", { selector: "button" }).click();
    cy.findByText(newItem)
      .should("have.length", 1)
      .first()
      .should("have.text", newItem);
  });

  it("completes an item", () => {
    cy.findByLabelText(newItem).click();
    cy.findByText(newItem).first().should("have.class", "complete");
  });

  it("removes an item", () => {
    cy.findByText("Remove", { selector: "button" }).click();
    cy.findAllByTestId(/^todo-item/).should("have.length", 0);
  });
});
