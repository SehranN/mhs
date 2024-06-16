
import Link from "next/link"


export default function AboutUs() {
  return (
    <div>
      
      <div className="w-full max-w-6xl mx-auto py-12 md:py-20">
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="grid gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start gap-4">
                  <LocateIcon className="w-6 h-6 text-gray-500 dark:text-gray-400 mt-1" />
                  <div>
                    <p className="font-medium">Acme Inc. Store</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      123 Main Street
                      <br />
                      Anytown, CA 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-6 h-6 text-gray-500 dark:text-gray-400 mt-1" />
                  <div>
                    <p className="font-medium">+1 (555) 555-5555</p>
                    <p className="text-gray-500 dark:text-gray-400">Monday - Friday, 9am - 5pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MailIcon className="w-6 h-6 text-gray-500 dark:text-gray-400 mt-1" />
                  <div>
                    <p className="font-medium">support@acme.com</p>
                    <p className="text-gray-500 dark:text-gray-400">Get in touch with our support team.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapIcon className="w-6 h-6 text-gray-500 dark:text-gray-400 mt-1" />
                  <div>
                    <p className="font-medium">Directions</p>
                    <p>Get directions to our office using Google Maps.</p>
                    <Link className="text-blue-500 hover:underline" href="#" target="_blank">
                      View on Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Acme Inc. is committed to providing high-quality products and exceptional customer service. We believe in
                sustainability, innovation, and creating a positive impact on our community.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden" />
          </div>
        </div>
        
      </div>
      
    </div>
   
  )
}

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapIcon(props) {
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
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}


function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
