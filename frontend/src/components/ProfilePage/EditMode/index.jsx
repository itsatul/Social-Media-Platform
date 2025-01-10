// ---------- IMPORTS ----------
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useCardFlip} from "../CardFlipProvider";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData, updateUserData} from "../../../store/slice/tiaraslice";
import {useNavigate} from "react-router-dom";
import {api} from "../../../axios/axios";
import {logout} from "../../../store/slice/user";

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

const EditProfileCard = styled.div`
    min-height: 400px;
    height: auto;
    width: 80vw;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 10px 20px 0px #0000000d;
    margin-top: calc(150px + 5vh);
    display: grid;
    grid-template-columns: 1fr 1.3fr 1.3fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 1fr 2fr;
    box-sizing: border-box;
`;

const LeftDiv = styled.div`
    grid-row-start: 1;
    grid-row-end: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid #00000010;

    .avatar {
        height: 60%;
        max-width: 100%;
        display: flex;
        padding-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #avatarPicture {
        width: 80px;
        height: 80px;
        border: none;
        border-radius: 50%;
        margin-bottom: 2rem;
    }

    #buttons {
        width: 100%;
        margin-bottom: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
    }

    .updateImageInput {
        display: none;
    }

    input[type="file"]::file-selector-button {
        width: 100%;
        background: none;
        border: 1px, solid, rgba(0, 0, 0, 0.08);
        border-radius: 30px;
        width: 158px;
        height: 40px;
        font-size: 10px;
        font-weight: 400;
        overflow: hidden;

        &:hover {
            box-shadow: 0 10px 20px 0px #0000000d;
        }

        &:active {
            box-shadow: 0 10px 20px 0px #0000000d;
            transform: translateY(4px);
        }

        cursor: pointer;
    }
`;

const UpdateImageDiv = styled.div`
    width: 70%;
    height: 25%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    border: 1px, solid, rgba(0, 0, 0, 0.08);
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    box-shadow: 0px 10px 30px 0px #00000012;

    div {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    input[type="file"] {
        display: none;
    }
`;

export const PrimButton = styled.button`
    background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
    box-shadow: 0px 10px 30px 0px #00000012;
    border-radius: 30px;
    width: 158px;
    height: 40px;
    border: none;
    color: #ffffff;
    font-size: 10px;
    font-weight: 400;

    &:hover {
        box-shadow: 0 10px 20px 0px #0000000d;
    }

    &:active {
        box-shadow: 0 10px 20px 0px #0000000d;
        transform: translateY(4px);
    }
`;

export const SecButton = styled.button`
    width: 100%;
    background: none;
    border: 1px, solid, rgba(0, 0, 0, 0.08);
    border-radius: 30px;
    width: 158px;
    height: 40px;
    font-size: 10px;
    font-weight: 400;

    &:hover {
        box-shadow: 0 10px 20px 0px #0000000d;
    }

    &:active {
        box-shadow: 0 10px 20px 0px #0000000d;
        transform: translateY(4px);
    }
`;

const LabelEdit = styled.label`
    font-size: 12px;
    padding: 1.5rem;
    color: #0000007d;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const InputEdit = styled.input`
    background: none;
    all: unset;
    border-bottom: solid 1px #00000016;
    line-height: 2rem;
    padding-left: 1rem;
    transition: box-shadow;
    transition-duration: 300ms;
    color: black;

    &::placeholder {
        color: #131313;
    }

    &:focus {
        box-shadow: 0 10px 20px 0px #0000000d;
        color: black;
    }

    #aboutEdit {
    }
`;

// ---------- Things user likes ----------

const AddThings = styled.div`
    padding: 2rem;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 5;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;

    p {
        font-size: 14px;
        font-weight: 400;
    }

    input {
        width: 80%;
        background: none;
        all: unset;
        border-bottom: solid 1px #00000016;
        line-height: 2rem;
        padding-left: 1rem;
    }

    #interestTags {
        .tag {
            display: inline-flex;
            align-items: center;
            background-color: #f1f1f1;
            border-radius: 20px;
            padding: 5px 15px;
            font-size: 14px;
            margin: 5px;
            white-space: nowrap;
            width: auto;
            max-width: 100%;
            overflow: hidden;
        }

        .tag-text {
            margin-right: 8px;
            overflow: hidden;
        }

        .tag-close {
            cursor: pointer;
            font-size: 18px;
            color: #888;
            line-height: 1;
        }
    }

    #addTags {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

