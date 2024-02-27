import React, { useState, useEffect } from "react";

function CustomComponent(props) {
    const [content, setContent] = useState(""); // Initialize content with an empty string
    const [likes, setLikes] = useState(0);

    const handleChangeContent = () => {
        setContent((prevContent) => (prevContent === "" ? props.data : ""));
    };

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };

    useEffect(() => {
        if (content !== "") {
            alert("Content has been toggled");
        }
    }, [content]); // Run the effect only when content is toggled

    return (
        <div>
            <h3>{content}</h3>
            <button onClick={handleChangeContent}>Toggle Content</button>
            <h1>{likes}</h1>
            <button onClick={handleLike}>Like</button>
        </div>
    );
}

export default CustomComponent;
