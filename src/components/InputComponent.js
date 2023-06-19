const InputComponent = ({label, type, id, placeholder}) => {
    return (
        <div>
            <div>
                <label htmlFor={id}>
                    {label}
                </label>
            </div>
            <input 
            id = {id}
            type={type}
            placeholder={placeholder}
            ></input>
        </div>
    )
};

export default InputComponent;