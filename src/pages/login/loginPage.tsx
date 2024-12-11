import { Link } from "react-router";

const LoginPage = () => {
  return (
    <>
      <div className="p-5">
        <Link to="/">
          <img src="/src/assets/icons/back-icon.svg" alt="back-icon" />
        </Link>
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/icons/Vector2.svg"
            alt="vector2"
            className="mt-[132px]"
          />
          <h1 className="font-semibold text-3xl mt-[118px]">
            Login to Your Account
          </h1>
          <div className="w-[380px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-12 bg-[#FAFAFA]">
            <img src="/src/assets/icons/email-icon.svg" alt="email-icon" />
            <input type="text" placeholder="Email" className="w-full px-2 bg-[#FAFAFA]" />
          </div>
          <div className="w-[380px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-[29px] bg-[#FAFAFA]">
            <img src="/src/assets/icons/lock-icon.svg" alt="lock-icon" />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-2 bg-[#FAFAFA]"
            />
            <img
              src="/src/assets/icons/eye-slash-icon.svg"
              alt="eye-icon"
              className=""
            />
          </div>
          <div className="flex justify-between gap-16 mt-3">
            <Link to="/">Forgot Password?</Link>
            <div>
              <input type="checkbox" name="checkbox" />
              <label htmlFor="checkbox" className="ml-2">
                Remember Me
              </label>
            </div>
          </div>
          <button className="w-full h-[47px] mt-[220px] rounded-[30px] bg-[#212529] text-white">
            Sign In
          </button>
          <div className="flex justify-between gap-8 mt-3 text-lg">
            <span className="text-[#6C757D]">Don’t have an account?</span>
            <Link to="/sign-up">Register Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
