interface SatisfyPageProps {
  setPage: (value: number) => void;
}
const SatisfyPage: React.FC<SatisfyPageProps> = ({ setPage }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="w-[430px] h-[60%]">
        <img
          src="/src/assets/bg-img/page2wallpaper.png"
          alt="page2wall"
          className="w-full h-full"
        />
      </div>
      <div className="relative w-[430px] h-full flex flex-col items-center gap-16 pt-8 px-6">
        <p className="text-2xl font-semibold text-center">
          Your satisfaction is our number one periority
        </p>
        <div className=" flex gap-2">
          <div className="w-8 h-1 bg-black opacity-50"></div>
          <div className="w-8 h-1 bg-black"></div>
          <div className="w-8 h-1 bg-black opacity-50"></div>
        </div>
        <button
          onClick={() => setPage(2)}
          className="bg-black hover:bg-gray-800 rounded-full text-white w-full py-3 absolute bottom-8"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SatisfyPage;