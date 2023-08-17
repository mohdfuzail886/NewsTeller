import React, { useState } from 'react'
import {Link} from "react-router-dom"
import image from "./../news.png";
import News from "./News"
var mystyle = {
    marginLeft:"5px"
}

export default function Navbar() {
  const [keyword,setKeyword]=useState("")
  function handleChange(e){
    e.preventDefault()
    console.log(keyword);
}
   
  return (
        <>
        
            <nav className="navbar fixed-top bg-dark navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ">
                         <a className="navbar-brand" href="/" style={mystyle}>                        <a href='/'><img src={image} style={{width:"23px",height:"25px"}}/></a> News-Teller</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        
                         <li className="nav-item">
                         {/* <i className="bi bi-newspaper"></i> */}
                         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                         </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/News"> Main-media</Link>
                        </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/News">Subscribe for free news</Link>
                    </li>
                    </ul>
                      <form class="d-flex" role="search" onSubmit={handleChange}>
                      <input class="form-control me-2" type="search" onChange={(e=>setKeyword(e.target.value))} placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success" type="submit">Search</button>
                      </form>
                      {/* <div className="row my-4"  >
                          {this.state.articles.map((element)=>{
                           return <div className="col-md-4 my-3" key={element.url}>
                          <News keyword={this.keyword} />
                          </div>
                           })}</div> */}
                    </div>
                </div>
            </nav>
            
        </>
  )
}

