import React from "react";

export default function DataUser() {
  let user = "fulanito"; //después hay que sacar eso ya que el user lo sacaremos del Back
  return (
    <article>
      <h2>Has iniciado sesión como {user}.</h2>
      <p>
        Si deseas editar tus datos, por favor haz click en el botón
        correspondiente:
      </p>
      <button>Editar nombre de usuario</button>
      <button>Editar contraseña</button>
    </article>
  );
}
