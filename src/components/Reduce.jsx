import React, { useReducer } from 'react';

const initialState = {
    firstName:{
        value: '',
        error: null
    },
    lastName:{
        value: '',
        error: null
    },
    email:{
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: {
            value:action.payload,
            error:action.error
        },
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        let error = null
        if(name=="firstName"){
            if(value.length<3){
                error="First Name must be at least 3 charecters!"
            }
        }
        if(name=="lastName"){
            if(value.length<3){
                error="Last Name must be at least 3 charecters!"
            }
        }
        if(name=="email"){
            if(value.length<3){
                error="Email must be at least 3 charecters!"
            }
        }
        dispatch({
            type: name,
            payload: value,
            error: error
        });
        
    }
    const createUser = (e) => {
        e.preventDefault();
        const { firstName,lastName, email } = state;
        if(firstName.error || lastName.error || email.error){
            return null;
        }else{
            console.log('Thanks for Submit')
        }
    }
    return (
        
        <div>
            
            <form onSubmit={createUser}>
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                    />
                    {state.firstName.error !==null &&(
                        <p>{state.firstName.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                    />
                    {state.lastName.error !==null &&(
                        <p>{state.lastName.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                    {state.email.error !==null &&(
                        <p>{state.email.error}</p>
                    )}
                </label>
            </div>
            <input type="submit" value="Submit" />

            </form>
        </div>
    );

}