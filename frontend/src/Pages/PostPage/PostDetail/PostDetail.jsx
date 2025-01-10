import React from "react";
import {Div, PostDetails, PostImage} from "./style";


const PostDetail = ({post, onBack}) => {
    return (
        <Div>


            <PostImage>
                {post.images && post.images.length > 0 && (
                    <div>
                        {post.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.image}
                                alt={`Post Image ${index + 1}`}
                                style={{maxWidth: "100%", marginTop: "10px"}}
                            />
                        ))}
                    </div>
                )}
            </PostImage>
            <PostDetails>
                <button onClick={onBack}>Back to Posts</button>

                <h3>
                    {post.user.first_name} {post.user.last_name}
                </h3>
                <p>{post.content}</p>

            </PostDetails>

        </Div>

    );
};

export default PostDetail;