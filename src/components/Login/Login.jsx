import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const validateLogin = () => {
        if (password.length >= 0 && email.length >= 0) {
            setIsLoggedIn(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group size='sm' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    autoFocus
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group size='sm' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    autoFocus
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <button onSubmit={validateLogin}>Submit</button>
            </Form>
            {/* {isLoggedIn ? <p>You are logged in!</p> : <p>Please enter the correct email and password.</p>} */}
        </div>
    )
}
export default Login;