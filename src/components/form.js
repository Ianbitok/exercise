import { useState } from "react";

const UserInput = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [courseName, setCourseName] = useState('');

    return (
        <div>
            <form>
                <label>First Name:</label><br/>
                <input type="text" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter your first name"/><br/>
                <label>Last Name:</label><br/>
                <input type="text" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Enter your last name"/><br/>
                <label>Course:</label><br/>
                <input type="text" name="courseName" value={courseName} onChange={(e)=>setCourseName(e.target.value)} placeholder="Enter your course"/><br/>
                <button>Save Details</button>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{courseName}</p>
            </form>
        </div>
    );
}

export default UserInput;