interface WelcomePageProps {
  setPage: (value: number) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ setPage }) => {
  setTimeout(() => {
    setPage(2);
  }, 3000);

  return (
    <div>
      <img
        src="/src/assets/bg-img/Wallpaper.png"
        alt=""
        className="h-full w-full fixed z-0"
      />
      <div className="w-full h-screen flex flex-col justify-center items-center px-[32px] bg-gradient-to-b from-[#00000000] to-[#000000CC] z-10">
        <div className="absolute bottom-14 flex flex-col gap-7 w-80 px-4">
          <p className="text-white text-4xl font-semibold z-20">
            Welcome to 👋
          </p>
          <p className="text-white text-6xl font-bold">Shoea</p>
          <p className="text-white text-base font-semibold">
            The best sneakers & shoes e-commerse app of the century for your
            fashion needs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
