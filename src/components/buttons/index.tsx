/* node modules */
import React from "react";

/* app imports */
import plusIconWhite from "../../assets/icons/plus-icon-ffffff.svg";
import minusIconWhite from "../../assets/icons/minus-icon-ffffff.svg";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks";
import { increment, decrement } from "../../redux-store/reducers/counter";
import playClickSound from "../utils/click-sound";
import getSound from "../../redux-store/selectors/get-sound";

/* component */
function Buttons(): JSX.Element {
  const sound = useAppSelector(getSound);
  const reduxDispatch = useAppDispatch();

  function handleOnIncrement() {
    reduxDispatch(increment());
    sound && playClickSound();
  }

  function handleOnDecrement() {
    reduxDispatch(decrement());
    sound && playClickSound();
  }

  return (
    <>
      <div className="buttonContainer text-center customRow">
        {/* decrement button */}
        <button type="button" className="btn btn-default counterBtn white decrement"
        data-testid="decBtn"
        onClick={handleOnDecrement}>
          <img src={minusIconWhite} className="img-fluid center-block"
          alt="Decrement" title="Decrement"/>
        </button>
        {/* increment button */}
        <button type="button" className="btn btn-default counterBtn white increment"
        data-testid="incBtn"
        onClick={handleOnIncrement}>
          <img src={plusIconWhite} className="img-fluid center-block"
          alt="Increment" title="Increment"/>
        </button>
      </div>
    </>
  );
}

/* exports */
export default Buttons;
