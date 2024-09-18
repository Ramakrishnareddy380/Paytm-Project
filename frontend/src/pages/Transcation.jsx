import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Transcation.css'; // Import the CSS file for animations

export const Transcation = () => {
    const [searchParams] = useSearchParams();
    const money = searchParams.get("Money");

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center animate-fadeIn">
                <div className="relative inline-block">
                    <img 
                        src="/path/to/success-icon.png" 
                        alt="Success Icon" 
                        className="w-24 h-24 mx-auto animate-pulse"
                    />
                    <div className="absolute inset-0">
                        <div className="confetti"></div>
                    </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mt-4 animate-bounce">
                    {money ? `$${money}` : 'No amount specified'}
                </h1>
            </div>
        </div>
    );
};







// import { useSearchParams } from "react-router-dom"


// export const Transcation = () => {
//     const [searchParams] = useSearchParams()
//     const money = searchParams.get("Money")
//     return(
//         <div>
//             <h1>{money}</h1>
//         </div>
//     )
// }