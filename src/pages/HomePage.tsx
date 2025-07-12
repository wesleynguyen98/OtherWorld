import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden  bg-[#f5f0e6]">
      {/* 1) Background layer */}
      {/* <div
        className="
          absolute inset-0 
          bg-[url('/sandbag-texture.jpg')]
          bg-cover bg-center bg-no-repeat
          z-0
        "
      /> */}

      {/* 2) Content layer */}
      <div className="relative flex flex-col h-full w-full z-10">
        <Header />
        <div className="flex-grow p-4">
          🔴 Hello, Tailwind is working!
          <img src="/coraline-jacket.png" alt="Coraline Logo" className="w-[500px] h-auto object-contain" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

