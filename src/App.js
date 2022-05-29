import React, { useState } from 'react'
import './css/App.css'
import { nanoid } from 'nanoid'
import data from './mock-data.json'

import Button from './components/Button'
import TableReadOnly from './components/TableReadOnly'
import TableEdit from './components/TableEdit'


function App() {
  // State variables and methods
  const [contacts, setContacts] = useState(data)

  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const [editContactId, setEditContactId] = useState(null)

  

  // event handler functions
  const handleAddFormChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    }
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
    addFormData.fullName=''
    addFormData.address=''
    addFormData.phoneNumber=''
    addFormData.email=''
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault()
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
    }

    const newContacts = [...contacts]
    const index = contacts.findIndex((contact) => contact.id === editContactId)
    newContacts[index] = editedContact
    setContacts(newContacts)
    setEditContactId(null)
  }

  const handleEditFormChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = {...editFormData}
    newFormData[fieldName] = fieldValue
    setEditFormData(newFormData)
  }

  const handleEditClick = (e, contact) => {
    e.preventDefault()
    setEditContactId(contact.id)

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts]
    const index = contacts.findIndex((contact) => contact.id === contactId)
    
    newContacts.splice(index, 1)
    setContacts(newContacts)
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
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
            {contacts.map((contact) =>(
              <>
                { editContactId === contact.id 
                  ? <TableEdit 
                      editFormData={editFormData}
                      handleCancelClick={handleCancelClick}
                      handleEditFormChange={handleEditFormChange}
                      handleEditFormSubmit={handleEditFormSubmit}/>
                  : <TableReadOnly 
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}/>
                }
              </>
            ))}
          </tbody>
        </table>
      </form>
      
      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
            type='text'
            name='fullName'
            required='required'
            placeholder='Enter a name'
            value={addFormData.fullName}
            onChange={handleAddFormChange}/>
        <input 
            type='text'
            name='address'
            required='required'
            placeholder='Enter an address'
            value={addFormData.address}
            onChange={handleAddFormChange}/>
        <input 
            type='text'
            name='phoneNumber'
            required='required'
            placeholder='Enter a phone number'
            value={addFormData.phoneNumber}
            onChange={handleAddFormChange}/>
        <input 
            type='email'
            name='email'
            required='required'
            placeholder='Enter an email'
            value={addFormData.email}
            onChange={handleAddFormChange}/>
        <Button btnText='Add contact' />
            
      </form>
    </div>
  );
}

export default App;
