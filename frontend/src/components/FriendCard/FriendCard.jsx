import {useState} from "react";
import FollowButton from "../FollowButton/FollowButton";
import AddFriendButton from "../AddFriendButton/AddFriendButton";
import InterestCard from "../InterestCard/InterestCard";

import {api} from "../../axios/axios";
import {ButtonsDiv, FriendCardDiv, FriendImage, FriendInfoDiv, FriendName, LikesDiv,} from "./styles";

export default function FriendCard({friend}) {
    const token = localStorage.getItem("accessToken");

    const [isFollowing, setIsFollowing] = useState(
        friend.logged_in_user_is_following
    );

    const [isFriend, setIsFriend] = useState(friend.logged_in_user_is_friends);

    const handleFollow = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const res = await api.post(
                `/social/followers/toggle-follow/${friend.id}/`,
                {},
                config
            );
            setIsFollowing(!isFollowing);
        } catch (error) {
            console.error();
        }
    };

    return (
        <>
            <FriendCardDiv>
                <FriendImage src={friend.avatar}/>

                <FriendInfoDiv>
                    <FriendName>
                        {friend.first_name} {friend.last_name}
                    </FriendName>
                    <p>{friend.location}</p>
                </FriendInfoDiv>

                <ButtonsDiv>
                    <FollowButton
                        onClick={() => handleFollow(event)}
                        isFollowing={isFollowing}
                    >
                        {isFollowing ? "FOLLOWING" : "FOLLOW"}
                    </FollowButton>
                    <AddFriendButton>
                        {isFriend ? " ✔ FRIEND" : "ADD FRIEND"}
                    </AddFriendButton>
                </ButtonsDiv>

                {friend.about_me ? (
                    <p>{friend.about_me}</p>
                ) : (
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et
                    </p>
                )}

                <LikesDiv>
                    {friend.things_user_likes.map((like, idx) => (
                        <InterestCard key={idx}>{like}</InterestCard>
                    ))}
                </LikesDiv>
            </FriendCardDiv>
        </>
    );
}
