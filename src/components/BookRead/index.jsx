import { useState } from "react";
import Modal from "./Modal";
import "./bookRead.css";

function BookRead() {
  const [openModal, setOpenModal] = useState(false);

  const handelClick = () => {
    setOpenModal((state) => !state);
  };

  return (
    <aside className="list-read">
      <button onClick={handelClick} className="btn-modal">
        Lista de lectura
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
