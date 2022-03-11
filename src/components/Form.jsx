import React, {useState} from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, confirmPassword, password, submitted};
        console.log("Welcome", newUser);
        setSubmitted(true);
        }
    
    return (
        <div>
            {
                submitted?
                <h1>Thank you for completing your registration!</h1> :
                <h1>Please fill out the following fields</h1>
            }
            <h2>Form</h2>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                    {
                        firstName.length < 2 && firstName.length > 0?
                            <p>First Name must be at least 2 characters long!</p>:
                            ""
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                    {
                        lastName.length < 2 && lastName.length > 0?
                            <p>Last Name must be at least 2 characters long!</p>:
                            ""
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    {
                        email.length < 2 && email.length > 0?
                        <p>Email must be at least 2 characters long!</p>:
                        ""
                    }
                </div>
                <div>
                <label> Password </label>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                {
                    password.length < 6?
                        <p> Password must be at least 6 characters</p>:
                        ""
                }
            </div>
            <div>
                <label> Confirm Password </label>
                <input type="confirmPassword" name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
                {
                    password !== confirmPassword?
                    <p> Passwords must match!</p>:
                    ""
                }
            </div>
            <button>Submit</button>
            </form>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
        )
    }

export default Form