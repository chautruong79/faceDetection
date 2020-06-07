import React from "react";

const Details = ({ info, type }) => {
  if (type === "demo")
    return info.map((item, ind) => {
      return (
        <article className="pa3 pa1-ns static">
          <h1 className="f4 bold mw6 center tc">Face {ind + 1}</h1>
          <ul className="list pl0 ml0 center mw6 ba b--light-silver br2 tl db db-ns db-m db-l">
            <li className="ph3 pv3 bb b--light-silver db">
              <nav className="b blue">Gender Appearance:</nav>{" "}
              {item.data.concepts[20].name}
              <nav className="fr">
                {(item.data.concepts[20].value * 100).toFixed(2)}%
              </nav>
            </li>
            <li className="ph3 pv3 bb b--light-silver db">
              <nav className="b blue">Age Appearance:</nav>{" "}
              {item.data.concepts[0].name}
              <nav className="fr">
                {(item.data.concepts[0].value * 100).toFixed(2)}%
              </nav>
            </li>
            <li className="ph3 pv3 bb b b--light-silver db">
              <nav className="b blue">Multicultural Appearance:</nav>
              <li className="ph3 pv3  b--light-silver db">
                {item.data.concepts[22].name}
                <nav className="fr">
                  {(item.data.concepts[22].value * 100).toFixed(2)}%
                </nav>
              </li>
              <li className="ph3 pv3  b--light-silver db">
                {item.data.concepts[23].name}
                <nav className="fr">
                  {(item.data.concepts[23].value * 100).toFixed(2)}%
                </nav>
              </li>
              <li className="ph3 pv3  b--light-silver db">
                {item.data.concepts[24].name}
                <nav className="fr">
                  {(item.data.concepts[24].value * 100).toFixed(2)}%
                </nav>
              </li>
              <li className="ph3 pv3  b--light-silver db">
                {item.data.concepts[25].name}
                <nav className="fr">
                  {(item.data.concepts[25].value * 100).toFixed(2)}%
                </nav>
              </li>
              <li className="ph3 pv3  b--light-silver db">
                {item.data.concepts[26].name}
                <nav className="fr">
                  {(item.data.concepts[26].value * 100).toFixed(2)}%
                </nav>
              </li>
              <li className="ph3 pv3  b--light-silver db">
                {item.data.concepts[27].name}
                <nav className="fr">
                  {(item.data.concepts[27].value * 100).toFixed(2)}%
                </nav>
              </li>
              <li className="ph3 pv3  b--light-silver db">
                {item.data.concepts[28].name}
                <nav className="fr">
                  {(item.data.concepts[28].value * 100).toFixed(2)}%
                </nav>
              </li>
            </li>
          </ul>
        </article>
      );
    });
  else if (type === "cele")
    return (
      <article className="pa3 pa5-ns">
        <h1 className="f4 bold mw6 center tc">Celebrity</h1>
        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2 tl db  db-ns db-m db-l">
          {info.map((item) => (
            <li className="ph3 pv3 bb b--light-silver db">
              <nav className="b blue dib">{item.data.concepts[0].name} </nav>
              <nav className="fr">
                {(item.data.concepts[0].value * 100).toFixed(2)}%
              </nav>
            </li>
          ))}
        </ul>
      </article>
    );
  // eslint-disable-next-line jsx-a11y/heading-has-content
  else return <h1></h1>;
};

export default Details;
