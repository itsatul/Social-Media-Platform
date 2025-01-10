// ---------- IMPORTS ----------
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCardFlip } from "../CardFlipProvider";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../../store/slice/tiaraslice";

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    margin: 0 auto;
    /*     padding: 20px;
 */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

const ProfileCardDiv = styled.div`
    height: auto;
    min-height: 380px;
    width: 80vw;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 10px 20px 0px #0000000d;
    margin-top: calc(150px + 5vh);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    box-sizing: border-box;
`;

const ProfileDataDiv = styled.div`
    height: 100%;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 7;
    border-right: 1px solid #00000010;
    display: flex;
    flex-direction: column;
    align-items: center;

    #avatar {
        height: auto;
        max-width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 4rem;
    }

    .avatarPicture {
        width: 80px;
        height: 80px;
        border: none;
        border-radius: 50%;
    }

    .details {
        justify-self: center;
        padding-top: 1rem;

        p {
            text-align: center;
        }

        #name {
            font-size: 24px;
        }

        #location {
            font-size: 14px;
        }
    }

    #editButtonDiv {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: auto;
        padding-bottom: 3rem;
    }
`;

const EditProfileButton = styled.button`
    width: 100%;
    background: none;
    border: 1px, solid, grey;
    border-radius: 30px;
    width: 158px;
    height: 40px;
    transition-duration: 300ms;
    &:hover {
        box-shadow: 0 10px 20px 0px #0000000d;
    }

    &:active {
        box-shadow: 0 10px 20px 0px #0000000d;
        transform: translateY(4px);
    }
`;

const AboutDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    /*     display: grid;
 */
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 5;
    border-bottom: 1px solid #00000010;
    /*     align-content: center;
 */
    gap: 20px;

    #about {
        padding-top: 1.5rem;
        padding-inline: 1.5rem;
    }

    #contact {
        display: flex;
        width: 100%;
        padding-top: 1.5rem;
        padding-inline: 1.5rem;

        p {
            font-size: 16px;
        }
    }

    p {
        font-size: 14px;
    }

    .aboutDetails {
        font-size: 16px;
        font-weight: 400;
        padding-top: 1.5rem;
    }

    .contactTitle {
        font-size: 14px;
        font-weight: 400;
    }

    #phone,
    #email {
        width: 50%;
    }
`;

const InterestsDiv = styled.div`
    height: 100%;
    grid-column-start: 8;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 5;
    border-bottom: 1px solid #00000010;

    p {
        font-size: 14px;
        padding-left: 1.5rem;
        padding-top: 1.5rem;
    }
    #interestTags {
        padding-left: 1.5rem;
        padding-top: 1.5rem;

        .tag {
            display: inline-flex;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.05);
            border-radius: 20px;
            padding: 10px 20px;
            font-size: 14px;
            margin: 5px;
            white-space: nowrap;
            width: auto;
            max-width: 100%;
            overflow: hidden;
        }
        .tag-text {
            overflow: hidden;
        }
    }
`;

const CounterDiv = styled.div`
    grid-column-start: 4;
    grid-column-end: 13;
    grid-row-start: 5;
    grid-row-end: 7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    p {
        font-size: 20px;
    }

    .counterTitle {
        font-size: 12px;
    }
`;

// ---------- COMPONENT ----------

export default function ProfileCard() {
    const { flipCard } = useCardFlip();

    // --- fetching data via store ---

    const dispatch = useDispatch();
    const user = useSelector((state) => state.tiara.userData);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    /* // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             console.log("fetching data");

    //             const params = {
    //                 email: "pikachu@byom.de",
    //                 username: "Pikachu",
    //             };

    //             const res = await axios.get(
    //                 "https://motion.propulsion-home.ch/backend/api/users/me/",
    //                 {
    //                     headers: {
    //                         Authorization:
    //                             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyOTYxMDEwLCJpYXQiOjE3MzI3ODgyMTAsImp0aSI6ImMxMzg1ZmJhZGNkZjRmMWI4MTA0MzFhODBhYzFiZmIyIiwidXNlcl9pZCI6NDEyOX0.niSBk43weT9n05jW-MDaFi_vhxAYRAqU-wz3Zi2VxVo",
    //                     },
    //                     params,
    //                 }
    //             );
    //             if (res.status === 200) {
    //                 setUser(res.data);
    //             }

    //             console.log("response", res.data);
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };

    //     fetchUserData();
    // }, []);

    // console.log("this is user", user); */

    //console.log("things user likes:", user.things_user_likes);

    const interests = [...user.things_user_likes] || []; // array initialized in slice

    return (
        <Wrapper>
            <ProfileCardDiv>
                <ProfileDataDiv>
                    <div id="avatar">
                        <img className="avatarPicture" src={user.avatar} />
                    </div>
                    <div className="details">
                        <p id="name">
                            {user.first_name} {user.last_name}
                        </p>
                        <p id="location">{user.location}</p>
                    </div>
                    <div id="editButtonDiv">
                        <EditProfileButton onClick={flipCard}>
                            Edit Profile
                        </EditProfileButton>
                    </div>
                </ProfileDataDiv>

                <AboutDiv>
                    <div id="about">
                        <p className="contactTitle">About</p>
                        <p className="aboutDetails">{user.about_me}</p>
                    </div>
                    <div id="contact">
                        <div id="email">
                            <p className="contactTitle">Email</p>
                            <p className="aboutDetails">{user.email}</p>
                        </div>
                        <div id="phone">
                            <p className="contactTitle">Phone</p>
                            <p className="aboutDetails">{user.phone_number}</p>
                        </div>
                    </div>
                </AboutDiv>
                <InterestsDiv>
                    <p>Things I like</p>
                    <div id="interestTags">
                        {interests &&
                            interests.map((interest) => {
                                return (
                                    <div
                                        className="tag"
                                        key={`div-${interest}`}
                                    >
                                        <span
                                            className="tag-text"
                                            key={`span-${interest}`}
                                        >
                                            {interest}
                                        </span>
                                    </div>
                                );
                            })}
                    </div>
                </InterestsDiv>
                <CounterDiv>
                    <div className="counterDiv">
                        <p>{user.amount_of_posts}</p>
                        <p className="counterTitle">Posts</p>
                    </div>
                    <div className="counterDiv">
                        <p>{user.amount_of_likes}</p>
                        <p className="counterTitle">Likes</p>
                    </div>

                    <div className="counterDiv">
                        <p>{user.amount_of_friends}</p>
                        <p className="counterTitle">Friends</p>
                    </div>

                    <div className="counterDiv">
                        <p>{user.amount_of_followers}</p>
                        <p className="counterTitle">Followers</p>
                    </div>

                    <div className="counterDiv">
                        <p>{user.amount_following}</p>
                        <p className="counterTitle">Following</p>
                    </div>
                </CounterDiv>
            </ProfileCardDiv>
        </Wrapper>
    );
}
