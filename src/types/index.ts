import { SpellChoice, LanguageChoice } from "./spell";

/**
 * Basic character configuration options
 */
export type characterConfig = {
	name: string;
};

/**
 * Represents a skill that a character can possess
 */
export interface Skill {
	name: string;
	description: string;
}

/**
 * Core attributes that define a character's basic capabilities
 */
export interface mainAttributes {
	strength: number;
	agility: number;
	intellect: number;
	will: number;
}

/**
 * Derived attributes that are calculated from main attributes
 */
export interface secondaryAttributes {
	perception: number;
	defense: number;
	health: number;
	healingRate: number;
	size: number;
	speed: number;
	power: number;
	damage: number;
	insanity: number;
	corruption: number;
	languages: string[];
	professions: string[];
	skills: Skill[];
}

/**
 * Combined interface of all character attributes
 */
export interface attributes extends mainAttributes, secondaryAttributes {}

/**
 * Rules for calculating secondary attributes from main attributes
 */
export type attributeCalculationRules = {
	[key in keyof secondaryAttributes]: (
		mainAttrs: mainAttributes,
		level: number,
		secondaryAttrs: secondaryAttributes
	) => any;
};

/**
 * Configuration for attribute choices
 */
export type AttributeChoiceConfig = {
	type: "attribute";
	count: number;
	increaseBy: number;
	availableAttributes?: (keyof mainAttributes)[];
	selectedAttributes?: (keyof mainAttributes)[];
};

/**
 * Configuration for skill choices
 */
export type SkillChoiceConfig = {
	type: "skill";
	count: number;
	availableSkills: Skill[];
	selectedSkills?: Skill[];
};

/**
 * Configuration for profession choices
 */
export type ProfessionChoiceConfig = {
	type: "profession";
	count: number;
	availableProfessions: string[];
	selectedProfessions?: string[];
};

/**
 * Union type of all possible choice configurations
 */
export type ChoiceConfig =
	| AttributeChoiceConfig
	| SkillChoiceConfig
	| ProfessionChoiceConfig
	| SpellChoice
	| LanguageChoice;

/**
 * Represents where a choice comes from in the character build
 */
export interface ChoiceLocation {
	source: "ancestry" | "novicePath" | "expertPath" | "masterPath";
	level: number;
}
