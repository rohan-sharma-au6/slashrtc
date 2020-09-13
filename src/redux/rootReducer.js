import {CREATE_DIALOUGES

} from "./actionsTypes";

//initial State
const initialState = {
dialogues: []
};

const rootReducer = (state = initialState, action) => {
const { type, payload } = action;
switch (type) {
    
    case CREATE_DIALOUGES:
    return { ...state, dialogues: [...state.dialogues, payload] };
    
    default:
    return state;
}
};

export default rootReducer;