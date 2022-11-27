import React , { useState }from "react";
import { Form, Button } from "react-bootstrap";

function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password"
            value={password}
            required
            />
          </Form.Group>
    
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      );
    }



    export default Signup;