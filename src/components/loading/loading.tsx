interface LoadingProps {
  setPage: (value: number) => void;
}

const Loading: React.FC<LoadingProps> = () => {

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 flex justify-center items-center bg-black rounded-full ">
          <img src="/src/assets/icons/Vector.svg" alt="" />
        </div>
        <p className="text-3xl text-black font-bold">Shoea</p>
      </div>
      <img
        className="absolute bottom-32 animate-spin"
        src="/src/assets/icons/spinner.svg"
        alt=""
      />
    </div>
  )
};

export default Loading;