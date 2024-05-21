// import React from 'react'
// import {getAuth} from 'firebase/auth'
// import { Link, useLocation } from 'react-router-dom'
// import './Navbar.css'

// const Navbar = () => {
//   const auth = getAuth();
//   const location = useLocation();
//   return (
//    <>

//    <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
//     <div className="container-fluid">
//     <img src={auth.currentUser.photoURL} alt="" className='user'/>
//     <h3 className='name'>{auth.currentUser.displayName}</h3>
     
//     <h3 className='email'>{auth.currentUser.email}</h3>

    
//       <a className="navbar-brand" href="#"></a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarsExample01">
//         <ul className="navbar-nav me-auto mb-2">
//           <li className="nav-item">
//             <Link to="/" className="nav-link active" aria-current="page">Home</Link>
//           </li>
        
//           <li className="nav-item">
//           {(location.pathname === '/blogs') && <Link to={"/addBlogs"} className="nav-link active" aria-current="page">Add Blog</Link>}
//           </li>

//           <li className="nav-item">
//             <Link to="/blogs" className="nav-link active" aria-current="page">Blog</Link>
//           </li>

          
//           <li className="nav-item">
//           <Link to="/" className="nav-link active" aria-current="page">Log Out</Link>
//           </li>
//         </ul>
     
//       </div>
//     </div>
//   </nav>
//    </>
//   )
// }

// export default Navbar



import React from 'react'


import {getAuth} from 'firebase/auth'
import {Link,  useLocation} from 'react-router-dom'

const Navbar = () => {



    const auth = getAuth();
    const location= useLocation();
    console.log(auth);

        // Check if currentUser exists and has email property
        const email = auth.currentUser ? auth.currentUser.email : '';
    
    // const email = auth?.currentUser.email;


  //  const name = auth?.currentUser.displayName;
    //const photoUrl = auth?.currentUser.photoURL;
 
  

//     { if (photoUrl === null)
// {  photoUrl = 'https://cdn-icons-png.flaticon.com/512/9131/9131590.png';
// }
// }


  return (
<>


{/* <h6>Welcome {name? name:"new user"}</h6>
<img src="{photoUrl}" alt="" />
<h6>{email}</h6> */}




<nav className="navbar navbar-dark bg-dark fixed-top">
<div className="container-fluid">
    {/* <Link className="navbar-brand" to="#"> */}

        <img style={{width:'70px' ,height:'60px'}}src="https://drhamman.horizon.ab.ca/uploads/2665/newslettericon2288x300/1652216395-350w_newslettericon2288x300.png" alt="" />
    {/* </Link> */}

    {(location.pathname !== '/') && <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">{email}</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/blogs">Home</Link>
          </li>


          <li className="nav-item">

          {(location.pathname === '/blogs') &&
            <Link className="nav-link" 
            to="/addblogs">Add Blog</Link>}
          </li>


          <li className="nav-item">
            <Link className="nav-link" to="/">Logout</Link>
          </li>

        </ul>

        
      </div>
    </div>
    </div>
    }
  </div>

</nav>



<br />
<br />
<br />
{/* {location.pathname!=='/'&&<h1>Welcome {name? name:""}</h1>} */}



</>
  )
}

export default Navbar
