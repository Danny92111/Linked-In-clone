import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";

function Header() {
	return (
		<div className="header">
			<div className="header-left">
				<img
					src="https://image.flaticon.com/icons/png/512/174/174857.png"
					alt=""
				/>

				<div className="header__search">
					<SearchIcon />
					<input type="text" placeholder="Search" />
				</div>
			</div>
			<div className="header-right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationIcon} title="Notifications" />
				<HeaderOption avatar="https://thumbs.dreamstime.com/z/vector-illustration-faceless-man-suit-tie-65138894.jpg" />
			</div>
		</div>
	);
}

export default Header;
