import React,{ useState } from "react";
import { connect } from "react-redux";
import {v4 as uuid} from 'uuid';
import {addContact, filterContacts, clearFilters} from '../../store/contactActions';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddContact({ addContact,filterContacts,clearFilters }) {
    const [name, setName] = useState("");
    const onSubmit = e => {
        e.preventDefault();

        if (name === '') {
            toast.error("Name cannot be empty",{position: "bottom-center"});
        }
        else {
            const contact = {
                id: uuid(),
                name: name,
                isFav: false
            };
            
            addContact(contact);
            setName("");
        }

    };

    const onChange = e => {
        e.preventDefault();

        setName(e.target.value);

        if(e.target.value !== '') {
            filterContacts(e.target.value);    
        }
        else{
            clearFilters();
        }
        
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className="add_input"
                name="name"
                value={name}
                onChange={onChange}
                autoComplete="off"
                placeholder={"Enter your friend's Name "} />
            <ToastContainer />
        </form>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addContact : contact => dispatch(addContact(contact)),
        filterContacts: text => dispatch(filterContacts(text)),
        clearFilters: () => dispatch(clearFilters())
    }
}

export default connect(null, mapDispatchToProps)(AddContact);