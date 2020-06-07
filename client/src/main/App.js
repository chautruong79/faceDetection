import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import Navigation from "../components/Navigation/Navigation";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [box, setBox] = useState([]);
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });

  // useEffect(() => {
  //   fetch("http://localhost:7000/")
  //     .then((response) => response.json())
  //     .then(console.log);
  // }, []);
  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const handleClick = (type) => {
    if (input.length > 0) {
      setImageURL(input);
      fetch("http://localhost:7000", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          _method: "POST",
          Authorization: "",
        },
        body: JSON.stringify({
          input: input,
          type: type,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (
            response.outputs[0].data.regions &&
            response.outputs[0].data.regions.length > 0
          ) {
            fetch("http://localhost:7000/image", {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                _method: "PATCH",
                Authorization: "",
              },
              body: JSON.stringify({
                id: user.id,
              }),
            })
              .then((res) => res.json())
              .then((count) => {
                setUser((preVal) => {
                  return { ...preVal, entries: count };
                });
              })
              .catch(console.log);
          }
          setBox([response.outputs[0].data.regions, type]);
          setInput("");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleRoute = (event) => {
    setRoute(event);
    if (event === "signin" || event === "register") {
      setSignedIn(false);
      setInput("");
      setImageURL("");
      setBox([]);
      setUser({
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      });
    }
    if (event === "home") setSignedIn(true);
  };

  const loadUser = (data) => {
    setUser(data);
    //console.log(data);
  };

  return (
    <div className="App">
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.01,
            },
            move: {
              // @ts-ignore
              direction: "right",
              speed: 0.07,
            },
            size: {
              value: 2,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Navigation handleRoute={handleRoute} isSignedIn={isSignedIn} />
      {route === "signin" ? (
        <Signin handleRoute={handleRoute} loadUser={loadUser} />
      ) : route === "register" ? (
        <Register handleRoute={handleRoute} loadUser={loadUser} />
      ) : (
        <div>
          <Rank entries={user.entries} name={user.name} />
          <ImageLinkForm
            handleChange={handleChange}
            input={input}
            handleClick={handleClick}
          />
          <FaceRecognition imageURL={imageURL} info={box} />
        </div>
      )}
    </div>
  );
}

export default App;
