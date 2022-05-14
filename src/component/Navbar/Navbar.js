import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          <a class="logo" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style={{paddingLeft: "60vw"}}>Category</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">FAQs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">My cart</a>
              </li>
            </ul>
            <button type="button" class="btn btn-primary">Login</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar