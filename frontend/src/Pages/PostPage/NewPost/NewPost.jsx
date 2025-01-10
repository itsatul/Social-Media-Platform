import {  useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addPost } from "../../../store/slice/postSlice";
import Button from "../../../assets/svgs/send_button.svg";


const NewPost = () => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");
  const dispatch = useDispatch();
  //const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyOTcwMzc2LCJpYXQiOjE3MzI3OTc1NzYsImp0aSI6IjJhZGRhYzcwY2JkYTQyZDViOTEzMGQ4OTNhYjA2ZWRhIiwidXNlcl9pZCI6NDA5OH0._dfBmZb1-lgYfSLzyhoUeDr2IrzU91n7VChfawM87HQ";
const token=localStorage.getItem("accessToken")

useEffect(() => {
  const fetchUserProfile = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.get("https://motion.propulsion-home.ch/backend/api/users/me/", config);
      console.log('result is',response.data.avatar);
      
      setProfilePicture(response.data.avatar); // Adjust to match your backend response
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  fetchUserProfile();
}, [token]);
  const handleFileChange = async (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("content", content); // Add post content
    if (file) {
      formData.append("images", file); // Dynamically add the uploaded file
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.post(
        "https://motion.propulsion-home.ch/backend/api/social/posts/",
        formData,
        config
      );

      dispatch(addPost(response.data)); // Dispatch the response to Redux
      setContent(""); // Clear the input after successful post
      setFile(null); // Clear the selected file after successful post
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };


  return (
   
    <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
       <div className="postInput">
       <img
          src={profilePicture}
          alt="User Avatar"
          style={{ width: "40px", borderRadius: "50%" }}
        />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post here,"
        required
      />
      <input type="file" onChange={handleFileChange} style={{ display: "none" }}accept="image/*" 
        id="fileInput" />
      <label htmlFor="fileInput">
      <span>Choose Image</span>  
      </label>
      <button type="submit">
      <img src={Button} alt="Send Button" className="sendButton" />
      </button>
      {file && (
          <div>
            <h4>File selected:</h4>
            <img
              src={URL.createObjectURL(file)}
              alt="Selected Preview"
              style={{ maxWidth: "200px", marginTop: "10px" }}
            />
          </div>
        )}
      </div>
    </form>
    
  );
};

export default NewPost;

