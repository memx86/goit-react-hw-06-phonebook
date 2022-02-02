import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Section from "components/Section";
import Container from "components/Container";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";

function App() {
  return (
    <Fragment>
      <Section>
        <Container>
          <h1>Phonebook</h1>
        </Container>
      </Section>
      <Section>
        <Container>
          <ContactForm />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Container>
      </Section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
}

export default App;
