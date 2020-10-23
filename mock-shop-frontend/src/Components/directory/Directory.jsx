import React from "react";
import "./directory.scss";
import MenuItem from "../../Components/menu-item/MenuItem";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import { connect } from "react-redux";
const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...sectionProps }) => {
				return <MenuItem key={id} {...sectionProps} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
