import InputComponent from "./InputComponent";
import './Form.css'

const Form = () => {
    return (
        <form>
            <InputComponent
                id='name'
                label="Name"
                type="text"
                placeholder=''
            >
            </InputComponent>
            <InputComponent
                id='email'
                label="Email"
                type='text'
                placeholder=''
            >
            </InputComponent>
            <label htmlFor="type"></label>
            <select id='type' name='type'>
                <option value='hireMe'>Freelance project proposal</option>
                <option value='openSource'>Open source consultancy session</option>
                <option value='other'>Other</option>
            </select>
        </form>
    );
};

export default Form;