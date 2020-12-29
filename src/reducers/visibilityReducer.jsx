import ACTION from "../actions/actions";

const initialState = {
    sidebar: false,
};

const visibilityReducer = (state = initialState, action) => {
    const copiedState = { ...state };
    switch (action.type) {
        case ACTION.SET_SIDEBAR_VISIBILITY: {
            copiedState.sidebar = !state.sidebar;
            return copiedState;
        }
        default:
            return state;
    }
};

export default visibilityReducer;
