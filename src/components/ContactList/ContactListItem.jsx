import "./ContactList.css";
import { useDeleteContactMutation } from "../../redux/phonebook/phonebookApi";

const PhonebookListItem = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li className="Contact__item">
      <p className="Contact__info">{name}: </p>
      <p className="Contact__info">{number}</p>
      <button
        type="button"
        id={id}
        onClick={() => deleteContact(id)}
        className="Contact__delete-btn"
      >
        Delete
      </button>
    </li>
  );
};

export default PhonebookListItem;
