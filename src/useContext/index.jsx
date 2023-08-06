import data from "./book.json";
import { createContext, useEffect, useMemo, useState } from "react";

export const BookContext = createContext();

export function BookProvide({ children }) {
  const [books, setBook] = useState([]);
  const [listRead, setListBook] = useState([]);

  // filter
  const [genre, setGenre] = useState("");
  const [range, setRange] = useState(0);
  const [search, setSearch] = useState("");

  let countBook;
  const genres = Array.from(new Set(books.map((book) => book.genre)));

  const maches = useMemo(() => {
    return books.filter((book) => {
      if (genre && book.genre === genre) return true;

      if (range && book.pages >= range) return true;

      if (book.title.includes(search)) {
        console.log(search);
      }

      return false;
    });
  }, [genre, range, search]);

  useEffect(() => {
    const books = data.library.map((item) => item.book);
    setBook(books);
    countBook = maches.length !== 0 ? maches.length : books.length;
  }, [maches]);

  const addListaRead = (e) => {
    console.log("hola");
  };
  return (
    <BookContext.Provider
      value={{
        books,
        setBook,
        listRead,
        setListBook,
        countBook,
        addListaRead,
        genres,
        genre,
        setGenre,
        range,
        setRange,
        search,
        setSearch,
        maches,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
