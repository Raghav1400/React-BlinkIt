import { PerkChild } from "./molecules/perkChild";

export const renderPerk = (perk) => {
	return <PerkChild key={perk.id} info={perk} />;
};
