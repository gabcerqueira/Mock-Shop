import React from "react";
import MenuItem from "../../Components/menu-item/MenuItem";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import { connect } from "react-redux";
import { DirectoryMenu } from "./Directory.styles";
const Directory = ({ sections }) => {
	return (
		<DirectoryMenu>
			{sections.map(({ id, ...sectionProps }) => {
				return <MenuItem key={id} {...sectionProps} />;
			})}
		</DirectoryMenu>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
