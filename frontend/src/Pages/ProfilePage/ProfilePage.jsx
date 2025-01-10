import styled from "styled-components";
import img from "./assets/bg-profile-page.png";
import ProfileCard from "../../components/ProfilePage/ProfileCard";
import EditProfile from "../../components/ProfilePage/EditMode";
import { useState } from "react";
import { CardFlipProvider } from "../../components/ProfilePage/CardFlipProvider";
import { useCardFlip } from "../../components/ProfilePage/CardFlipProvider";
import ReactCardFlip from "react-card-flip";
import FriendCard from "../../components/Friendcard/FriendCard";

const WrapperProfilePage = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    position: relative;

    #bg-img {
        height: 320px;
        width: 100%;
        position: absolute;
        background-image: url(${img});
        background-color: grey;
        z-index: -1;
    }

    section {
        height: auto;
        width: 100%;
    }
`;

const ProfilePageContent = () => {
    const { isFlipped } = useCardFlip();

    return (
        <WrapperProfilePage>
            <div id="bg-img"></div>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                <section>
                    <ProfileCard></ProfileCard>
                </section>
                <section>
                    <EditProfile></EditProfile>
                </section>
            </ReactCardFlip>
        </WrapperProfilePage>
    );
};

export default function ProfilePage() {
    return (
        <CardFlipProvider>
            <ProfilePageContent />
        </CardFlipProvider>
    );
}
