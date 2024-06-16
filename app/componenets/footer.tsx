import Link from "next/link"



export function Footer() {
    return(
        <footer className="bg-gray-950 text-white py-6 md:py-8">
        <div className="container px-4 md:px-6 grid gap-6 md:gap-8 lg:grid-cols-4">
          <div className="grid gap-4">
            <h4 className="font-semibold">
              <Link href="/">MHS</Link>
              </h4>
            <nav className="grid gap-2">
              <Link className="hover:underline" href="./products">
                Our Products
              </Link>
              <Link className="hover:underline" href="./about">
                Contact Us
              </Link>
              
            </nav>
          </div>
        </div>
      </footer>
    )
}