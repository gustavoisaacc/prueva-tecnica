import BookFilter from "./components/BookFilter";
import ListBook from "./components/ListBook";
import { useContext } from "react";
import { BookContext } from "./useContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { countBook } = useContext(BookContext);
  return (
    <>
      <Header />
      <h1>{countBook} Libros Disponibles</h1>
      <BookFilter />
      <ListBook />
      <Footer />
    </>
  );
}

export default App;
