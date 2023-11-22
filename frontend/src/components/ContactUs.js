import React, { useState } from 'react';
import '../index.css';
import Random from '../imgs/Random.png'
import Nav from "./Nav";
const ContactForm = () => {




    return (
        <div>
            <Nav />
        
        <div className="contact-form  ">
            
          <h1 class="center">We are always there to help !!!</h1>
        <img src={Random} alt="asdfasdf" height="40px" width="40px" />
            <form  class="form mx-3 my-3" >
               
                    <input type="text" name="name" class="form-control" placeholder='Name'  />
                
                   
                    <input type="email" class="form-control" name="email" placeholder="Email" />
             
            
                   
                    <textarea name="message" class="form-control" placeholder='For example->the user inteface is not responding'  />
               
                <button class="btn btn-dark my-3 d-block" type="submit" value="Submit" >Submit</button>
            </form>
        </div>
        </div>
    );
};

export default ContactForm;
