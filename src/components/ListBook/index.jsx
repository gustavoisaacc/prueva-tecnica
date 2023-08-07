/* eslint-disable react/prop-types */
import { useContext } from "react";
import ListaItem from "../ListaItem";
import "./listaBook.css";
import { BookContext } from "../../useContext";

function ListBook() {
  const { books, maches } = useContext(BookContext);
  const filter = maches.length !== 0 ? maches : books;
  return (
    <section className="list-book">
      <ul className="lista-book--container">
        {filter.map((book) => (
          <ListaItem key={book.ISBN} book={book} />
        ))}
      </ul>
    </section>
  );
}

export default ListBook;
