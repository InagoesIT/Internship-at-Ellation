import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src={props.imageSrc} alt="Web page logo" />
      </Link>

      <ul className="header-menu">
        {props.menu.map(item => (
          <li className="header-menu-option" key={item.link}>
            <Link to={item.link}>{item.title} </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
