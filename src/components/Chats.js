import React, {useRef, useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'
import { useAuth } from '../contexts/AuthContexts'
import axios from 'axios'


const Chats = () => {
    const didMountRef = useRef(false)
    const history = useHistory()
    const { user } = useAuth();
    const [loading, setLoading] = useState(true)


    const handleLogout = async () => {
        await auth.signOut();
        history.push("/")
    }

    const getFile = async (url) => {
        let response = await fetch(url);
        let data = await response.blob()  //blobs are usually images or files that we want to collect in binary format

        return new File([data], "userPhoto.jpg", {type: 'image/jpeg'})
    }

    useEffect(() => {
        if (!didMountRef.current){
            didMountRef.current = true;
        if(!user){
                    history.push('/')

                    return;
                }

                axios.get('https://api.chatengine.io/users/me/',{
                    headers: {
                    "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
                    "user-name" : user.email,
                    "user-secret":user.uid,
                }})
                .then(() => {
                    setLoading(false)
                })
                .catch(() => {
                    let formdata = new FormData();
                    formdata.append('email', user.email)
                    formdata.append('username', user.email)
                    formdata.append('secret', user.uid)

                    getFile(user.photoURL)
                    .then((avatar) => {

                        formdata.append('avatar', avatar, avatar.name)
                        axios.post("https://api.chatengine.io/users/",
                        formdata,
                        {headers : {"private-key": process.env.REACT_APP_CHAT_ENGINE_KEY }}
                        )
                        .then(() => setLoading(false))
                        .catch((error) => console.log(error))
                    })
                })



        }

        
        
    }, [user,history])


    if(!user ||  loading)return (

        <div className="loading">
           Loading... 
        </div>
        )


  return (
    <div className="chats-page">
        <div className="nav-bar">
            <div className="logo-tab">
                TEXTDEX
            </div>
            <div  onClick = {handleLogout} className="logout-tab">
                Logout
            </div>
        </div>
        <div className="white-text" style = {{color:'white'}}>
            <ChatEngine
            height = "calc(100vh - 66px)"
            projectID = {process.env.REACT_APP_CHAT_ENGINE_ID}
            userName = {user.email}
            userSecret = {user.uid}
        />
        </div>
        
    </div>
  )
}

export default Chats