import { AttributeModifier, Novice } from "../../../attributes";

const warriorNovicePath = new Novice(
	// Level 1
	new AttributeModifier({
		health: 5,
		professions: ["Warrior"],
		skills: [
			{
				name: "Catch Your Breath",
				description:
					"You can use an action or a triggered action on your turn to heal damage equal to your healing rate. Once you use this talent, you cannot use it again until after you complete a rest.",
			},
			{
				name: "Weapon Training",
				description:
					"When attacking with a weapon, you make the attack roll with 1 boon.",
			},
		],
	}),
	// Level 2
	new AttributeModifier({
		health: 5,
		skills: [
			{
				name: "Combat Prowess",
				description: "Your attacks with weapons deal 1d6 extra damage.",
			},
		],
	}),
	// Level 5
	new AttributeModifier({
		health: 5,
		defense: 1,
		skills: [
			{
				name: "Combat Expertise",
				description: "When you use an action to attack with a weapon, you either deal 1d6 extra damage with that attack or make another attack against a different target at any point before the end of your turn.",
			},
		],
	}),
	// Level 8
	new AttributeModifier({
		health: 5,
		skills: [
			{
				name: "Grit",
				description: "You can use Catch Your Breath twice between each rest.",
			},
			{
				name: "Combat Mastery",
				description: "When you use an action to attack with a weapon, you either deal 1d6 extra damage with that attack or make another attack against a different target at any point before the end of your turn. This talent is cumulative with Combat Expertise. You must choose a different target for each attack you make.",
			},
		],
	})
);

export default warriorNovicePath;
