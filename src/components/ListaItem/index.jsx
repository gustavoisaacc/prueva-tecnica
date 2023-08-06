/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./listItem.css";
import { BookContext } from "../../useContext";

function ListaItem({ title, author, cover, genre }) {
  const { addListaRead } = useContext(BookContext);
  return (
    <li className="list-item">
      <figure className="list-item--img">
        <img src={cover} alt="" />
      </figure>
      <div className="list-item--info">
        <h4>Nombre: {title}</h4>
        <p>
          <b>Autor</b>: {author.name}
        </p>
        <p>
          <b>Genero</b>: {genre}
        </p>
      </div>
      <button
        className="btn"
        id={title}
        onClick={(e) => addListaRead(e, title)}
      >
        Agregar lista
      </button>
    </li>
  );
}

export default ListaItem;
