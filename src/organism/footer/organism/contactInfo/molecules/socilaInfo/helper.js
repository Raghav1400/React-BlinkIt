export const renderSocialInfo = (info) => {
	return <img key={info.type} src={info.img_src} alt={info.alt} />;
};
