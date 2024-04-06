import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";

const HeroRegister = () => {

    const [registerError,setRegisterError] = useState('');
    const [successMessage,setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handelOnSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const acceptTerms = e.target.terms.checked;
        console.log(email,password,acceptTerms)

        if(password.length < 6){
            setRegisterError('Password Should be at least 6 character ');
            return;
        }else if(!/[A-Z]/.test(password)) {
            setRegisterError('Your Password should have 1 uppercase character');
            return
        }else if(!acceptTerms){
            setRegisterError('Accept Out Terms And Condition Before Log in ')
            return;
        }


        // reset error 
        setRegisterError('');
        setSuccessMessage('');

        createUserWithEmailAndPassword(auth,email,password)
        .then(res => {
            console.log(res.user);
            setSuccessMessage('Reg success');
        })
        .catch(error => {
            setRegisterError(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handelOnSubmit}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>

                    <input type={showPassword ? 'text' : 'password'}  
                         name="password"
                    placeholder="password" className="input input-bordered" required />
                    <span onClick={ ()=> 
                            setShowPassword(!showPassword)
                    } className="cursor-pointer">{showPassword ? 'hide' : 'show' }</span>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <br />
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept our terms and condition</label>
                    <br />
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div>
                    {
                        registerError && <p className="text-2xl text-red-600 ">{registerError}</p> 
                    }
                    {
                        successMessage && <p className="text-2xl text-green-600 ">{successMessage}</p> 
                    }
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HeroRegister;