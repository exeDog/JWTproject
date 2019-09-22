import React, {useState} from 'react'

const Login = props => {
    const {initialValues, callBack} = props;
    const [inputs, setInputs] = useState(initialValues);

    const handleInput = event => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]:event.target.value}));
    };
    const handleSubmit = event => {
        event.preventDefault();
        callBack(inputs);
    };
    return (
            <div className='form_JWT'>
                <form id="registerForm" onSubmit={handleSubmit}>
                    <input type='text' value={inputs.userName} name='userName'
                           placeholder='Email Address' className='form_elements' onChange={handleInput}/>

                    <input type='password' value={inputs.passWord} name='passWord'
                           placeholder='Password' className='form_elements' onChange={handleInput}/>

                    <button type='submit' className='form_submit' onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
    )
};

export default Login;

