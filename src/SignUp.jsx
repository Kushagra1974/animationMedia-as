import { useState } from "react";
import { useNavigate } from "react-router-dom"

function SignUp() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (password === "12345" && email === "kshitij@gmail.com") {
            localStorage.setItem("logedin", JSON.stringify(true));
            navigate("/home")

        } else {
            alert("Wrong creadential")
        }
    }

    return (
        <div style={{ paddingLeft: 500, backgroundColor: "aquamarine" }}>
            <h1 style={{ paddingLeft: 40, marginLeft: 25 }}>Sign In</h1>
            <form onSubmit={submitHandler}>
                <div style={{ paddingLeft: 40 }}>
                    <label htmlFor="email" >Email</label> :
                    <input id="email" type="email" required onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div style={{ padding: 20, marginLeft: -5 }}>
                    <label htmlFor="password" >Password</label> :
                    <input id="password" type="password" required onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div style={{ padding: 20 }}>
                    <input style={{ backgroundColor: 'green', color: 'white' }} type="submit" value="Submit" />
                    <input style={{ backgroundColor: 'red', color: 'white', marginLeft: 120 }} type="button" value="LogOut" onClick={() => {
                        localStorage.removeItem("lodedin")
                        navigate("/home")
                    }} />
                </div>
                {/* <div style={{ paddingLeft: 20 }}>
                    

                </div> */}
            </form>
        </div >
    )
}

export default SignUp