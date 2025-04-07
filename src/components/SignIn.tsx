import { Input } from "./Input";
import { Button } from "./Button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export function SignUp () {

    const navigate = useNavigate()


    const usernameRef = useRef<HTMLInputElement>();
     const passwordRef = useRef<HTMLInputElement>() ;

    async function signin () {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post( BACKEND_URL + "/api/v1/signup" ,{
            username,
            password
        })

        const jwt = response.data.token;
        localStorage.setItem("token", jwt)
        // redirect the user to the dashboard
        navigate("/dashboard")
        
        
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8">
          <Input reference={usernameRef} placeholder="username"></Input>
          <Input reference={passwordRef} placeholder="password"></Input>

          <div className="flex justify-center pt-4">
            <Button onClick={signin} variant="primary" text="SignUp"></Button>
          </div>
        </div>

    </div>
}