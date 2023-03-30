export const renderDownloadInfo = (info) => {
	return <img key={info.type} src={info.src} alt={info.alt} />;
};
