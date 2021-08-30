import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ContactForm.css";
import { useGetContactsQuery } from "../../redux/phonebook/phonebookApi";
import { useAddContactMutation } from "../../redux/phonebook/phonebookApi";

function ContactForm() {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeUserInfo = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value.trim());
        break;

      case "number":
        setNumber(value.trim());
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const isInContactList = (contact) => {
    const normalizedName = contact.name.toLowerCase();
    const names = data.map((el) => el.name.toLowerCase());
    const existingName = names.find((name) => name === normalizedName);
    return existingName;
  };

  const handleUserFormSubmit = (event) => {
    event.preventDefault();

    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    if (!isInContactList(contact)) {
      addContact(contact);
      resetForm();
    } else {
      return alert("This contact is already in contact list!");
    }
  };

  return (
    <form className="Form" onSubmit={handleUserFormSubmit}>
      <label className="Form__label">
        Name
        <input
          onChange={handleChangeUserInfo}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className="Form__label">
        Number
        <input
          onChange={handleChangeUserInfo}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className="Form__add-btn">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
