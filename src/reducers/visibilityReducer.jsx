import ACTION from "../actions/actions";

const initialState = {
    sidebar: false,
    addForm: true,
};

const visibilityReducer = (state = initialState, action) => {
    const copiedState = { ...state };
    switch (action.type) {
        case ACTION.SET_SIDEBAR_VISIBILITY: {
            copiedState.sidebar = !state.sidebar;
            return copiedState;
        }
        case ACTION.SET_ADDFORM_VISIBILITY: {
            copiedState.addForm = !state.addForm;
            return copiedState;
        }
        default:
            return state;
    }
};

export default visibilityReducer;
