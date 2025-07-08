import Header from "../components/Header"; 

export default function HomePage() {
  return (
    <div className="h-screen w-screen bg-[#f5f0e6]">
      <Header />
      <div className="flex items-center justify-center h-full text-white text-xl">
        🎉 Welcome to the Coraline Portal App!
      </div>
    </div>
  );
} 