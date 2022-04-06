import React from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
function App() {
  const contacts = [ 
{'id':1, 'name':'abc' , 'email':'abc@gmail.com'},
{'id':2, 'name':'xyz' , 'email':'xyz@gmail.com'}
  ]
  return (
    <div className = "ui container">
      <Header />
       <AddContact />
      <ContactList contacts={contacts} />
      {/* <ContactCard /> */}
    </div>
  );
}
export default App;                 