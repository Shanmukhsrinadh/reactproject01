import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
} from 'mdb-react-ui-kit';

function Signup() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data); // Here you would handle the form data (e.g., make API calls)
    };

    return (
        <MDBContainer fluid className="p-4">
            <MDBRow>
                <MDBCol md="6" className="text-center text-md-start d-flex flex-column justify-content-center">
                    <img
                        src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600"
                        style={{ height: '94vh' }}
                        alt="Signup image"
                    />
                </MDBCol>

                <MDBCol md="6">
                    <MDBCard className="my-5">
                        <MDBCardBody className="p-5">
                            <form onSubmit={handleSubmit}>
                                <MDBRow>
                                    <MDBCol col="6">
                                        <MDBInput
                                            wrapperClass="mb-4"
                                            label="First name"
                                            id="form1"
                                            type="text"
                                            name="firstName"
                                            value={data.firstName}
                                            onChange={handleChange}
                                        />
                                    </MDBCol>

                                    <MDBCol col="6">
                                        <MDBInput
                                            wrapperClass="mb-4"
                                            label="Last name"
                                            id="form2"
                                            type="text"
                                            name="lastName"
                                            value={data.lastName}
                                            onChange={handleChange}
                                        />
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput
                                    wrapperClass="mb-4"
                                    label="Email"
                                    id="form3"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                />
                                <MDBInput
                                    wrapperClass="mb-4"
                                    label="Password"
                                    id="form4"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                />

                                <div className="d-flex justify-content-center mb-4">
                                    <MDBCheckbox
                                        name="flexCheck"
                                        value=""
                                        id="flexCheckDefault"
                                        label="Subscribe to our newsletter"
                                    />
                                </div>
                                {/* <Link to='/Login'> */}
                                    <MDBBtn className="w-100 mb-4" size="md" type="submit">
                                        Sign up
                                    </MDBBtn>
                                {/* </Link> */}

                            </form>

                            <div className="text-center">
                                <p>or sign up with:</p>

                                <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon="facebook-f" size="sm" />
                                </MDBBtn>

                                <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon="twitter" size="sm" />
                                </MDBBtn>

                                <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon="google" size="sm" />
                                </MDBBtn>

                                <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon="github" size="sm" />
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Signup;
