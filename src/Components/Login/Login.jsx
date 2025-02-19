import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { useRef, useState } from "react";

const Login = () => {

    const emailRef  = useRef(null);
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setSuccess('')

    //  add validation
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setSuccess('Login Successful');
        console.log(res)
      })
      .catch((error) => {
        setError('Wrong Password');
        console.log(error)
        setSuccess('')
      });
  };
  const handleForgetPassword = () => {
    const email =emailRef.current.value;
    if(!email){
    // console.log("k",emailRef.current.value);
    setError('Please Enter My Email')
    return
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        setError('please right a valid email')
        return
    }

    // send Validation Email
    sendPasswordResetEmail(auth,email)
    .then((result =>{
      console.log(result)
        setSuccess('please check your email')
    }))
    .then(error=>{
        console.log(error);
    })

  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-green-200 my-10 text-center">
          Please Login
        </h1>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  ref={emailRef}
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    onClick={handleForgetPassword}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
                {
                    <div>
                        <h1> {error && error}</h1>
                        <h1> {success && success}  </h1>
                    </div>
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
