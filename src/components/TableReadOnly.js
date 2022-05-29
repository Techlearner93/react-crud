import React, { useState } from 'react'
import Button from './Button'

export default function TableReadOnly(props) {
    const {
        contact,
        handleEditClick,
        handleDeleteClick
    } = props
    
    return (
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
            <div>
                <Button 
                    type='button'
                    btnText='Edit' 
                    onClick={(e) => handleEditClick(e, contact)}/>
                <Button 
                    type='button'
                    btnText='Delete'
                    onClick={()=> handleDeleteClick(contact.id)} />
            </div>
            </td>
        </tr>
    )
}