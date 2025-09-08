import { MapPin, Car } from "lucide-react"
import Image from "@/assets/calling-taxi.webp"

export default function AboutSection() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-16 px-6 items-center my-20">
      {/* Left Image */}
      <div className="flex justify-center">
        <img
          src={Image}
          alt="Traveler with luggage"
          className="rounded-2xl shadow-lg object-cover w-[70%]"
        />
      </div>

      {/* Right Content */}
      <div>
        <p className="text-primary font-medium mb-2">About RideMate</p>
        <h2 className="text-[50px] font-semibold  mb-4">
          Trusted Cab Services In All Over The <span className="text-primary">World.</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus.
        </p>

        {/* Service Items */}
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="bg-gray-900 text-primary p-4 rounded-lg">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Long Distance Trip</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do tempor incididunt labore.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-primary text-black p-4 rounded-lg">
              <Car className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Taxi Tour Services</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do tempor incididunt labore.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Contact Info */}
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Contact Person"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-500 text-sm">We Are Available 24 Hours</p>
            <p className="font-bold text-lg">
              For Booking : <span className="text-primary">(+62) 8896-2220</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
