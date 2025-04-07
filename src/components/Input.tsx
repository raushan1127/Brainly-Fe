interface Inputprops {
    placeholder: string;
    reference?: any ;    
    
}
export function Input({placeholder, reference}: Inputprops)  {
    return (
        <input ref={reference} placeholder={placeholder} type = {"type"} className="px-4 py-2 border rounded-md"></input>
    )
}