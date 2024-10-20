import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

const Contact = () => {
    const [name, setName] = useState(''); // State for the name
    const [email, setEmail] = useState(''); // State for the email
    const [message, setMessage] = useState(''); // State for the message
    const [submitted, setSubmitted] = useState(false); // State to manage submission

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Ask for confirmation before submitting
        const isConfirmed = window.confirm(`Are you sure you want to submit this message?\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        if (isConfirmed) {
            setSubmitted(true); // Set the submitted state to true
            // Here you could also add code to send the form data to a server
        }
    };

    return (
        <div className="content">
            <h1>Contact Me</h1>
            {submitted ? ( // Conditional rendering based on submission state
                <div className="alert alert-success" role="alert">
                    Thank you {name}, I will get back to you later!
                </div>
            ) : (
                <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function to the form */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} // Update name state
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea 
                            className="form-control" 
                            id="message" 
                            rows="3" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} // Update message state
                            required 
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            )}
        </div>
    );
}

export default Contact;
