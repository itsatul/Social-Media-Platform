import {NotificationCardDiv} from "./styles";
import {api} from "../../axios/axios";
import {useEffect, useState} from "react";
import FriendRequesterCard from "../FriendRequesterCard/FriendRequestercard";

export default function NotificationCard() {
    const token = localStorage.getItem("accessToken");

    const [recievedRequests, setRecievedRequests] = useState([]);
    const [sentRequests, setsentRequests] = useState([]);
    const fetchRequests = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const ownIDReq = await api.get("/users/me/", config);
            const ownId = ownIDReq.data.id;
            const res = await api.get("/social/friends/requests/", config);
            const requests = res.data.results;
            const recievedReq = requests.filter(
                (item) => item.receiver.id === ownId && item.status === "P"
            );
            setRecievedRequests(recievedReq);
            const sentReq = requests.filter(
                (item) => item.requester.id === ownId && item.status === "P"
            );
            setsentRequests(sentReq);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    return (
        <>
            <NotificationCardDiv>
                <span>Received requests</span>
                <div style={{padding: "1.5rem 0"}}>
                    {recievedRequests.map((item) => {
                        return (
                            <>
                                <FriendRequesterCard
                                    key={item.id}
                                    requester={item.requester}
                                    isRequester={true}
                                ></FriendRequesterCard>
                            </>
                        );
                    })}
                </div>
                <span>Sent requests</span>

                <div style={{padding: "1.5rem 0"}}>
                    {sentRequests.map((item) => {
                        return (
                            <>
                                <FriendRequesterCard
                                    key={item.id}
                                    requester={item.receiver}
                                    isRequester={false}
                                ></FriendRequesterCard>
                            </>
                        );
                    })}
                </div>
            </NotificationCardDiv>
        </>
    );
}
