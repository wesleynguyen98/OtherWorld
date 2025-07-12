

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#f5f0e6]">
      <div className="relative flex-col w-full overflow-x-hidden">
        <div className="flex-grow p-4">
          <img src="/coraline-jacket.png" alt="Coraline Logo" className="w-[500px] h-auto object-contain" />
        </div>

        <div className="absolute top-0 right-0 h-full w-full bg-black text-white z-10 flex items-center justify-end max-w-screen pr-8"
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

    </div>
  );
}

