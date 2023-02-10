import React from "react";

export default function Register() {
  return (
    <section>
      <h2>Crear nuevo usuario</h2>
      <p>Nombre de Usuario</p>
      <input type="text" placeholder="Introduzca tu nombre de usuario" />
      <p>Contraseña</p>
      <input type="password" placeholder="Introduzca tu contraseña" />
      <p>Por favor, repita la contraseña</p>
      <input type="password" placeholder="Confirme la contraseña" />
      <button>¡Adelante!</button>
    </section>
  );
}
