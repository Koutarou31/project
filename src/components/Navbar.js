import React from 'react';
import logo from "../OIP.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    
<div className='container'>
    <a class="navbar-brand" href="#"><img className="logo"src={logo} alt=''/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} className='font'/>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
                
          <a class="nav-link" href="#">How Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
       
      </ul>
     
    </div>
</div>
 
  </nav>
  )
}

export default Navbar
