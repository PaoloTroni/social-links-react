import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/about-us">Sobre nosotros</Link>
        </li>
        <li>
          <Link to="/legal-notice">Aviso legal</Link>
        </li>
        <li>(c) 2023 Social Link</li>
      </ul>
    </footer>
  );
}
