import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Social link</Link>
      </h1>
      <p>
        <Link to="/user/:id">Mi perfil</Link>
      </p>
    </header>
  );
}
