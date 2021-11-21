import React from "react";
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {deleteContact, toogleFavorite} from '../../store/contactActions';
import {connect} from 'react-redux';

const ContactCard = ({contact, toogleFavorite, deleteContact}) => {

    const toggleFav = e => {       
        e.preventDefault();

        var updatedContact = {
            id: contact.id,
            name: contact.name,
            isFav: !contact.isFav
        }
        toogleFavorite(updatedContact);
    }
    const handleDelete = e =>{
        e.preventDefault();
        deleteContact(contact.id);
    }
    return(
        <li className='card'>
            <div className='card_item'>
                <p className='contact_name'>{contact.name}</p>
                <span className='contact_friend_label'>{'is your friend'}</span>
            </div>
            
            <div className='card_icon'>
                {contact.isFav ? <AiFillStar onClick={toggleFav} className="icons"/> : <AiOutlineStar onClick={toggleFav} className="icons"/>}
                    <RiDeleteBin6Line onClick={handleDelete} className="icons"/>
            </div>
        </li>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        toogleFavorite : contact => dispatch(toogleFavorite(contact)),
        deleteContact : id => dispatch(deleteContact(id))
    }
}

export default connect(null, mapDispatchToProps)(ContactCard);