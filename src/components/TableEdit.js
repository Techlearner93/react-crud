import React, { useState } from 'react'
import Button from './Button'

export default function TableEdit(props) {
    const {
        editFormData,
        handleEditFormChange,
        handleCancelClick
    } = props
        
    return (
        <tr>
            <td>
                <input 
                    type='text'
                    required='required'
                    placeholder='Enter a name'
                    name='fullName'
                    value={editFormData.fullName} 
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                    type='text'
                    required='required'
                    placeholder='Enter an address'
                    name='address' 
                    value={editFormData.address} 
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                    type='text'
                    required='required'
                    placeholder='Enter a phone number'
                    name='phoneNumber'
                    value={editFormData.phoneNumber} 
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                    type='email'
                    required='required'
                    placeholder='Enter an email'
                    name='email'
                    value={editFormData.email} 
                    onChange={handleEditFormChange} />
            </td>
            <td>
                <Button 
                    type='submit' 
                    btnText='Save'  />
                <Button 
                    type='button'
                    btnText='Cancel'
                    onClick={handleCancelClick}
                    />
            </td>
        </tr>
    )
}