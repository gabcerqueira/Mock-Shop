import React from "react";

import "./formInput.scss";
import {
	FormInputLabel,
	FormInputContainer,
	GroupContainer,
} from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...formProps }) => {
	return (
		<GroupContainer>
			<FormInputContainer onChange={handleChange} {...formProps} />
			{label ? (
				<FormInputLabel className={`${formProps.value.length ? "shrink" : ""}`}>
					{label}
				</FormInputLabel>
			) : null}
		</GroupContainer>
	);
};

export default FormInput;
