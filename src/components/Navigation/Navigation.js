import React from "react";

const Navigation = ({ handleRoute, isSignedIn }) => {
  return (
    <div className="z">
      {isSignedIn ? (
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => handleRoute("signin")}
            className="f3 link dim white underline pa3 pointer ma3"
          >
            Sign Out
          </p>
        </nav>
      ) : (
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => handleRoute("signin")}
            className="f3 link dim white underline pa3 pointer ma3"
          >
            Sign In
          </p>
          <p
            onClick={() => handleRoute("register")}
            className="f3 link dim white underline pa3 pointer ma3"
          >
            Register
          </p>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
