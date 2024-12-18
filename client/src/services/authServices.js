import { toast } from "react-toastify"
import { userLogin, userRegister } from "../redux/features/auth/authAction"
import store from "../redux/store"

//this is for the handling login
export let handleLoginController = (e, email, password, role) => {
    e.preventDefault()
    try {
        if (!email || !password || !role) return toast.error("All Fields Are Required")
        //api -call
        // console.log(email, password, role)
        store.dispatch(userLogin({email,password,role}))
    }
    catch (error) {
        console.log(error)
    }
}
//handling for registration
export let handleRegistrationController = (e, email, password, name, role, phone, address, hospitalName, originazationName) => {
    e.preventDefault()
    try {
        // console.log(email, password, role)
        store.dispatch(userRegister({email, password, name, role, phone, address, hospitalName, originazationName}))
    }
    catch (error) {
        console.log(error)
    }
}