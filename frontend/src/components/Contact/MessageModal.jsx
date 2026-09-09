import { useModal } from "../../context/Modal";

import "./Contact.css";

function MessageModal({ message }) {
  const { closeModal } = useModal();

  return (
    <div className="messageAlert">
      <h2>{message}</h2>
      <button onClick={closeModal}>Ok</button>
    </div>
  );
}

export default MessageModal;
