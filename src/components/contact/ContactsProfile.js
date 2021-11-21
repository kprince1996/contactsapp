import React from "react";
import ContactCard from './ContactCard';

function ContactsProfile({contacts}) {
    return(
        <ul>
        {contacts && contacts.map(contact => 
            { return <ContactCard contact={contact} key={contact.id}/>})}
        </ul>
    )
}

export default ContactsProfile;