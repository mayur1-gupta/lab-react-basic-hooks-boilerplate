import React, { useContext } from "react";
import { DarkThemeContext } from "../App";
import CustomComponent from "./UseEffect";

function MyContextComponent() {
    const paragraphData = `Developing writers can often benefit from examining an essay, a paragraph, or even a sentence to determine what makes it effective. On the following pages are several paragraphs for you to evaluate on your own, along with the Writing Center's explanation.

    Note: These passages are excerpted from actual student papers and retain the original wording. Some of the sentences are imperfect, but we have chosen these passages to highlight areas in which the author was successful.
    
    Thanks to the students who provided their writing for this page of our website. Do you have a discussion post, paper, or other writing assignment that you are particularly proud of? We would love to use it as a sample. Contact us at writingsupport@mail.waldenu.edu if you would like to share..`;

    const darkTheme = useContext(DarkThemeContext);

    const style = {
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
    };

    return (
        <div style={style}>
            <CustomComponent data={paragraphData} />
        </div>
    );
}

export default MyContextComponent;
