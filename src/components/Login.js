import React from 'react'
import {GoogleOutlined,TwitterOutlined} from '@ant-design/icons'
import 'firebase/app'

import { auth } from '../firebase'
import firebase from 'firebase/app'

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2 className="logo">TEXTDEX</h2>


                <div id = "hover"
                    className="login-button google loginbtnwidth"
                    onClick ={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >   
                    
                    <GoogleOutlined class = "googleicon"/> Sign in with Google
                </div>


                <br />  <br />


                <div 
                    className="login-button twitter loginbtnwidth"
                    onClick ={() => auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider())}
                >
                    <TwitterOutlined class = "twittericon"/>  Sign in with Twitter
                </div>



            </div>
        </div>
    )
}

export default Login;