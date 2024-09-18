import { Link } from "react-router-dom"

export const Welcome = () => {
    return(
        <div className="bg-sky-200 h-screen">
            <div className="h-16 bg-white w-full flex justify-between"> 
                <div className="my-4 mx-5">
                <h1><span className="text-blue-950 font-semibold text-3xl">Dev</span><span className="text-blue-400 font-semibold text-lg">pay</span></h1>
                </div>
                <div className="flex justify-end">
                <button className="text-white bg-gray-800 hover:bg-green-400 focus:outline-none focus:ring focus:ring-gray-300 font-medium rounded-lg text-sm px-4 mx-3 mt-4 h-9" >
                    <Link className="underline cursor-pointer pointer-events-auto" to={"/signup"}>Sign up</Link>
                </button>
                <button className="text-white bg-gray-800 hover:bg-green-400 focus:outline-none focus:ring focus:ring-gray-300 font-medium rounded-lg text-sm px-4 mx-3 mt-4 h-9" >
                    <Link className="underline cursor-pointer pointer-events-auto" to={"/signin"}>Sign In</Link>
                </button>
              </div>
            </div>
            <main className="text-center flex flex-col items-center space-y-8 my-36">
                <h1 className="text-5xl font-extrabold text-black drop-shadow-md">Welcome to <span className="text-blue-950 font-semibold">Dev</span><span className="text-blue-400 font-semibold">pay</span></h1>
                <p className="text-lg  text-gray-900 max-w-md font-serif">
                    DevPay is a modern payment solution for developers, bringing simplicity and security to every transaction. Join us and take control of your finances.
                </p>
            </main>

            {/* Footer */}
            <div className="my-60">
            <footer className="w-full h-16 bg-transparent flex justify-center items-center shadow-md">
                <p className="text-sm text-slate-900">&copy; 2024 DevPay. All Rights Reserved.</p>
            </footer>
            </div>
        </div>
    )
}