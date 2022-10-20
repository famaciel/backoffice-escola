import React from "react";
import "./Menu.scss";
import logo from "../../Utils/logo.jpg";

const Menu = () => {
  return (
    <div className="menu">
      <h1>
        <img src={logo} alt="logo" />
      </h1>

      {/* <div className="menu-list">
        <button>Alunos</button>
        <button>Contratos</button>
      </div> */}
    </div>
  );
};

export default Menu;
