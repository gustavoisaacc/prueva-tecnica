import { useContext } from "react";
import { BookContext } from "../../useContext";
import { AiOutlineSearch } from "react-icons/ai";

export function InputSerch(props) {
  const { search, setSearch } = useContext(BookContext);
  const handelChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <label className="label--search">
      <input
        type="text"
        className="filter--search"
        placeholder="Harry Potter"
        value={search}
        onChange={handelChange}
      />
      <AiOutlineSearch className="logo--search" />
    </label>
  );
}

export function InputRanger(props) {
  const { range, setRange } = useContext(BookContext);
  return (
    <label className="label flex">
      <span>paginas</span>
      <input
        value={range}
        onChange={(e) => setRange(e.target.value)}
        min="0"
        max="1000"
        type="range"
        className="filter--ranger"
      />
      {range}
    </label>
  );
}

export function InputSelect(props) {
  const { genres, genre, setGenre } = useContext(BookContext);
  return (
    <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
      className="filter--select"
    >
      <option>todas</option>
      {genres.map((genre) => {
        return (
          <option key={genre} value={genre}>
            {genre}
          </option>
        );
      })}
    </select>
  );
}
