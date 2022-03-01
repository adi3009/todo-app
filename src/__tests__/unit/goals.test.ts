import { faker } from "@faker-js/faker";
import type { Goal } from "../../goals";
import { goals as goalsReducer, addAction, removeAction } from "../../goals";

function generateGoal(): Goal {
  return {
    id: faker.datatype.number(1),
    name: faker.lorem.sentence(),
  };
}

describe("goals reducer", () => {
  let state: Array<Goal>;
  let goal: Goal;
  beforeEach(() => {
    state = [];
    goal = generateGoal();
  });

  it("must return same state on invalid action", () => {
    let newState = goalsReducer(state, { type: "Invalid action" });
    expect(newState.length).toEqual(0);
    expect(newState).toEqual(state);
  });

  it("must add a goal", () => {
    let newState = goalsReducer(state, addAction(goal));
    expect(newState).toContain(goal);
    expect(newState).not.toBe(state);
  });

  it("must remove a goal", () => {
    goalsReducer(state, addAction(goal));
    let newState = goalsReducer(state, removeAction(goal.id));
    expect(newState).not.toContain(goal);
    expect(newState).not.toBe(state);
  });
});
