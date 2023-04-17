import React from "react";
import { connect } from "react-redux";
import { LoginButton } from "./molucules/loginButton";
import { CartButton } from "./molucules/cartButton";
import { Location } from "./molucules/location";
import { Logo } from "./molucules/logo";
import styles from "./header.module.css";
import { selectAllCards } from "../../redux/cardRedux/cardReducer";
import { selectLocations } from "../../redux/locationRedux/locationinfo";
import { BRAND_LOGO } from "./constant";

function Header(props) {
	return (
		<div className={styles.header}>
			<div>
				<Logo src={BRAND_LOGO} />
				<Location locations={props.locations} />
			</div>
			<div>
				<LoginButton />
				<CartButton cards={props.cards} />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		cards: selectAllCards(state),
		locations: selectLocations(state),
	};
};
export default connect(mapStateToProps)(Header);
