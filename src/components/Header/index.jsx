import BookRead from "../BookRead";
import { InputSerch } from "../BookFilter/inputs";

import "./header.css";
function Header() {
  return (
    <header className="nav">
      <div className="logo">MiduBook</div>
      <InputSerch />
      <BookRead />
    </header>
  );
}

export default Header;
