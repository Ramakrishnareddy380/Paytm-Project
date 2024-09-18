

export const InputBox = ({label, placeholder, onChange}) => {
    return(
        <div>
            <div>
                <h1 className="text-sm font-medium text-left py-2">{label}</h1>
            </div>
            <input placeholder= {placeholder} onChange={onChange} className="w-full px-2 py-1 border border-slate-200 rounded"/>
        </div>
    )
}