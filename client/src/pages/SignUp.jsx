import { useState } from "react";
import { Alert, Button, FloatingLabel, Spinner } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("Fill all fields");
    }
    try {
      setloading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessage(data.message);
      }
      setloading(false);
      if(res.ok){
        navigate('/sign-in')
      }
    } catch (error) {
      setErrorMessage(error.message);
      setloading(false);
     }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to={"/"} className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Praveen's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            laborum. Optio eaque ut mollitia ab, necessitatibus et. In,
            obcaecati delectus?
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <FloatingLabel
                variant="filled"
                label="Your username"
                type="text"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <FloatingLabel
                variant="filled"
                label="Your Email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <FloatingLabel
                variant="filled"
                label="Your Password"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500"
              type="submit" disabled={loading}
            >
             {
              loading ? (
                <><Spinner size="sm" />
                <span className="pl-3">Loading....</span></>
                
              ):"Sign up"
             }
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-500">
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5 " color={"failure"}>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SignUp;
