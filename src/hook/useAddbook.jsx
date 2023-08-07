import { useEffect } from "react";
import data from "../useContext/book.json";
import { useLocalStorage } from "./useLocalSorage";

export function useBook(initialSate) {
  const { item: state, saveItem: setstate } = useLocalStorage(
    "BOOK_V1",
    initialSate
  );
  const { item: listState, saveItem: setListState } = useLocalStorage(
    "LIST_V1",
    initialSate
  );

  const addListBook = (id, bookL) => {
    const deleteListBook = state.filter((book) => book.ISBN !== id);
    bookL.complete = true;
    const newBook = [...listState, bookL];
    setstate(deleteListBook);
    setListState(newBook);
  };

  const deleteListBook = (id, bookL) => {
    const deleteListBook = listState.filter((book) => book.ISBN !== id);
    bookL.complete = true;
    const newBook = [...state, bookL];
    setListState(deleteListBook);
    setstate(newBook);
  };

  useEffect(() => {
    console.log(listState);
    const books = data.library.map((item) => item.book);
    setstate(books);
  }, []);

  return { state, listState, addListBook, deleteListBook };
}
