import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoading,
  selectAllContacts,
  // selectError,
} from '../../redux/contacts/selectors';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Data is loading</p>}
      {/* {error && <p>{error}</p>} */}
      <List>
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                {name} : {number}
                <Button onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </Button>
              </Item>
            );
          })}
      </List>
    </>
  );
};
