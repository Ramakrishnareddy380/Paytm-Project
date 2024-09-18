
export const Button = ({lable, onClick}) => {
   return <button className="w-full text-white bg-gray-800 hover:bg-green-400 focus:outline-none focus:ring focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={onClick}>{lable}</button>
}

