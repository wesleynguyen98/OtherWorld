import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#f5f0e6] overflow-hidden">
      <Header />
      <div className="flex-grow bg-red-300 p-4">🔴 Hello, Tailwind is working!</div>
      <Footer />
    </div>
  );
}
