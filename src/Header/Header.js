import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <img className="header-logo" src={props.imageSrc} alt="Web page logo" />
      <ul className="header-menu">
        {props.menu.map(item => (
          <li className="header-menu-option" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
