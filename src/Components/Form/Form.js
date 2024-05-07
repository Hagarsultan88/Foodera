import React from "react";
import './Form.css';

const Form =()=>{
    return (
<section className="Form">
    <div className="row">
        <div className="col-lg-12 col-md-12">
            <h3>Hurry up! Subscribe our newsletter<br/>and get 25% Off</h3>
            <p>Limited time offer for this month. No credit card required.</p>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label" ></label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address here"/>
        </div>
        </div>
        <div className="col-md-4">
            
        </div>
        <div className="col-md-4">
        <button>
        <a href="#">Subscribe</a>
        </button>
        </div>
        </div>

    </section>

    );

}

export default Form;