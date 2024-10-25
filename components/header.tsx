import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#6669FE] w-full p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo with corrected opacity and styles */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="logo"
            style={{ width: "96.67px", height: "49.03px" }}
            className="opacity-100"
          />
        </Link>

        {/* Title with responsive text */}
        <h1 className="text-white text-2xl md:text-4xl font-bold order-first md:order-none">
          Student Portal
        </h1>

        {/* User Info */}
        <div className="flex items-center gap-2 cursor-default">
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
