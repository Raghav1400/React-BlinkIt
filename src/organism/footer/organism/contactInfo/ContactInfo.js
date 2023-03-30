import React from "react";
import { ExtraInfo } from "../../molecules/extraInfo";
import { SocialInfo } from "./molecules/socilaInfo";
import { DownloadInfo } from "./molecules/downloadInfo";
import styles from "./contactInfo.module.css";
import { COPYWRITE_INFO, DOWNLOAD_LINKS, SOCIAL_INFO } from "./constant";

function ContactInfo() {
	return (
		<div className={styles["contact-info"]}>
			<ExtraInfo className="extra-info-note" info={COPYWRITE_INFO} />
			<DownloadInfo downloadInfo={DOWNLOAD_LINKS} />
			<SocialInfo socialInfo={SOCIAL_INFO} />
		</div>
	);
}

export default ContactInfo;
