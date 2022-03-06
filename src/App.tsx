import React from "react";
import { TodoList } from "./todos";

export function App() {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col items-center">
        {console.log("App - render")}
        <TodoList />
      </section>
    </div>
  );
}
