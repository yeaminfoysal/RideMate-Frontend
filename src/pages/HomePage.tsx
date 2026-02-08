// import { Navbar1 } from "@/components/layout/Navbar1";
import AboutSection from "@/modules/HomePage/AboutSection";
import BlogSection from "@/modules/HomePage/BlogSection";
import { BookingForm } from "@/modules/HomePage/BookingForm";
import CustomerReviews from "@/modules/HomePage/CastumerReviewsSection";
import DownloadApp from "@/modules/HomePage/DownloadAppSection";
import { Hero1 } from "@/modules/HomePage/Hero";
import WhatWeOffer from "@/modules/HomePage/WhatWeOffer";

export default function HomePage() {
    return (
        <div>
            <div id="hero">
                <Hero1 />
            </div>
            <div className="relative mb-80">
                <div className=" absolute  -top-20 left-1/2 transform -translate-x-1/2 ">
                    <BookingForm />
                </div>
            </div>
            <WhatWeOffer />
            <AboutSection />
            <DownloadApp />
            <BlogSection />
            <CustomerReviews />
        </div>
    )
}
