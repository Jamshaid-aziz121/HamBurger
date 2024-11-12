import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, ListGroup, Modal, Row, Table } from 'react-bootstrap'
import MyStudents from '../data/Students';
import { StudentTile } from './StudentTile';
import StudentsCards from './StudentCards';
import Modaled from './Modal';

export default function StudentsData() {
    const [show, setShow] = useState(false);
    const [studentState, setStudentState] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [myStudent, setMyStudent] = useState({});
    const [count, setCount] = useState(0);

    useEffect(() => {
        const getUserData = async () => {
            const data = await fetch('https://dummyjson.com/users');
            const { users } = await data.json();
            console.log(users);
            setStudentState(users)
        }

        getUserData();

    }, []);
    // console.log(Students)


    const handleEdit = (id, firstName, lastName, gender, age, eyeColor) => {
        setStudentState(prevStudents => prevStudents.map(student =>
            student.id === id ? { ...student, firstName, lastName, gender, age, eyeColor } : student
        )
        );
        setShow(false)
    };

    const handleDelete = (id) => {
        setStudentState(prevStudents => prevStudents.filter(student => student.id !== id));
        setShow(false)
    };

    const handleClick = (i) => {
        handleShow()
        setMyStudent(studentState[i]);
    }




    console.count("junaid")

    let StudentsBs = studentState.map((stds, i) => {
        return (
            <StudentsCards stds={stds} handleShow={handleShow} index={i} handleClick={handleClick} />
        )
    })


    return (

        <>
            <Modaled show={show} handleClose={handleClose} myStudent={myStudent} handleEdit={handleEdit} handleDelete={handleDelete} />
            <Container fluid>
                <Container>
                    <Row>
                        <Col>
                            <div>

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Gender</th>
                                            <th>Age</th>
                                            <th>Eyes Color</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {StudentsBs}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    )
}
