import React from "react";
import { renderDownloadInfo } from "./downloadInfo.helper";
import style from "./downloadInfo.module.css";

function DownloadInfo(props) {
	const { downloadInfo } = props;
	return (
		<div className={style["download-info"]}>
			<div>Download Apps</div>
			{downloadInfo.map(renderDownloadInfo)}
		</div>
	);
}

export default DownloadInfo;
