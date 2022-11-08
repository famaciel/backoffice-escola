import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Home.scss";

import logo from "../../Utils/logo.jpg";



const Home = () => {
  
  return (
    <div>
      <div className="matricula-form">
        <div className="matricula-form-header">
          <img src={logo} alt="logo" />
          <h2>Escola dos Sonhos</h2>
          <h3>Home</h3>
        </div>
      </div>
    </div>
  );

};

export default Home;