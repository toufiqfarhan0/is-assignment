import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#6669FE] w-full p-4 md:p-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="logo"
            style={{ width: "96.67px", height: "49.03px" }}
            className="opacity-100"
          />
        </Link>

        {/* Title with responsive text */}
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          Student Portal
        </h1>

        {/* User Info - hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 cursor-default">
          <div className="flex flex-col items-end">
            <span className="text-white font-semibold text-3xl">
              Hello, Gabrisa!
            </span>
            <span className="text-white text-sm">
              Class 7, Math + Science
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}