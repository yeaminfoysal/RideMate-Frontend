import { Navbar1 } from "@/components/layout/Navbar";
import { Hero1 } from "@/modules/HomePage/Hero";
import WhatWeOffer from "@/modules/HomePage/WhatWeOffer";

export default function HomePage() {
    return (
        <div>
            <div id="hero">
                <Navbar1 />
                <Hero1 />
            </div>
            <WhatWeOffer />
        </div>
    )
}
