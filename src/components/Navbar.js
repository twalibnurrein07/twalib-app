import React from "react";
import { Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//         </a>
//         <buthrefn
//           className="navbar-hrefggler"
//           type="buthrefn"
//           data-hrefggle="collapse"
//           data-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Hrefggle navigation"
//         >
//           <span className="navbar-hrefggler-icon"></span>
//         </buthrefn>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">
//                 Home <span className="sr-only">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-hrefggle"
//                 href="#"
//                 id="navbarDropdownMenuLink"
//                 data-hrefggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Dropdown link
//               </a>
//               <div
//                 className="dropdown-menu"
//                 aria-labelledby="navbarDropdownMenuLink"
//               >
//                 <a className="dropdown-item" href="#">
//                   Action
//                 </a>
//                 <a className="dropdown-item" href="#">
//                   Another action
//                 </a>
//                 <a className="dropdown-item" href="#">
//                   Something else here
//                 </a>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

 

export default function Navbar(){
    return(
      <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Twalib-Store</a>
      <button className="navbar-toggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Hrefggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link  className="nav-link active" aria-current="page" to='/'>Home</Link>
          </li>
          <li className="nav-item">
          
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
          
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="buthrefn" data-bs-hrefggle="dropdown" aria-expanded="false">
            Products
          </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Electronics</a></li>
              <li><a className="dropdown-item" href="#">Jewelery</a></li>
              <li><a className="dropdown-item" href="#">Men's Clothing</a></li>
              <li><a className="dropdown-item" href="#">Women's Clothing</a></li>
              
            </ul>
          </li> */}
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
     
      </div>
    </div>
  </nav>
    )
  }


