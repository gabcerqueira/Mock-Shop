import { UserActionTypes } from "../redux/user/userTypes";

export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});
