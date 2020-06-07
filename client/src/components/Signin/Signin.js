import React, { useState } from "react";

const Signin = ({ handleRoute, loadUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handleChangePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  const handleClick = () => {
    fetch("http://localhost:7000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.email === email) {
          loadUser(data);
          handleRoute("home");
        }
      });
  };

  return (
    <div>
      <div id="demotext">
        <h1 className="MsoNormal" style={{ textAlign: "center" }}>
          <span
            style={{
              fontFamily: '"Verdana",sans-serif',
              color: "#f4b183",
            }}
          >
            Hello there! ok
          </span>
        </h1>
        <h2
          className="MsoNormal measure-wide center"
          style={{ textAlign: "center" }}
        >
          <span
            style={{
              fontFamily: '"Verdana",sans-serif',
              color: "#bdd7ee",
            }}
          >
            Explore our image recognition models including Face Detection,
            Celebrity Detection, Age Detection and more!
          </span>
        </h2>
      </div>

      <article className="z white br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 white">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset  b--white ba bg-transparent hover-bg-white hover-black w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  required
                  value={email}
                  onChange={handleChangeEmail}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba b--white bg-transparent hover-bg-white hover-black w-100"
                  type="password"
                  name="password"
                  id="password"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                  value={password}
                  onChange={handleChangePassword}
                  onKeyPress={handleKeyPress}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={handleClick}
                className="b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => handleRoute("register")}
                className="f6 link dim white db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Signin;
