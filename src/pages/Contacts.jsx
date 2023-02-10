import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
  return (
    <div style={{ display: 'block', margin: '20px 80px' }}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};