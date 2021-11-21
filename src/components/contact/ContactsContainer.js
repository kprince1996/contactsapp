import React from "react";
import { connect } from "react-redux";
import AddContact from "./AddContact";
import ContactsProfile from "./ContactsProfile";

const ContactsContainer = (props) => {
    return(
        <div className="container">
            <h4 className="list_header">Friends List</h4>
            <AddContact />
            <ContactsProfile contacts={
                props.contact.filtered !== null && props.contact.filtered.length > 0 ? 
                props.contact.filtered :
                props.contact.contacts}/>
        </div>
    )
}

const mapStateToProps =  state => {
    return{
        contact: state.contacts
    }
}

export default connect(mapStateToProps)(ContactsContainer);