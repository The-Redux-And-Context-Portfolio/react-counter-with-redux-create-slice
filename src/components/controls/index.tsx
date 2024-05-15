/* node modules */
import React from "react";

/* app imports */
import resetIconWhite from "../../assets/icons/reset-icon-white.svg";
import useOnReset from "../hooks/use-on-reset";
import useSoundHook from "../hooks/use-sound-hook";

/* component */
function Controls(): JSX.Element {
  /* custom hooks */
  const { handleOnReset } = useOnReset();
  const { soundIcon, handleOnSound } = useSoundHook();
  
  return (
    <>
      <div className="controls customRow">
        {/* Sound Button */}
        <button type="button" className="btn btn-default"
        data-testid="soundBtn"
        onClick={handleOnSound}>
          <img {...soundIcon} data-testid="soundIcon"/>
        </button>

        {/* Reset Button */}
        <button type="button" className="btn btn-default"
        data-testid="resetBtn"
        onClick={handleOnReset}>
          <img src={resetIconWhite} className="img-fluid center-block"
          alt="Counter - Reset" title="Counter - Reset"/>
        </button>
      </div>
    </>
  );
}

/* exports */
export default Controls;
