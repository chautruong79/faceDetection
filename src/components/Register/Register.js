import React, { useState } from "react";

const Register = ({ handleRoute, loadUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChangeFirstName = (event) => {
    const fName = event.target.value;
    setFirstName(fName);
  };
  const handleChangeLastName = (event) => {
    const lName = event.target.value;
    setLastName(lName);
  };

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
    fetch("http://localhost:7000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.name === `${firstName} ${lastName}` && data.email === email) {
          loadUser(data);
          handleRoute("home");
        }
      });
  };

  return (
    <article className="z br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 white-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="fname">
                First Name
              </label>
              <input
                className="pa2 input-reset b--white ba bg-transparent hover-bg-white hover-black w-100"
                type="text"
                name="fname"
                id="fname"
                required
                value={firstName}
                onChange={handleChangeFirstName}
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="lname">
                Last Name
              </label>
              <input
                className="pa2 input-reset b--white ba bg-transparent hover-bg-white hover-black w-100"
                type="text"
                name="lname"
                id="lname"
                required
                value={lastName}
                onChange={handleChangeLastName}
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset b--white ba bg-transparent hover-bg-white hover-black w-100"
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
                className="b pa2 input-reset b--white ba bg-transparent hover-bg-white hover-black w-100"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                type="password"
                name="password"
                id="password"
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
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
