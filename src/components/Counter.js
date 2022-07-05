import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state/index";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <center>
        <h2 className="my-5">Counter using Redux</h2>
        <button
          className="btn btn-primary mx-3"
          // onClick={() => dispatch(actionCreators.decrement(1))}
          onClick={() => dispatch(actionCreators.change(1, "minus"))}
          disabled={count <= 0}
        >
          -
        </button>
        Click to change value
        <button
          className="btn btn-primary mx-3"
          // onClick={() => dispatch(actionCreators.increment(1))}
          onClick={() => dispatch(actionCreators.change(1, "plus"))}
        >
          +
        </button>
      </center>
    </>
  );
}

export default Counter;
