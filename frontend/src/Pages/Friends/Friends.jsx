import {FriendCardContainer} from "./styles";
import FriendCard from "../../components/Friendcard/FriendCard";
import {useEffect} from "react";
import {api} from "../../axios/axios";
import {useDispatch, useSelector} from "react-redux";
import {setFriends} from "../../store/slice/friendSlice";

export default function Friends() {
    const token = localStorage.getItem("accessToken");
    const friends = useSelector((state) => state.friends.friends)
    const dispatch = useDispatch()

    const fetchFriends = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await api.get("/users/", config);
            dispatch(setFriends(res.data.results));
        } catch (error) {
            console.error();
        }
    };

    useEffect(() => {
        fetchFriends();
    }, []);

    return (
        <>
            <FriendCardContainer>
                {friends.map((friend, id) => (
                    <FriendCard key={id} friend={friend}></FriendCard>
                ))}
            </FriendCardContainer>
        </>
    );
}
