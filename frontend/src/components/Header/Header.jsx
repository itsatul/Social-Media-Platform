import Logo from "../../assets/images/logo.png";
import PostsLogo from "../../assets/images/posts_logo.png";
import FindFriends from "../../assets/svgs/icon-friends.svg";
import NotificationBell from "../../assets/svgs/notification_bell.svg";
import Avatar from "../../assets/images/users/jennifer.png";
import MenuIcon from "../../assets/svgs/menu.svg";
import {
    MainHeader,
    LeftContainer,
    LogoDiv,
    NavBar,
    RightContainer,
} from "./styles";
import { NavLink, useNavigate } from "react-router-dom";

import "./Headar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/user";
import FriendCard from "../Friendcard/FriendCard";
import NotificationCard from "../NotificationCard/NotificationCard";

export default function Header() {
    const [showNotification, setShowNotifivation] = useState(false);
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();
    function displayLogoutButton() {
        setDisplay(!display);
    }
    const dispatch = useDispatch();
    const handlelogout = () => {
        dispatch(logout());
        navigate("/Login");
    };

    const handleProfileButton = () => {
        navigate("/profile");
    };

    return (
        <>
            <MainHeader>
                <LeftContainer>
                    <LogoDiv>
                        <img src={Logo} alt="Logo" />
                        <button className="motionButton">Motion</button>
                    </LogoDiv>

                    <NavBar>
                        <NavLink className="Naviess" to="/Main">
                            <img
                                src={PostsLogo}
                                alt="Posts-Logo"
                            />
                            <p>Posts</p>
                        </NavLink>
                        <NavLink className="Naviess" to="/friends">
                            <img src={FindFriends} alt="Find-Friends" />
                            <p>Find friends</p>
                        </NavLink>
                    </NavBar>
                </LeftContainer>
                <RightContainer>
                    <img
                        src={NotificationBell}
                        onClick={() => setShowNotifivation(!showNotification)}
                        alt="icon-alert"
                    />
                    <img
                        src={Avatar}
                        alt="avatar-jennifer"
                        onClick={() => displayLogoutButton()}
                    />

                    {display ? (
                        <div className="aaa">
                            <div>
                                <img src={NotificationBell} alt="" />
                                <button
                                    onClick={() => handleProfileButton()}
                                    className="abb"
                                >
                                    Profile
                                </button>
                            </div>
                            <div>
                                <img src={NotificationBell} alt="" />
                                <button onClick={() => handlelogout()}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : null}

                    <img src={MenuIcon} alt="menu-icon" />
                </RightContainer>
            </MainHeader>
            {showNotification && <NotificationCard />}
        </>
    );
}
