import { Button } from "./componenets/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/app/componenets/ui/avatar"
import { Card } from "@/app/componenets/ui/card"
import { Input } from "@/app/componenets/ui/input"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="bg-gray-950 text-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 md:gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Elevate Your Home with Our Appliances
              </h1>
              <p className="text-gray-400 max-w-md">
                Discover the perfect home appliances to transform your kitchen and elevate your cooking experience.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Shop Now</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <img
              alt="Home Appliances"
              className="mx-auto aspect-square object-cover rounded-xl"
              height={600}
              src="/mainPage.jpg"
              width={600}
            />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Shop by Category</h2>
                <p className="text-gray-500 max-w-md">
                  Browse our selection of high-quality home appliances across different categories.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link className="group relative rounded-lg overflow-hidden" href="#">
                  <img
                    alt="Ovens"
                    className="aspect-square object-cover w-full group-hover:opacity-80 transition-opacity"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">Ovens</h3>
                  </div>
                </Link>
                <Link className="group relative rounded-lg overflow-hidden" href="#">
                  <img
                    alt="Hobs"
                    className="aspect-square object-cover w-full group-hover:opacity-80 transition-opacity"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">Hobs</h3>
                  </div>
                </Link>
                <Link className="group relative rounded-lg overflow-hidden" href="#">
                  <img
                    alt="Microwaves"
                    className="aspect-square object-cover w-full group-hover:opacity-80 transition-opacity"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">Microwaves</h3>
                  </div>
                </Link>
                <Link className="group relative rounded-lg overflow-hidden" href="#">
                  <img
                    alt="Accessories"
                    className="aspect-square object-cover w-full group-hover:opacity-80 transition-opacity"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">Accessories</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Accessories</h2>
                <p className="text-gray-500 max-w-md dark:text-gray-400">
                  Enhance your home appliances with our carefully curated selection of accessories.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link className="group relative rounded-lg overflow-hidden" href="#">
                  <img
                    alt="Oven Racks"
                    className="aspect-square object-cover w-full group-hover:opacity-80 transition-opacity"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">Oven Racks</h3>
                  </div>
                </Link>
                <Link className="group relative rounded-lg overflow-hidden" href="#">
                  <img
                    alt="Hob Grates"
                    className="aspect-square object-cover w-full group-hover:opacity-80 transition-opacity"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">Hob Grates</h3>
                  </div>
                </Link>
                <Link className="group relative rounded-lg overflow-hidden" href="#">
                  <img
                    alt="Microwave Trays"
                    className="aspect-square object-cover w-full group-hover:opacity-80 transition-opacity"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">Microwave Trays</h3>
                  </div>
                </Link>
                <Link className="group relative rounded-lg overflow-hidden" href="#">
                  <img
                    alt="Cleaning Supplies"
                    className="aspect-square object-cover w-full group-hover:opacity-80 transition-opacity"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">Cleaning Supplies</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Customers Say</h2>
                <p className="text-gray-500 max-w-md dark:text-gray-400">
                  Hear from our satisfied customers about their experiences with our home appliances.
                </p>
              </div>
              <div className="grid gap-4">
                <Card className="p-6 bg-gray-100 dark:bg-gray-800">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-10 h-10 border">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">John Doe</h4>
                        <div className="flex items-center gap-0.5 text-yellow-500">
                          <StarIcon className="w-4 h-4" />
                          <StarIcon className="w-4 h-4" />
                          <StarIcon className="w-4 h-4" />
                          <StarIcon className="w-4 h-4" />
                          <StarIcon className="w-4 h-4" />
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">
                        "I'm absolutely in love with my new oven from Home Appliances. It's been a game-changer in my
                        kitchen!"
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gray-100 dark:bg-gray-800">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-10 h-10 border">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Sarah Miller</h4>
                        <div className="flex items-center gap-0.5 text-yellow-500">
                          <StarIcon className="w-4 h-4" />
                          <StarIcon className="w-4 h-4" />
                          <StarIcon className="w-4 h-4" />
                          <StarIcon className="w-4 h-4" />
                          <StarIcon className="w-4 h-4" />
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">
                        "The microwave I bought from Home Appliances has been a lifesaver. It's so easy to use and heats
                        up my food perfectly every time."
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-950 text-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 md:gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Stay Updated with Our Newsletter
              </h2>
              <p className="text-gray-400 max-w-md">
                Sign up for our newsletter to receive the latest updates, exclusive offers, and helpful tips for your
                home appliances.
              </p>
            </div>
            <form className="flex flex-col gap-2 min-[400px]:flex-row">
              <Input
                className="flex-1 bg-white text-gray-950 dark:bg-gray-800 dark:text-white"
                placeholder="Enter your email"
                type="email"
              />
              <Button size="lg" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      
    </div>
    
    
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function WashingMachineIcon(props) {
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
