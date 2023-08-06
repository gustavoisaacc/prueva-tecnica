import "./bookFilter.css";
import { InputRanger, InputSelect } from "./inputs";

function BookFilter(props) {
  return (
    <section className="filter-container">
      <InputRanger />
      <InputSelect />
    </section>
  );
}

export default BookFilter;
