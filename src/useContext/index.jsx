import { createContext, useMemo, useState } from "react";
import { useBook } from "../hook/useAddbook";
export const BookContext = createContext();

export function BookProvide({ children }) {
  const {
    state: books,
    listState: listRead,
    addListBook,
    deleteListBook,
  } = useBook([]);

  // filter
  const [genre, setGenre] = useState("");
  const [range, setRange] = useState(0);
  const [search, setSearch] = useState("");

  const genres = Array.from(new Set(books.map((book) => book.genre)));

  const maches = useMemo(() => {
    return books.filter((book) => {
      if (
        (search && book.title.toLowerCase().includes(search.toLowerCase())) ||
        (search &&
          book.author.name.toLowerCase().includes(search.toLowerCase()))
      )
        return true;

      if (genre && book.genre === genre) return true;

      if (range && book.pages >= range) return true;

      return false;
    });
  }, [genre, range, search, books]);

  const countBook = maches.length !== 0 ? maches.length : books.length;
  return (
    <BookContext.Provider
      value={{
        books,
        listRead,
        countBook,
        addListBook,
        deleteListBook,
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
