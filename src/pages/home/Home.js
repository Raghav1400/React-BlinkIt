import React from "react";
import { Header } from "../../organism/header";
import { Footer } from "../../organism/footer";
import { Main } from "./organisms/main";
import "./home.module.css";

const Home = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
};
export default Home;
