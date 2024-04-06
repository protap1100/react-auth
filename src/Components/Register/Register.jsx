import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";

const Register = () => {


    const handelRegister = e =>{
        e.preventDefault();
        // console.log('hi')
        const  email = e.target.email.value;
        const  password = e.target.password.value;
        console.log(email,password);
        // create user 
        createUserWithEmailAndPassword(auth,email,password)
        .then(res =>{
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <h1 className="text-center">This is Register Section</h1>
            <div className="text-center border rounded-xl w-[500px] mx-auto p-10">
                <form onSubmit={handelRegister}>
                    <input className="p-3 rounded-xl " type="email" name="email" id="" placeholder="Email"/> <br /> <br />
                    <input className="p-3 rounded-xl " type="password" name="password" id="" placeholder="Password"/> <br />
                    <input className="p-3 rounded-xl mt-5 btn btn-active btn-secondary"  type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;