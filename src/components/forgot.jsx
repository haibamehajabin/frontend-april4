import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Forget() {
const [email, setEmail] = useState('');
const [newPassword, setPassword] = useState('');
const navigator = useNavigate()
useEffect(() => {
    console.log('email is:', email);
    console.log('password is:', newPassword);
}, [email, newPassword])

const handleSubmit = async () => {
const response = await axios.post('http://localhost:2000/forget', {
    email, newPassword
})
if(response.data){
    navigator('/login')
}
}

return (
    <div style={{backgroundImage:`url(/bg.jpeg)`, justifyContent:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"650px",width:"1400px",display:'flex' , flexDirection: 'column', justifyContent: 'center', gap: '10px', alignItems: 'center'}}>
        <h1>Update Password</h1>
        <input type="text" name="email" style={{width: '500px',padding: '10px'}} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" name="newPassword" style={{width: '500px',padding: '10px'}} placeholder="Enter your new password" onChange={(e) => setPassword(e.target.value)}/>
        <button style={{width: '500px'}} onClick={handleSubmit}> Update Password</button>
    </div>
)
}

export default Forget;