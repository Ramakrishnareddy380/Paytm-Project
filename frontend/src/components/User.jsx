import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

export const User = () => {
    const [filter, setFilter] = useState("")
    const [users, setUsers] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token"); 

        axios.get("http://localhost:3000/api/vi/user/bulk?filter=" + filter, {
            headers: {
                Authorization: `Bearer ${token}` // Include the Bearer token in the request
            }
        })
        .then(response => {
            setUsers(response.data.users)
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
    }, [filter])

    return(
        <>
         <div className="mt-6 font-bold text-lg">
            Users
        </div>
        <div className="my-3 mr-10">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search Users ..." className="w-full px-2 py-1 border rounded border-slate-200"/>
        </div>
        <div>
            {users.map(user => <Users key={user._id} user= {user}/>)}
        </div>
        </>
    )
}

function Users({user}) {
    const navigate = useNavigate()

    return(
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.first_name[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.first_name} {user.last_name}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <Button onClick={(e) => {
                    navigate("/send?id=" + user._id + "&name=" + user.first_name)
                }} lable={"Send Money"}/>
            </div>
        </div>
    )
}
