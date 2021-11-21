export function addContact(contact)
{
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

export function toogleFavorite(contact) {
    return{
        type: "TOOGLE_FAV",
        payload: contact
    }
}

export function deleteContact(id) {
    return{
        type: "DELETE_CONTACT",
        payload: id
    }
}

export function filterContacts(text){
    return{
        type: "FILTER_CONTACTS",
        payload: text
    }
}

export function clearFilters()
{
    return{
        type: "CLEAR_FILTER"
    }
}