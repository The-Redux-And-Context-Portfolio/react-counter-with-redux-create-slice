/* app imports */
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks/index";
import { reset } from "../../redux-store/reducers/counter";
import getSound from "../../redux-store/selectors/get-sound";
import playResetSound from "../utils/reset-sound";

/**
  * @returns - an event handler that helps set updates to the sound slice in the redux store
  */
function useOnReset() {
  /* subscribe to the redux store */
  const sound = useAppSelector(getSound);
  /* create a dispatch function that helps to send instructions to the store */
  const reduxDispatch = useAppDispatch();

  /* event handler */
  function handleOnReset() {
    reduxDispatch(reset());
    sound && playResetSound();
  }

  return { handleOnReset };
}

/* exports */
export default useOnReset;
