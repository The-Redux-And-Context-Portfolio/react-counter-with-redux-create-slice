/* node modules */
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks/index";

/* app imports */
import { soundOffIcon, soundOnIcon } from "../utils/sound-icons";
import { off as soundOff, on as soundOn } from "../../redux-store/reducers/sound";
import soundIconWhite from "../../assets/icons/sound-icon-white.svg";
import muteIconWhite from "../../assets/icons/mute-icon-white.svg";
import getSound from "../../redux-store/selectors/get-sound";

/**
  * @returns - the sound icon variable as well as an event handler that helps to toggle the state of the 
  * sound icon variable based on user interactions.
  */
function useSoundHook() {
  /* subscribe to the redux store */
  const sound = useAppSelector(getSound);
  /* create a dispatch function that helps to send instructions to the redux store */
  const reduxDispatch = useAppDispatch();
  /* sound icon based on the state updates from the redux store */
  const [soundIcon, setSoundIcon] =
    useState<Record<string, any>>(sound ? soundOnIcon : soundOffIcon);

  /* event handler */
  function handleOnSound() {
    if (sound) {
      reduxDispatch(soundOff());
      setSoundIcon(soundOffIcon);
    }
    else {
      reduxDispatch(soundOn());
      setSoundIcon(soundOnIcon);
    }
  }

  return {
    handleOnSound,
    soundIcon
  }
}

/* exports */
export default useSoundHook;
