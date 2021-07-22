import React from 'react';

import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <div class="row g-0">
    <div class="col-md-4">
      
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">Welcome </h1>
        <p class="card-text">
        <Row>
          <Col md>
            <Form.Label>First name</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col md>
            <Form.Label>Last name</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Label>E_mail</Form.Label>
            <Form.Control placeholder="exmple@gmail.com" />
          </Col>
          <Col md>
            <Form.Label>Password</Form.Label>
            <Form.Control type ="password" placeholder="password"/>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Address" />
          </Col>
        </Row>
        <Row>
        <Col md>
        <Form.Label>Choose City</Form.Label>
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Choose</option>
                <option value="1">Nabeul</option>
                <option value="2">Tunis</option>
                <option value="3">Sousse </option>
                <option value="3">Sfax </option>
               </select>
          </Col> 
          </Row>
           <Row>
             
           </Row>
         
        </p>
        <p class="card-text">

              

          <small class="text-muted"> <button type="submit" class="btn btn-primary mb-2">Submit</button></small>
        </p>
      </div>
    </div>
  </div>

      </header>
    </div>
  );
}

export default App;