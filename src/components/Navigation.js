import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';


// Link는 라우터 안에 있어야한다.
// Link는 html에서 a 태그이므로, css에서 a로 적용하면 된다.
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navigation;