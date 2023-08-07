import BookRead from "../BookRead";
import { InputSerch } from "../BookFilter/inputs";
import { SiReactrouter } from "react-icons/si";
import "./header.css";
function Header() {
  return (
    <header className="nav">
      <h1 className="logo">
        <SiReactrouter className="logo--svg" />
        <span>AifosBOOKS</span>
      </h1>
      <InputSerch />
      <BookRead />
    </header>
  );
}

export default Header;
