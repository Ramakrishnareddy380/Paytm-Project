import { Link } from "react-router-dom"

export const ButtonWarning = ({lable, to, buttonText}) => {
    return <div className="py-2 text-sm flex justify-center">
        <div className="pr-1">
            {lable}
        </div>
        <Link className="underline cursor-pointer pointer-events-auto" to={to}>
        {buttonText}
        </Link>
    </div>
}