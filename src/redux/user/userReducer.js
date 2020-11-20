import UserActionTypes from "./userTypes";

const INITIAL_STATE = {
	currentUser: null,
	errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				errorMessage: null,
				currentUser: payload,
			};
		case UserActionTypes.SIGN_IN_FAILURE:
			return {
				...state,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default userReducer;