// ---------- COMPONENT ----------

export default function EditProfile() {
    const {flipCard} = useCardFlip();

    // const GrowingInput = () => {
    //     const [aboutInput, setAboutInput] = useState("");

    //     const handleAboutInput = (e) => {
    //         const textarea = e.target;
    //         textarea.style.height = auto;
    //         textarea.style.height = `${textarea.scrollHeight}px`;
    //         setAbout(textarea.value);
    //     };
    // };

    // ------ fetching data ------
    const dispatch = useDispatch();
    const user = useSelector((state) => state.tiara.userData); // fetch user data from with redux

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    //console.log("Edit Mode user data", user);

    // ----- managing local state ------

    const [localUser, setLocalUser] = useState({
        // manage local changes for input fields
        avatar: "",
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        location: "",
        phone_number: "",
        about_me: "",
        things_user_likes: [],
        password: "",
    });

    useEffect(() => {
        if (user) {
            setLocalUser({
                avatar: user.avatar,
                first_name: user.first_name || "",
                last_name: user.last_name || "",
                email: user.email || "",
                username: user.username || "",
                location: user.location || "",
                phone_number: user.phone_number || "",
                about_me: user.about_me || "",
                password: user.password || "",
                things_user_likes: user.things_user_likes || [],
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setLocalUser((prev) => ({...prev, [name]: value}));
    };

    // ----------------------------------------

    // ------ Sending updated data to API ------
    const handleInputSave = (e) => {
        console.log("before dispatching data", localUser);
        dispatch(updateUserData(localUser)); // send updated data to API
        console.log("after dispatching data");
    };

    // ---------- Adding interests ----------
    const interests = [...localUser.things_user_likes];
    const [newInterest, setNewInterest] = useState("");

    const handleNewInterest = (e) => {
        setNewInterest(e.target.value);
        console.log("new interest:", newInterest);
    };

    const handleAddNewInterest = (e) => {
        setLocalUser((prev) => ({
            ...prev,
            things_user_likes: [...prev.things_user_likes, newInterest],
        }));
        console.log(
            "local user likes after update state:",
            localUser.things_user_likes
        );
        setNewInterest("");
    };

    // -------------------------------

    // ---------- Removing interests ----------
    console.log("things user likes", localUser.things_user_likes);
    console.log(
        "find sleeping",
        localUser.things_user_likes.indexOf("Sleeping")
    );

    const handleRemoveInterest = (e) => {
        const removeInterest = e.target.dataset.interest;
        console.log("REMOVE:", removeInterest);

        setLocalUser((prev) => ({
            ...prev,
            things_user_likes: prev.things_user_likes.filter(
                (interest) => interest !== removeInterest // array without the targeted interest(removeInterest)
            ),
        }));
    };

    // ----------------------------------------

    // ---------- Update Profile Image ----------

    const [fileName, setFileName] = useState("Update Image");
    const [updateImageButton, setUpdateImageButton] = useState(false);

    const handleClickImageButton = (e) => {
        setUpdateImageButton(!updateImageButton);
    };


    // delete ACcount button
    const navigate = useNavigate();
    const handleDeleteAccount = async (e) => {
        const token = localStorage.getItem("accessToken")
        console.log(token);

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
            const res = await api.delete("/users/me/", config);
            console.log("bbbbbb");
            dispatch(logout());
            navigate("/login");
        } catch (error) {
            console.log("aaaa");
        }


    }
    return (
        <Wrapper>
            <EditProfileCard>
                <LeftDiv>
                    <div className="avatar">
                        <img id="avatarPicture" src={localUser.avatar}/>
                        <SecButton onClick={handleClickImageButton}>
                            <label
                                htmlFor="fileInput"
                                className="fileInputLabel"
                            >
                                {/* <input
                                    id="fileInput"
                                    type="file"
                                    className="updateImageInput"
                                    onChange={handleFilechange}
                                /> */}
                                {"Update Image"}
                            </label>
                        </SecButton>

                        <>
                            {updateImageButton && (
                                <UpdateImageDiv>
                                    <div id="uplaodDiv">
                                        <label
                                            htmlFor="fileInput"
                                            className="fileInputLabel"
                                        >
                                            <input type="file" id="fileInput"/>
                                            {"Upload"}
                                        </label>
                                    </div>
                                    <div id="removeDiv">
                                        <p>Remove</p>
                                    </div>
                                </UpdateImageDiv>
                            )}
                        </>
                    </div>

                    <div id="buttons">
                        <SecButton onClick={(e) => handleDeleteAccount(e)}>DELETE ACCOUNT</SecButton>
                        <PrimButton
                            onClick={() => {
                                flipCard();
                                handleInputSave();
                            }}
                        >
                            SAVE
                        </PrimButton>
                    </div>
                </LeftDiv>
                <LabelEdit>
                    First Name
                    <br/>
                    <InputEdit
                        name="first_name"
                        value={localUser.first_name}
                        placeholder={localUser.first_name}
                        onChange={handleInputChange}
                    ></InputEdit>
                </LabelEdit>
                <LabelEdit>
                    Last Name
                    <br/>
                    <InputEdit
                        name="last_name"
                        value={localUser.last_name}
                        placeholder={localUser.last_name}
                        onChange={handleInputChange}
                    ></InputEdit>
                </LabelEdit>
                <LabelEdit>
                    Email
                    <br/>
                    <InputEdit
                        name="email"
                        value={localUser.email}
                        placeholder={localUser.email}
                        onChange={handleInputChange}
                    ></InputEdit>
                </LabelEdit>
                <LabelEdit>
                    Username
                    <br/>
                    <InputEdit
                        name="username"
                        value={localUser.username}
                        placeholder={localUser.username}
                        onChange={handleInputChange}
                    ></InputEdit>
                </LabelEdit>
                <LabelEdit>
                    Location
                    <br/>
                    <InputEdit
                        name="location"
                        value={localUser.location}
                        placeholder={localUser.location}
                        onChange={handleInputChange}
                    ></InputEdit>
                </LabelEdit>
                <LabelEdit>
                    Phone
                    <br/>
                    <InputEdit
                        name="phone_number"
                        value={localUser.phone_number}
                        placeholder={localUser.phone_number}
                        onChange={handleInputChange}
                    ></InputEdit>
                </LabelEdit>
                <LabelEdit>
                    About
                    <br/>
                    <InputEdit
                        name="about_me"
                        value={localUser.about_me}
                        placeholder={localUser.about_me}
                        onChange={handleInputChange}
                    ></InputEdit>
                </LabelEdit>
                <LabelEdit>
                    Password
                    <br/>
                    <InputEdit
                        type="password"
                        name="password"
                        value={localUser.password}
                        placeholder={localUser.password}
                        onChange={handleInputChange}
                    ></InputEdit>
                </LabelEdit>

                <AddThings>
                    <p>Things I Like</p>
                    <div id="interestTags">
                        {interests &&
                            interests.map((interest) => {
                                return (
                                    <div
                                        className="tag"
                                        key={`divEdit-${interest}`}
                                    >
                                        <span
                                            className="tag-text"
                                            key={`spanEdit-${interest}`}
                                        >
                                            {interest}
                                        </span>
                                        <span
                                            data-interest={interest}
                                            className="tag-close"
                                            key={`deleteInterestEdit-${interest}`}
                                            onClick={handleRemoveInterest}
                                        >
                                            ×
                                        </span>
                                    </div>
                                );
                            })}
                    </div>
                    <div id="addTags">
                        <label>
                            <InputEdit
                                name="about_me"
                                value={newInterest}
                                onChange={handleNewInterest}
                                placeholder="Type something..."
                            ></InputEdit>
                        </label>
                        <SecButton
                            onClick={() => {
                                handleAddNewInterest();
                            }}
                        >
                            Add
                        </SecButton>
                    </div>
                </AddThings>
            </EditProfileCard>
        </Wrapper>
    );
}
