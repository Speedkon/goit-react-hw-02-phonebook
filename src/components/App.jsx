import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter"
import { ContactList } from "./ContactList/ContactList"
import { Report } from 'notiflix/build/notiflix-report-aio';


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }
  
  addContact = newContact => {
    const { contacts } = this.state;
    const newID = nanoid()
    if (contacts.some(contact => contact.name === newContact.name)) {
      Report.warning(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, { ...newContact, id: newID }]
        }
      })
    }
  };

  onFilter = value => {
    this.setState({
      filter: value,
    })
  }

  deleteContact = contact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contact),
      }
    })
  }

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    })


    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter}/>
        <ContactList allContacts={filterContacts}  onDelete={this.deleteContact} />
      </div>
    )
  }

}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
