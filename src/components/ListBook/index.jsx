import ListaItem from "../ListaItem";
import "./listaBook.css";

function ListBook(props) {
  return (
    <section className="list-book">
      <ul className="lista-book--container flex">
        <ListaItem />
        <ListaItem />
        <ListaItem />
        <ListaItem />
        <ListaItem />
      </ul>
    </section>
  );
}

export default ListBook;
