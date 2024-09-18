import { useNavigate, useSearchParams } from "react-router-dom";
import axios  from "axios";
import { useState } from "react";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigator = useNavigate()
    return(
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="flex flex-col justify-center h-full">
                <div className="boarder bg-white w-96 h-max text-center px-2 py-1 shadow-md">
                    <div className="flex flex-col py-3">
                        <h1 className="text-stone-900 text-3xl font-bold not-italic hover:italic">Send Money</h1>
                    </div>
                    <div className="p-2">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex flex-col justify-center text-center">
                                <span className="text-2xl text-white ">{name[0].toUpperCase()}</span>
                            </div>
                                <h3 className="text-2xl font-semibold pl-4">{name}</h3>
                        </div>
                        <div className="py-3">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex" htmlFor="amount">
                                    Amount (in Rs)
                                </label>
                                <input onChange={(e) => {
                                    setAmount(e.target.value)
                                }}
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm"
                                id="amount"
                                placeholder="Enter amount"
                                />
                            </div>
                            <button onClick={() => {
                                axios.post("http://localhost:3000/api/vi/account/transfer", {
                                    to:id,
                                    amount
                                },{
                                    headers:{
                                        Authorization: "Bearer " +  localStorage.getItem("token")
                                    }
                                })
                                navigator("/transaction?Money=" + `${amount}`)
                            }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white my-3">
                              Initiate Transfer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}