import React, { useState } from 'react'
import TableEdit from './TableEdit'
import TableReadOnly from './TableReadOnly'

export default function Table(props) {
    const {
        contacts,
        setContacts
    } = props

    const [editContactId, setEditContactId] = useState(null)
    
    const [editFormData, setEditFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        email: ''
    })
    
    const handleEditClick = (event, contact) => {
        event.preventDefault()
        setEditContactId(contact)
        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email
        }
        const newContacts = [ ...contacts]
        const index = contacts.findIndex((contact) => contact.id === editContactId)
        newContacts[index] = editedContact
        setContacts(newContacts)
        setEditContactId(null)
    }

    return (
        <form>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { contacts.map((contact) => (
                    <>
                        { editContactId === contact.id 
                            ? <TableEdit 
                                contacts={contacts}
                                editContactId={editContactId}
                                editFormData={editFormData}
                                setEditFormData={setEditFormData} /> 
                            : <TableReadOnly 
                                contact={contact}
                                handleEditClick={handleEditClick}
                                setEditContactId={setEditContactId} />
                        }  
                    </>
                ))}
                </tbody>
            </table>
        </form>
  )
}
