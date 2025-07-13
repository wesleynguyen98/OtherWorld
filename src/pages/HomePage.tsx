

export default function HomePage() {
  return (
      <div className="relative flex overflow-hidden h-full">
        <div className="flex justify-between items-center px-4">
          <img
            src="/coraline-jacket.png"
            alt="Coraline Logo"
            className="h-[90vh]"
          />
        </div>

        <div className="absolute top-0 right-0 h-full w-full bg-black text-white z-10 flex items-center justify-end pr-8"
          style={{
            clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 50% 100%)"
          }}>

          <div className="text-right">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Other World</h1>
            <p className="text-lg text-gray-300">
              Step into a world where shadows breathe and buttons blink.
            </p>
          </div>
        </div>

    </div>
  );
}

