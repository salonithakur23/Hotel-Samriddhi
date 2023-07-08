import React, { useState } from 'react'
import "./login.css"
import { FaUserCircle } from "react-icons/fa";



const Login = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };


  return (

  <>

{/* <div className='user-icon'>
        <FaUserCircle/>
      </div> */}
    {/* <div className="login-container">
   
     
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button variant="light"  >Login</button>
      </form>
    </div> */}







    <div className='body'>
      <div className="wrapper">


         <div className="form-wrapper sign-in">
            <form action="">
                <h2>Login</h2>
                <div className="input-group">
                <label for="">Username</label><br></br>
                    <input type="text" required/>
                    
                </div>
                <div className="input-group">
                <label for="">Password</label><br></br>
                    <input type="password" required/>
                   
                </div>
                <div className="forgot-pass">
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" variant="light" className="loginbtn">Login</button>
               
            </form>
        </div>
        </div>
        </div>
 

  
  
  </>
  )
}

export default Login




// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './forms.css';
// import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
// import { auth } from './firebase';
// import { useNavigate } from 'react-router-dom';
// import { useAuthValue } from './AuthContext';
// import Button from 'react-bootstrap/Button';
// import { Container , Row , Col } from 'react-bootstrap';




// function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const { setTimeActive } = useAuthValue()
//   const navigate = useNavigate()

//   const login = e => {
//     e.preventDefault()
//     signInWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         if (!auth.currentUser.emailVerified) {
//           sendEmailVerification(auth.currentUser)
//             .then(() => {
//               setTimeActive(true)
//               navigate('/verify-email')
//             })
//             .catch(err => alert(err.message))
//         } else {
//           navigate('/')
//         }
//       })
//       .catch(err => setError(err.message))
//   }

//   return (

//     <>

//    <div classNameName='login-div'>
// <p classNameName='scl-login'>School Management System</p>
//    </div>
        
// <Container>
//   <Row>
//     <Col sm={6}>

//       <div classNameName='back-img'>
        
//          <img  classNameName='back-img' src='img/sch2-removebg-preview.png' />

//       </div>

//       </Col>  

//       <Col sm={6}>
      
//       <div classNameName='center' >

//       {/* <img  classNameName='back-img' src='img/sch2-removebg-preview.png' /> */}
      
//         <div classNameName='auth'>
//           <br />
//           <h3>Admin login</h3><br />
//           {error && <div classNameName='auth__error'>{error}</div>}
//           <form onSubmit={login} name='login_form'>
//             <input
//               type='email'
//               classNameName='input-auth'
//               value={email}
//               required
//               placeholder="Enter your email"
//               onChange={e => setEmail(e.target.value)} />

//             <input
//               type='password'
//               classNameName='input-auth'
//               value={password}
//               required
//               placeholder='Enter your password'
//               onChange={e => setPassword(e.target.value)} />

//             <Button variant="secondary" type='submit'>Login</Button>
//           </form>
//           <p>
//             Don't have and account?
//             <Link to='/register'>Create one here</Link>
//           </p>
//         </div>
//       </div>
     
//       </Col>

    
//   </Row>
// </Container>
//       {/* </div> */}
  
//     </>
//   )
// }

// export default Login