import NavBar from "./NavBar";
export default function Header() {
  return (
    <div>
      <nav className="flex justify-between items-center w-full p-10 h-[6vh] mx-auto bg-[#f5f0e6]">
        <NavBar />
      </nav>
    </div>
  );
}
