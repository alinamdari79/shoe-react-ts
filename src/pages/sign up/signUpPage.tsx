import { Link } from "react-router";

const SignUpPage = () => {
  return (
    <>
      <div className="p-5">
        <Link to="/login">
          <img src="/src/assets/icons/back-icon.svg" alt="back-icon" />
        </Link>
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/icons/Vector2.svg"
            alt="vector2"
            className="mt-[76px]"
          />
          <h1 className="font-semibold text-3xl mt-[52px]">
            Let’s To Create Account
          </h1>
          <div className="w-[380px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-3 bg-[#FAFAFA]">
            <img src="/src/assets/icons/user-icon.svg" alt="user-icon" />
            <input
              type="text"
              placeholder="Username"
              className="w-full px-2 bg-[#FAFAFA]"
            />
          </div>
          <div className="w-[380px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-6 bg-[#FAFAFA]">
            <img src="/src/assets/icons/email-icon.svg" alt="email-icon" />
            <input
              type="text"
              placeholder="Email"
              className="w-full px-2 bg-[#FAFAFA]"
            />
          </div>
          <div className="flex gap-3">
            <div className="w-[184px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-6 bg-[#FAFAFA]">
              <img
                src="/src/assets/icons/user-icon.svg"
                alt="user-icon"
                className="h-[33px] w-[14px]"
              />
              <input
                type="text"
                placeholder="Firstname"
                className="w-full px-2 bg-[#FAFAFA]"
              />
            </div>
            <div className="w-[184px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-6 bg-[#FAFAFA]">
              <img
                src="/src/assets/icons/user-icon.svg"
                alt="user-icon"
                className="h-[33px] w-[14px]"
              />
              <input
                type="text"
                placeholder="Lastname"
                className="w-full px-2 bg-[#FAFAFA]"
              />
            </div>
          </div>
          <div className="w-[380px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-6 bg-[#FAFAFA]">
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
          <div className="w-[380px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-6 bg-[#FAFAFA]">
            <img src="/src/assets/icons/lock-icon.svg" alt="lock-icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-2 bg-[#FAFAFA]"
            />
            <img
              src="/src/assets/icons/eye-slash-icon.svg"
              alt="eye-icon"
              className=""
            />
          </div>
          <div className="flex gap-3">
            <div className="w-[115px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-6 bg-[#FAFAFA]">
              <img
                src="/src/assets/icons/gender-icon.svg"
                alt="gender-icon"
                className="h-[33px] w-[14px]"
              />
              <select id="selectID" className="bg-[#FAFAFA]">
                <option selected disabled hidden>
                  Gender
                </option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="w-[257px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-6 bg-[#FAFAFA]">
              <img
                src="/src/assets/icons/phone-icon.svg"
                alt="phone-icon"
                className="h-[33px] w-[14px]"
              />
              <input
                type="text"
                placeholder="PhoneNumber"
                className="w-full px-2 bg-[#FAFAFA]"
              />
            </div>
          </div>
          <div className="w-[380px] mt-10">
            <input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox" className="ml-2">
              I have read and accept the User Aggrement and Privacy Policy
            </label>
          </div>
          <button className="w-full h-[47px] mt-[71px] rounded-[30px] bg-[#212529] text-white">
            Sign Up
          </button>
          <div className="flex justify-between gap-8 mt-3 text-lg">
            <span className="text-[#6C757D]">Already have an account?</span>
            <Link to="/login">Login Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
