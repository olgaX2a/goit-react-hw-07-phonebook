import PhonebookListItem from "./ContactListItem";
import "./ContactList.css";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import { filterContacts } from "../../helpers/filterContacts";
import { useGetContactsQuery } from "../../redux/phonebook/phonebookApi";

const ContactList = () => {
  const filter = useSelector(getFilter);

  const { data } = useGetContactsQuery();

  return (
    <ul className="Contact__list">
      {data &&
        filterContacts(data, filter).map(({ name, number, id }) => {
          return (
            <PhonebookListItem key={id} name={name} number={number} id={id} />
          );
        })}
    </ul>
  );
};

export default ContactList;
