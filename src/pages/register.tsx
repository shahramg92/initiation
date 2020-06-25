import React, { useState } from "react";
import { Button, Label, Input } from 'reactstrap';

/**
 * 
 * @param props 
 *  submitUser(): <promise> // submit user info for auth
 *  authError: Boolean // auth failure status
 * 
 */

export default function SignUpPage(props: any) {
    const MAIN_BG_STYLE = {
        width: '100wh',
        height: '100vh',
        background: '#bdc3c7',
        display: 'flex',
        justifyContent: 'center',
    };

    const FORM_STYLE = {
        marginTop: '150px',
        width: '400px',
        height: '250px',
        background: '#efefef',
        borderRadius: '5px',
        padding: '10px'
    };

    const ERROR_MESSAGE_STYLE = {
        color: 'red',
        fontSize: '10px',
        margin: 'auto',
    };

    const [ username, setUsername ] = useState<String>('');
    const [ name_error, setNameError] = useState<String>('')

    const [ password, setPassword ] = useState<String>('');
    const [ password_error, setPasswordError] = useState<String>('')

    const onSubmit = () => {
        if(username === '') {
            setNameError('Please add user name!');
            return;
        }
        if(password === '') {
            setPasswordError('Please add password!');
            return;
        }
        props.submitUser(username, password);
    };


    return (
        <div style={MAIN_BG_STYLE}>
            <div>
                <div style={FORM_STYLE}>
                    <Label for="exampleEmail" className="mr-sm-2">Username</Label>
                    <Input type="text" placeholder="User name" onChange={ev => setUsername(ev.target.value)} onFocus={() => setNameError('')}/>
                    {name_error!=='' && <div style={ERROR_MESSAGE_STYLE}>   
                        {name_error}
                    </div>}
            
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" placeholder="Password" onChange={ev => setPassword(ev.target.value)} onFocus={() => setPasswordError('')}/>
                    {password_error!=='' && <div style={ERROR_MESSAGE_STYLE}>
                        {password_error}
                    </div>}
                    <Button style={{width: '100%', marginTop: '30px'}} onClick={() => onSubmit()}>Submit</Button>
                </div>
                {props.authError && <div style={{marginTop: '50px', color: 'red', textAlign: "center"}}>
                    Auth Failed!
                </div>}
            </div>
        </div>
    )
}