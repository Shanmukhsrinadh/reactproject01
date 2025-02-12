import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function App() {
  const [username, setUsername] = useState('');  // Fixed the typo here
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1738734125~exp=1738737725~hmac=e038908c9b783f45d3551665fd6ed0522da6af3f4079e4e84a8702132da1813c&w=740" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6' className='p-5 mt-5'>
          {/* Wrap the inputs inside a form tag to trigger submit handler */}
          <form onSubmit={submitHandler}>
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' value={username} onChange={(e) => setUsername(e.target.value)} size="lg"/>
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' value={password} onChange={(e) => setPassword(e.target.value)} size="lg"/>

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <Link to='/signup'>Forgot password?</Link>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
              {/* <Link to='/dashboard'> */}
                <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
              {/* </Link> */}
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?<Link to='/signup'>Register</Link>
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
