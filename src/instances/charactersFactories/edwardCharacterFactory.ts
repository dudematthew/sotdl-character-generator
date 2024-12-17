import { Character } from "../../characters";
import humanAncestry from "../ancestries/HumanAncestry";
import assassinExpertPath from "../paths/expert/assassinExpertPath";
import acrobatMasterPath from "../paths/master/acrobatMasterPath";
import warriorNovicePath from "../paths/novice/warriorNovicePath";

/**
 * Factory function to create a pre-configured character named Edward
 * Sets up a character with Human ancestry and specific paths
 */
const edwardCharacterFactory: () => Character = () => {
	const edwardCharacter = new Character({ name: "Edward" }, humanAncestry);
	edwardCharacter.setPath(warriorNovicePath);
	edwardCharacter.setPath(assassinExpertPath);
	edwardCharacter.setPath(acrobatMasterPath);
	return edwardCharacter;
};

export default edwardCharacterFactory;
