import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const [user,setUser] = useState({});
  const [error,setError]  = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const userDataHandler = (e) =>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  const SignUpHandler = async(e) =>{
    e.preventDefault();
    setIsLoading(true);
    axios.post('/api/auth/signup',{...user}).then((data) =>{
      if(data.status == 201){
        navigate("/sign-in");
        console.log(data);
        setError(null);
        setIsLoading(false);
      }
    }).catch((err) =>{
      if (err.response.data.statusCode == 409) {
        setError(err.response.data.message);
      }else{
        //  setError(err.message);
        setIsLoading(false);
        console.log(err);
      }
      
      return;
    })
    console.log(error);
    setError(null);
    setIsLoading(false);
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={SignUpHandler} className="flex flex-col gap-4">
        <input
          onChange={(e) => userDataHandler(e)}
          type="text"
          name="username"
          id="name"
          placeholder="username"
          className="border p-2 rounded-lg  bg-violet-50"
        />
        <input
          onChange={(e) => userDataHandler(e)}
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className="border p-2 rounded-lg bg-violet-50"
        />
        <input
          onChange={(e) => userDataHandler(e)}
          type="password"
          name="password"
          id="password"
          placeholder="Strong password"
          className="border p-2 rounded-lg  bg-violet-50"
        />
        <button disabled={isLoading} className="bg-slate-800 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
         {isLoading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className="flex gap-1 mt-3">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;