import { useNavigate } from "react-router";

function StartPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen min-w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/bg-image.gif')",
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <h1 className="font-pix font-bold text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center leading-tight">
          FOR MY VALENTINE,
        </h1>
        <h1 className="flex items-center font-bold font-pix text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center leading-tight mt-2 sm:mt-4">
          ALWAYS
          <img
            src="/assets/heart-always.gif"
            className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 ml-2 sm:ml-3 md:ml-4"
            alt="heart"
          />
        </h1>
        <p className="font-pix text-white">Open gently. It’s meant for you.</p>
        <img
          onClick={() => navigate("/gifts")}
          src="/assets/start-button.png"
          className="
    cursor-pointer
    h-13 w-25 sm:h-20 sm:w-35 md:h-20 md:w-35 lg:h-20 lg:w-40
    transition-transform duration-300 ease-out
    hover:scale-110
    active:scale-95
  "
        />
      </div>
    </div>
  );
}

export default StartPage;
