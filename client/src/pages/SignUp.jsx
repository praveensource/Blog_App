import { Button, FloatingLabel} from "flowbite-react"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="
    min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
           <Link to={'/'} className=' font-bold dark:text-white text-4xl'>
                      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Praveen's</span>
                      Blog
                  </Link>
                  <p className="text-sm mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laborum. Optio eaque ut mollitia ab, necessitatibus et. In, obcaecati delectus?
                  </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <FloatingLabel variant="filled" label="Your username" type="text" id="username"  />
            </div>
            <div>
              <FloatingLabel variant="filled" label="Your Email" type="text" id="email"  />
            </div>
            <div>
              <FloatingLabel variant="filled" label="Your Password" type="text" id="password"  />
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500" type="submit">
              Sign Up
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={'/sign-in'} className="text-blue-500">
            Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp