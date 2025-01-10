import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPosts} from "../../../store/slice/postSlice";
import axios from "axios";
import styled from "styled-components";
import PostDetail from "../PostDetail/PostDetail";
import Heart from '../../../assets/svgs/heart.svg'
import Share from '../../../assets/svgs/share.svg'
// Styled Components
const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
`;

const PostContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 400px;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .post-user-info {
    display: flex;
    flex-direction: column;
  }

  .post-user-name {
    font-weight: bold;
    margin: 0;
  }

  .post-date {
    font-size: 12px;
    color: #777;
  }
`;

const PostImageContainer = styled.div`
  width: 100%;
  max-height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    display: block;
  }
`;

const PostContent = styled.div`
  padding: 10px;
  font-size: 14px;
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #e0e0e0;

  .actions-left button {
    
    margin-right: 10px;
    padding: 5px 15px;
    border: none;
    background-color: white;
    color: black;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }

    
    
  }

  .likes {
    font-size: 12px;
    color: #777;
  }
`;

// Component
export default function Posts() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    const [loadingError, setLoadingError] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null)
    const token = localStorage.getItem("accessToken")

    const fetchPosts = async () => {
        console.log("Fetching posts...");
        setLoadingError(false);

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.get(
                "https://motion.propulsion-home.ch/backend/api/social/posts/",
                config
            );
            console.log("full response", response.data);
            dispatch(setPosts(response.data.results));
        } catch (error) {
            console.error("Error fetching posts:", error);
            setLoadingError(true);
        }
    };

    useEffect(() => {
        console.log("Calling fetchPosts...");
        fetchPosts();
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleBack = () => {
        setSelectedPost(null); // Reset selected post to show the list again
    };

    if (loadingError) {
        return <div>Error loading posts. Please try again later.</div>;
    }

    return (
        <div>
            {selectedPost ? (
                <PostDetail post={selectedPost} onBack={handleBack}/>
            ) : posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                <PostsContainer>
                    {posts.map((post) => (
                        <PostContainer key={post.id} onClick={() => handlePostClick(post)}>
                            <PostHeader>
                                <img
                                    src={post.user.profile_picture}
                                    alt={`${post.user.first_name} ${post.user.last_name}`}
                                />
                                <div className="post-user-info">
                                    <p className="post-user-name">
                                        {post.user.first_name} {post.user.last_name}
                                    </p>
                                    <p className="post-date">{post.created}</p>
                                </div>
                            </PostHeader>
                            {post.images && post.images.length > 0 && (
                                <PostImageContainer>
                                    <img
                                        src={post.images[0].image}
                                        alt={`Post by ${post.user.first_name}`}
                                    />
                                </PostImageContainer>
                            )}
                            <PostContent>{post.content}</PostContent>
                            <PostActions>
                                <div className="actions-left">
                                    <img src={Heart}/>
                                    <button>Like</button>
                                    <img src={Share}/>
                                    <button>Share</button>
                                </div>
                                <div className="likes">{post.likes}3 likes</div>
                            </PostActions>
                        </PostContainer>
                    ))}
                </PostsContainer>
            )}
        </div>
    );
}
