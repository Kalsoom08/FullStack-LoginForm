import { useMutation } from "@tanstack/react-query";
import { useState } from "react"
import { registerUser } from "../API's/authAPI";
import {useNavigate} from 'react-router-dom';

export const RegisterUser = () => {
    const [ userData, setUserData ] = useState({
        userName: "",
        email: "",
        password: "",
    });

    const Navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            alert(data.message)
        }
    })
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name] : e.target.value })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(userData);
        console.log(userData)
    }
    
    return (
        <>
            <section className="flex flex-col w-[100%] justify-center items-center"> 
                <div className="flex flex-col w-[100%] h-[40vh] bg-[#AB3DFF] justify-center items-center">
                    <div className="lg:w-[50%] md:w-[80%] w-[90%] flex flex-col justify-center items-center gap-4 rounded-md bg-white pt-4 mt-[350px]">
                        <h1 className="text-[25px]">CREATE ACCOUNT</h1>
                        <form className="w-[80%] flex flex-col flex-start pt-2 gap-2" onSubmit={handleFormSubmit}>
                            <label htmlFor="fullName" className="flex flex-col w-full border-b border-gray-200">
                                <p className="text-[#AB3DFF] py-4">FULL NAME</p>
                                <input type="text" name="userName" id="fullName" placeholder="Type Your Name" className="outline-none py-2" value={userData.userName} onChange={handleChange}/>
                            </label>
                            <label htmlFor="email" className="flex flex-col w-full border-b border-gray-200">
                                <p className="text-[#AB3DFF] py-4">EMAIL</p>
                                <input type="text" name="email" id="email" placeholder="xyz@gmail.com" className="outline-none py-2" value={userData.email} onChange={handleChange}/>
                            </label>
                            <label htmlFor="password" className="flex flex-col w-full border-b border-gray-200">
                                <p className="text-[#AB3DFF] py-4">Password</p>
                                <input type="password" name="password" id="password" placeholder="........" className="outline-none py-2" value={userData.password} onChange={handleChange}/>
                            </label>
                            <button type="submit" className="bg-[#AB3DFF] mt-6 py-2 text-white rounded-md cursor-pointer hover:bg-white hover:border border-[#AB3DFF] hover:text-[#AB3DFF]">SignUp</button>
                        </form>
                        <p className="text-[12px] text-gray-400">Already have an Account? <a href="#" className="text-[#AB3DFF] "
                        onClick={() => Navigate('/login')}
                        >Sign In</a></p>
                    </div>

                </div>

            </section>
        </>
    )
}