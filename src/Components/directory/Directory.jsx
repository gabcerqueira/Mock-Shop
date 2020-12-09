import React from "react";
import MenuItem from "../../Components/menu-item/MenuItem";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DirectoryMenu } from "./Directory.styles";

const Directory = () => {
	const { collectionId } = useParams();
	const sections = useSelector((state) =>
		selectDirectorySections(collectionId)(state)
	);

	return (
		<DirectoryMenu>
			{sections.map(({ id, ...sectionProps }) => {
				return <MenuItem key={id} {...sectionProps} />;
			})}
		</DirectoryMenu>
	);
};

export default Directory;
