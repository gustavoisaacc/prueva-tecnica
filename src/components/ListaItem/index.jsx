/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./listItem.css";
import { BookContext } from "../../useContext";

function ListaItem({ book }) {
  const { addListBook, deleteListBook } = useContext(BookContext);
  const { title, author, cover, genre, ISBN, complete } = book;

  const botton = complete ? "Eliminar Lista" : "Agregar Lista";
  const handleClick = (id, book) =>
    complete ? deleteListBook(id, book) : addListBook(id, book);

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
        onClick={() => handleClick(ISBN, book)}
      >
        {botton}
      </button>
    </li>
  );
}

export default ListaItem;
