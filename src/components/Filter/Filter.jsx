import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
// import { selectFilter } from 'redux/contacts/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const input = e.target.value.toLowerCase();
    dispatch(filterContacts(input));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={handleChange} />
    </Label>
  );
};
