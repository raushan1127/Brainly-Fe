interface Inputprops {
    placeholder: string;
    
}
export function Input({placeholder}: Inputprops)  {
    return (
        <input placeholder={placeholder} type = {"type"} className="px-4 py-2 border rounded-md"></input>
    )
}