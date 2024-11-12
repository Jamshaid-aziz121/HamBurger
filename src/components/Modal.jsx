import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { StudentTile } from './StudentTile'

export default function Modaled({ show, handleClose, myStudent, handleEdit, handleDelete }) {
    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Student Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Object.keys(myStudent).length && <StudentTile user={myStudent} onEdit={handleEdit} onDelete={handleDelete} />}

            </Modal.Body>
        </Modal>
    )
}
