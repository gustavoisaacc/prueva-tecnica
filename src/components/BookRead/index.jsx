import { useState, useContext } from "react";
import Modal from "./Modal";
import "./bookRead.css";
import { BookContext } from "../../useContext";

function BookRead() {
  const [openModal, setOpenModal] = useState(false);
  const { listRead } = useContext(BookContext);

  const handelClick = () => {
    setOpenModal((state) => !state);
  };

  return (
    <aside className="list-read">
      <button onClick={handelClick} className="btn-modal">
        {listRead.length} Lista de lectura
      </button>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        handelClick={handelClick}
      />
    </aside>
  );
}

export default BookRead;
