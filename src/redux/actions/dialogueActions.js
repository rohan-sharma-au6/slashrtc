import {CREATE_DIALOUGES} from "../actionsTypes"

//function for creating dialogues
export const createDialogue = dialogue => {
    return {
      type: CREATE_DIALOUGES,
      payload: dialogue
    };
  };