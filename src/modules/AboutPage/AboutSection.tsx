import React from "react";
import { CheckCircle } from "lucide-react";
import WeOfferCard from "../HomePage/WeOfferCard";

const featuresLeft = [
    "Flexible & Cost-Effective",
    "VIP & Annual Pass Services",
    "Over 250,000 Clients",
    "Satisfaction Guarantee",
];

const featuresRight = [
    "Company Contract",
    "Convenient Location",
    "Home Pickup",
    "One Way Rental",
];

const AboutSection: React.FC = () => {
    return (
        <section className="py-16 bg-background mt-20">
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <span className="text-primary font-medium">About RideMate</span>
                    <h2 className="text-[50px] font-semibold text-foreground mt-2 leading-snug">
                        Trusted Cab Services In <br /> All Over The World
                        <span className="text-primary">.</span>
                    </h2>
                    <p className="mt-4 text-foreground/80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam quis nostrud eiusmod tempor incididunt.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-6">
                        {featuresLeft.map((item, i) => (
                            <div key={i} className="flex items-center text-foreground/60">
                                <CheckCircle className="text-primary w-5 h-5 mr-2" />
                                <span>{item}</span>
                            </div>
                        ))}
                        {featuresRight.map((item, i) => (
                            <div key={i} className="flex items-center text-foreground/60">
                                <CheckCircle className="text-primary w-5 h-5 mr-2" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Booking Contact */}
                    <div className="flex items-center mt-8 space-x-4">
                        <img
                            src="https://i.pravatar.cc/100?img=12"
                            alt="Support Person"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-gray-500 text-sm">We Are Available 24 Hours</p>
                            <p className="font-bold text-lg">
                                For Booking :{" "}
                                <span className="text-primary">(+62) 8896-2220</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Images */}
                <div className="flex gap-6 justify-center">
                    <img
                        src="https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/trip-travel-and-vacations-concept-woman.webp"
                        alt="Woman with luggage at home"
                        className="rounded-2xl shadow-lg w-1/2 object-cover"
                    />
                    <img
                        src="https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/female-traveler-trying-to-chatch-car.webp"
                        alt="Traveler hailing cab"
                        className="rounded-2xl shadow-lg w-1/2 object-cover"
                    />
                </div>
            </div>
            <div className="container mx-auto px-16 mt-[90px] flex items-center justify-between gap-[20px]">
                <WeOfferCard
                    title="Support All Payment"
                    desc="Lorem ipsum dolor sit amet."
                    bgMain="bg-[#212121]"
                    textClr="text-white"
                    bgIcon="bg-primary"
                    mainIcon={"https://img.icons8.com/?size=100&id=85801&format=png&color=000000"}
                    icon1="https://img.icons8.com/?size=100&id=87505&format=png&color=ffffff"
                    icon2="https://img.icons8.com/?size=100&id=zssVYAAiltQy&format=png&color=ffffff"
                    icon3="https://img.icons8.com/?size=100&id=Vr5TGbc9C4Ma&format=png&color=ffffff"
                    icon4="https://img.icons8.com/?size=100&id=SuYRJWCg1Sdz&format=png&color=ffffff"
                />
                <WeOfferCard
                    title="Safety First"
                    textClr="text-black"
                    desc="Lorem ipsum dolor sit amet."
                    bgMain="bg-primary"
                    bgIcon="bg-black"
                    mainIcon={"https://img.icons8.com/?size=100&id=10483&format=png&color=FCC419"}
                    icon1="https://img.icons8.com/?size=100&id=59751&format=png&color=000000"
                    icon2="https://img.icons8.com/?size=100&id=HtoPj7ftiHFM&format=png&color=000000"
                    icon1Text="Guarantee"
                    icon2Text="Quick Ride"
                />
                <WeOfferCard
                    title="100% Digital"
                    textClr="text-black"
                    desc="Lorem ipsum dolor sit amet."
                    bgMain="bg-white"
                    bgIcon="bg-primary"
                    mainIcon={"https://img.icons8.com/?size=100&id=11474&format=png&color=000000"}
                    icon1="https://img.icons8.com/?size=100&id=95294&format=png&color=fdb813"
                    icon1Text="Apple"
                    icon2="https://img.icons8.com/?size=100&id=C0IckHPpZZCE&format=png&color=fdb813"
                    icon2Text="Android"
                />
            </div>
        </section>
    );
};

export default AboutSection;
