/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const ImageLinkForm = ({ handleChange, input, handleClick }) => {
  const [type, setType] = useState("hello");
  return (
    <div className="z">
      <p className="f3 center measure-wide">
        {type === "hello"
          ? "Please select your choice bellow"
          : type === "face"
          ? "This Magic will detect the presence and location of human faces in your pictures"
          : type === "demo"
          ? "This Magic will predict the age, gender, and culture appearance of detected faces in your pictures"
          : type === "cele" &&
            "This Magic will identify celebrities that closely resemble detected faces in your pictures"}
      </p>
      <div className="center">
        <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-85-l mw6 shadow-5 ">
          <nav className="pa1 pa3-ns pb0-ns mb0">
            <a
              className="pointer hover link dim white f4 f5-ns dib mr4"
              title=""
              onClick={() => setType("face")}
            >
              Face Detection
            </a>
            <a
              className="pointer hover link dim white f4 f5-ns dib mr4"
              title=""
              onClick={() => setType("demo")}
            >
              Demographics
            </a>
            <a
              className="pointer hover link dim white f4 f5-ns dib mr4"
              title=""
              onClick={() => setType("cele")}
            >
              Celebrity
            </a>
          </nav>
          <div className="  b--white pa4 br12 shadow-5 ">
            <input
              onChange={handleChange}
              value={input}
              className="f4 pa2 w-70 b--white "
              placeholder="Enter your URL here"
              type="text"
            />
            <button
              onClick={() => handleClick(type)}
              className="w-30 grow f4 link ph3 pv2 dib b--white white bg-light-blue pointer"
            >
              Detect
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ImageLinkForm;
