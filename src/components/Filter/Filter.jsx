import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import { filterContact } from "../../redux/phonebook/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const onFilterChange = (event) => {
    dispatch(filterContact(event.target.value));
  };
  return (
    <>
      <label className="Filter">
        <p>Find contacts by name:</p>
        <input
          name="filter"
          type="text"
          onChange={onFilterChange}
          value={filterValue}
        />
      </label>
    </>
  );
};

export default Filter;
