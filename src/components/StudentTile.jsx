// StudentTile.js

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function StudentTile({ user, onEdit, onDelete }) {
    const [firstName, setName] = useState(user.firstName || '');
    const [lastName, setLastName] = useState(user.lastName || '');
    const [gender, setGender] = useState(user.gender || '');
    const [age, setAge] = useState(user.age || '');
    const [eyeColor, setEyeColor] = useState(user.eyeColor || '');

    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        onEdit(user.id, firstName, lastName, gender, age, eyeColor);
        setIsEditing(false);
    };

    return (
        <Card style={{ width: '18rem', margin: '1rem' }} className="student-tile">
            <Card.Body style={{ width: '100%' }}>
                <Card.Title>{isEditing ? <input type="text" value={firstName} onChange={e => setName(e.target.value)} /> : `First Name : ${firstName}`}</Card.Title>
                <Card.Text>
                    {isEditing ? <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} /> : `Last Name: ${lastName}`}
                </Card.Text>
                <Card.Text>
                    {isEditing ? <input type="text" value={gender} onChange={e => setGender(e.target.value)} /> : `Gender: ${gender}`}
                </Card.Text>
                <Card.Text>
                    {isEditing ? <input type="text" value={age} onChange={e => setAge(e.target.value)} /> : `Age: ${age}`}
                </Card.Text>
                <Card.Text>
                    {isEditing ? <input type="text" value={eyeColor} onChange={e => setEyeColor(e.target.value)} /> : `Eye Color: ${eyeColor}`}
                </Card.Text>

                <div className="button-group">
                    {isEditing ? (
                        <Button variant="success" onClick={handleSave}>Save</Button>
                    ) : (
                        <>
                            <div className='w-100 d-flex justify-content-around'>
                                <Button className='w-10 mr-3' variant="primary" onClick={() => setIsEditing(true)}>Edit</Button>
                                <Button className='w-10' variant="danger" onClick={() => onDelete(user.id)}>Delete</Button>
                            </div>
                        </>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}



