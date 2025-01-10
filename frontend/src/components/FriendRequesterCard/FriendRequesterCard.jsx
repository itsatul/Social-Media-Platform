import {AcceptButton, CancelButton, GroupDiv, PendingButton, RequesterDiv, RequsterImage,} from "./styles";

export default function FriendRequesterCard({requester, isRequester}) {
    return (
        <RequesterDiv>
            <GroupDiv>
                <RequsterImage src={requester.avatar}></RequsterImage>
                <div>
                    <p>
                        {requester.first_name} {requester.last_name}
                    </p>
                    {requester.location ? (
                        <p style={{color: "grey"}}>{requester.location}</p>
                    ) : (
                        <p style={{color: "grey"}}>No info</p>
                    )}
                </div>
            </GroupDiv>

            <GroupDiv>
                {isRequester ? (
                    <>
                        <AcceptButton> ✔ </AcceptButton>
                        <CancelButton> ✖ </CancelButton>
                    </>
                ) : (
                    <>
                        <PendingButton> ⦿ </PendingButton>
                    </>
                )}
            </GroupDiv>
        </RequesterDiv>
    );
}
