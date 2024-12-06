const LoginPage = () => {
  return (
    <>
      <div className="p-5">
        <img src="/src/assets/icons/back-icon.svg" alt="back-icon" />
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/icons/Vector2.svg"
            alt="vector2"
            className="mt-[132px]"
          />
          <h1 className="font-semibold text-3xl mt-[118px]">
            Login to Your Account
          </h1>
          <div className="w-[380px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-12">
            <img src="/src/assets/icons/email-icon.svg" alt="email-icon" />
            <input type="text" placeholder="Email" className="w-full px-2" />
          </div>
          <div className="w-[380px] h-[37px] border-2 border-[#6C757D] rounded px-2 flex gap-2 mt-[29px]">
            <img src="/src/assets/icons/lock-icon.svg" alt="lock-icon" />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-2"
            />
            <img
              src="/src/assets/icons/eye-slash-icon.svg"
              alt="eye-icon"
              className=""
            />
          </div>
          <div className="mt-10">
            <input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox" className="ml-2">Remember Me</label>
          </div>
          <button className="w-full h-[47px] mt-[220px] rounded-[30px] bg-[#212529] text-white">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
