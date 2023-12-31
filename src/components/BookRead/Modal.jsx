/* eslint-disable react/prop-types */
import { useContext } from "react";
import ListaItem from "../ListaItem";
import { BookContext } from "../../useContext";

function Modal({ openModal, handelClick }) {
  const { listRead } = useContext(BookContext);
  return (
    <aside className={`modal-container ${openModal ? "show" : "hidden"}`}>
      <article className="modal-list--read">
        <div className="clouse" onClick={handelClick}>
          X
        </div>
        <h3>{listRead.length} Lista de lectura</h3>
        <div className="book">
          {listRead.map((book, i) => {
            console.log(book);
            return <ListaItem key={book.ISBN} book={book} />;
          })}
        </div>
      </article>
    </aside>
  );
}

export default Modal;
