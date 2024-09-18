import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { User } from "../components/User"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const Dashboard = () => {
    const [value, setValue] = useState(0)
    const navigator = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get("http://localhost:3000/api/vi/account/balance", {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setValue(response.data.balance)
            console.log(response.data)
        })
        .catch(error => {
            console.error("Error fetching users:", error);
            navigator("/signup")
        });
    }, [value])

    return(
        <div>
            <Appbar/>
            <div className="mt-8 ml-5">
                <Balance value={value.toFixed(2)}/>
                <User/>
            </div>
        </div>
    )
}