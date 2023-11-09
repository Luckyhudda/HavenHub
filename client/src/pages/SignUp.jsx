import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" name="name" id="name" placeholder="username" className="border p-2 rounded-lg"/>
        <input type="email" name="email" id="email" placeholder="Email address" className="border p-2 rounded-lg"/>
        <input type="password" name="password" id="password" placeholder="Strong password" className="border p-2 rounded-lg"/>
        <button className="bg-slate-800 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sing Up</button>
      </form>
      <div className="flex gap-1 mt-3">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp;