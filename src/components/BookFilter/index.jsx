import "./bookFilter.css";
import { InputRanger, InputSelect, InputSerch } from "./inputs";

function BookFilter(props) {
  return (
    <section className="filter-container">
      <InputSerch />
      <InputRanger />
      <InputSelect />
    </section>
  );
}

export default BookFilter;
