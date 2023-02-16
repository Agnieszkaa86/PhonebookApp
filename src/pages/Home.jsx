import { Image, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Container, Wrapper, Span, Description } from './Home.styled';

export default function Home() {
  return (
    <>
      <Container>
        <Description>
          <h1>PhoneBook App</h1>
          <p>This is your PhoneBook app.</p>
          <p>
            You can register new account or log in, if you already have an
            account here.
          </p>

          <h2>You can</h2>

          <List spacing="15" p={0}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#4abda7" spacing={10} />
              <Span>Add new contacts</Span>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#4abda7" />
              <Span>Delete your contacts</Span>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#4abda7" />
              <Span>Filter your contacts by key words</Span>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#4abda7" />
              <Span>
                Your contacts are safe with our App: only you have access to
                your PhoneBook
              </Span>
            </ListItem>
          </List>
        </Description>
        <Wrapper>
          <Image src="https://i.gifer.com/JUl.gif" alt="Phone" />
        </Wrapper>
      </Container>
    </>
  );
}
