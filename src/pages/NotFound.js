import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>Ooops - Error 404: Esa página no existe</h2>

      <Link to="/">Volver a la página inicial</Link>
    </>
  );
}
