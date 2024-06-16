import Link from "next/link"
import { JSX, SVGProps } from "react"

export function Navbar() {
    return(
        <header className="bg-gray-950 text-white px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg" prefetch={false}>
          <WashingMachineIcon className="h-6 w-6" />
          MHS
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="./products" className="text-sm hover:underline" prefetch={false}>
            Products
          </Link>
          <Link href="./about" className="text-sm hover:underline" prefetch={false}>
            Contact Us
          </Link>
        </nav>
      </header>
    )
}


  
  
  function WashingMachineIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h3" />
        <path d="M17 6h.01" />
        <rect width="18" height="20" x="3" y="2" rx="2" />
        <circle cx="12" cy="13" r="5" />
        <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
      </svg>
    )
  }
  