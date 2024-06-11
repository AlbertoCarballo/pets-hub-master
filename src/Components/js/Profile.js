import React, { useEffect, useState } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import NavBar from './Navbar';
import '../css/profile.css';
import axios from 'axios';



export default function Profile() {

    const [user, setUser] = useState("");
    const URL ="http://localhost:4000/ver-user"
    const data ={token:localStorage.getItem('sesion')};

    console.log(data);
    useEffect(() => {
        axios.post(URL, data)
            .then(function (response) {
                console.log(response.data);
                setUser(response.data);
            })
            .catch(function (error) {
                console.log(error);
                alert('An error occurred during login');
            });

    }, []);


    return (
        <>
            <NavBar />
            <section style={{ backgroundColor: '#FFF', borderRadius: '8px', padding: '20px', marginTop: '50px' }}>
                <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBCol xs="12" sm="6" md="4" lg="4" xl="3">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <MDBCardImage
                                        src="https://i.ibb.co/smbn31B/IMG-2035.jpg"
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: '500px' }}
                                        fluid />
                                    <p className="text-muted mb-1"></p>
                                    <p className="text mt-2">Frontend Developer</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol xs="12" sm="6" md="8" lg="8" xl="9">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol xs="12" sm="6" md="3" lg="3" xl="3">
                                            <MDBCardText>Name</MDBCardText>
                                        </MDBCol>
                                        <MDBCol xs="12" sm="6" md="9" lg="9" xl="9">
                                            <MDBCardText className="text-muted">{user.username}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol xs="12" sm="6" md="3" lg="3" xl="3">
                                            <MDBCardText>Email</MDBCardText>
                                        </MDBCol>
                                        <MDBCol xs="12" sm="6" md="9" lg="9" xl="9">
                                            <MDBCardText className="text-muted">{user.email}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol xs="12" sm="6" md="3" lg="3" xl="3">
                                            <MDBCardText>Phone</MDBCardText>
                                        </MDBCol>
                                        <MDBCol xs="12" sm="6" md="9" lg="9" xl="9">
                                            <MDBCardText className="text-muted">{user.cellphone}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol xs="12" sm="6" md="3" lg="3" xl="3">
                                            <MDBCardText>Fecha de nacimiento</MDBCardText>
                                        </MDBCol>
                                        <MDBCol xs="12" sm="6" md="9" lg="9" xl="9">
                                            <MDBCardText className="text-muted">{user.dob}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol xs="12" sm="6" md="3" lg="3" xl="3">
                                            <MDBCardText>Status</MDBCardText>
                                        </MDBCol>
                                        <MDBCol xs="12" sm="6" md="9" lg="9" xl="9">
                                            <MDBCardText className="text-muted">{user.role}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
}