import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h2>Por favor, inicie sesión para disfrutar del contenido</h2>
      <p>Usuario</p>
      <input type="text" placeholder="Mi nombre de usuario" />
      <p>Contraseña</p>
      <input type="password" placeholder="Introduzca tu contraseña" />
      <button>Iniciar sesión</button>

      <p>¿Todavía no tienes un usuario?</p>
      <p>
        ¿Qué esperas para registrarte? Es grátis (y seguirá siendo hasta que nos
        de la gana de cobrar por ello 😂)
      </p>
      <button>
        <Link to="/Register">Regístrate</Link>
      </button>
    </>
  );
}
