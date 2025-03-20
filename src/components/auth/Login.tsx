import { useState } from "react";
import { Link } from "react-router-dom";
import log_img from "../../assets/login.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main className="w-full min-h-screen flex bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto sm:max-w-[1000px] rounded-2xl">
        
        <div className="hidden md:flex items-center justify-center">
          <img className="max-w-[450px]" src={log_img} alt="Login illustration" />
        </div>

        
        <div className="p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit}>
            <h1 className="text-4xl font-medium mb-8 text-black">
              Welcome <span className="text-blue-600">Back!</span>
            </h1>
            <div>
              <label htmlFor="email" className="poppins-medium ml-1 text-gray-600">
                Email Address
              </label>
              <input
                id="email"
                className="border border-gray-300 px-3 py-2 w-full rounded-xl focus:bg-gray-50 focus:ring-1 focus:border-blue-500 mt-3"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="mt-6">
              <label htmlFor="password" className="poppins-medium ml-1 text-gray-600">
                Enter Password
              </label>
              <input
                id="password"
                className="border border-gray-300 px-3 py-2 w-full rounded-xl focus:bg-gray-50 focus:ring-1 focus:border-blue-500 mt-3"
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="text-right mt-3">
              <Link to="/forgot-password" className="font-normal text-blue-500">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-6 w-full active:scale-[.98] active:duration-75 hover:scale-[1.01] transition-all p-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"
            >
              Log In
            </button>

            <div className="mt-6 text-center">
              <p className="font-medium text-gray-600">Don't have an Account?</p>
              <Link to="/register" className="text-blue-500 font-normal ml-2">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}