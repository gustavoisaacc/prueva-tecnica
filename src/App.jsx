import BookFilter from "./components/BookFilter";
import ListBook from "./components/ListBook";
import BookRead from "./components/BookRead";

function App() {
  return (
    <>
      <h1>Libros Disponibles</h1>
      <BookFilter />
      <BookRead />
      <ListBook />
    </>
  );
}

export default App;
