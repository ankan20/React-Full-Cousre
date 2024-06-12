import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "../store/atom/atom";

const AtomFamily = () => {
  return (
    <div>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={3} />
        <Todo id={2} />
        <Todo id={2} />
      </RecoilRoot>
    </div>
  );
};

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      <h3>{currentTodo.title}</h3>
      <h3>{currentTodo.description}</h3>
    </>
  );
}

export default AtomFamily;
