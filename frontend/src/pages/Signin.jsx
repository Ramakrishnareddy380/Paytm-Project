import { useState } from "react"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputBox"
import { SubHeading } from "../components/subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"

export const Signin = () => {
    const [password, setPassword] = useState("")
    const [user_email, setUserName] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 h-max text-center p-2 px-4">
                <Heading lable={"Sign In"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox onChange = {e => {
                    setUserName(e.target.value)
                }} placeholder="Johndoe@gmail.com" label={"Email"}/>
                <InputBox onChange = {e => {
                    setPassword(e.target.value)
                }} placeholder="password" label={"Password"}/>
                <div className="pt-3">
                    <Button onClick={ async () => {
                        try {
                            const response = await axios.post("http://localhost:3000/api/vi/user/signin", {
                                user_email,
                                password
                            });
                            if (response.data.token){
                                localStorage.setItem("token", response.data.token)
                                navigate("/dashboard")
                            } else{
                                // console.log("Invalid credentials, redirecting to home page");
                                setError("Invalid credentials, please try again.")
                                navigate("/");
                            }
                        } catch (error) {
                            // console.log({message: error})
                            setError("Login failed, please try again.")
                            // navigate("/")
                        }
                        }} lable={"Sign In"}/>

                        {error && <p style={{color:'red'}}>{error}</p>} 
                        <ButtonWarning lable={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}