import React from "react";
import { ExtraInfo } from "./molecules/extraInfo";
import { ContactInfo } from "./organism/contactInfo";
import { Perks } from "./organism/perks";
import "./footer.module.css";
import { COMPANY_INFO } from "./constant";

function Footer() {
	return (
		<footer>
			<Perks />
			<ExtraInfo className="extra-info" info={COMPANY_INFO} />
			<ContactInfo />
		</footer>
	);
}

export default Footer;
