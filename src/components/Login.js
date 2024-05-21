// import React from 'react'
// import { auth } from '../Firebase';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const googleClick = async () => {
//     const provider = new GoogleAuthProvider();
//     const result = await signInWithPopup(auth, provider);
    
//     // console.log(result);
//     navigate('/blogs')
//   }

//   return (
//     <>
//     <div className="container">
//       <div className='h-100 d-flex justify-content-center align-items-center' style={{ height: '100vh' , marginTop: '300px' } }>
//       <img 
//             onClick={googleClick}
//             src="./images/google.jpg"
//             style={{
//               width: '20%',
//               height: 'auto',
//               borderRadius: '10%', 
//               cursor: 'pointer',
           
             
//             }}
         
//             alt="Google Logo"
            
//           />
//       </div>
//     </div>
//   </>
//   )
// }

// export default Login



import React, { useState } from 'react'         //rafce

import {useNavigate} from 'react-router-dom'



import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase'; // Assuming Firebase authentication configuration is in '../Firebase.js'
import NavBar from './Navbar';


const Login = () => {


    const naviagate =useNavigate();
 const [name, setname] = useState(""); 
const [email, setemail] = useState("");         //usf
const [password, setpassword] = useState("");




//signup
const   handleSignUp= async ()=>{
const userinfo= await createUserWithEmailAndPassword(auth,email,password);
const user = userinfo.user;
console.log(user);

 alert('Successfully registered with ' +user.email);
 naviagate('/')
}





//sign in
    const handleSignIn = async () => {
        try {
          const userInfo = await signInWithEmailAndPassword(auth, email, password);
          const user = userInfo.user;
          console.log(user);
          alert('Login successful!');
          naviagate('/blogs')
        } catch (error) {

            alert("use another email id and password");


        //  console.error(error.message);
          // Handle login error here
        }
      }
    




      //google one
const googleClick= async()=>{
const provider =  new GoogleAuthProvider();
const result = await signInWithPopup(auth,provider);
console.log(result);
naviagate('/blogs')
}




  return (
<>
    <NavBar />
    <div className="container"  >


<div className="d-grid justify-content-center gap-2  col-6 mx-auto" style={{marginTop:'40vh'}} >

<input type="name" className='' placeholder='name' name='name' value={name} onChange={(e)=>setname(e.target.value)} />


<input type="email" className='' placeholder='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)} />

<input type="password" className='' placeholder='password' name='password' value={password} onChange={(e)=>setpassword(e.target.value)} />


  <button onClick={handleSignUp} style={{width:'60vh'}}  className="btn btn-dark" type="button">Click here to Sign-Up </button> 
  <button onClick={googleClick} style={{width:'60vh'}}  className="btn btn-dark" type="button">Login With Gmail</button>
  <button  onClick={handleSignIn} style={{width:'60vh'}} className="btn btn-dark" type="button">Sign-In Using username </button> 


</div>

    </div>

    </>
  )
}

export default Login 