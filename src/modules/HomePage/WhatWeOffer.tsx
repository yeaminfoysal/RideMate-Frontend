import WeOfferCard from "./WeOfferCard";

export default function WhatWeOffer() {
    return (
        <div className="py-16 sm:py-20 mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <p className="text-primary text-base sm:text-lg font-semibold tracking-wide uppercase mb-3">
                    What We Offer
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4 sm:mb-6">
                    We Offer The Best For You
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                    Discover our range of top-quality services designed to bring you comfort, reliability, and convenience. We are committed to offering the very best, tailored just for you.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-6 lg:gap-10">
                <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
                    <WeOfferCard
                        title="Support All Payment"
                        desc="Seamless transactions with every payment method"
                        bgMain="bg-gradient-to-br from-[#212121] to-[#1a1a1a] border border-white/10"
                        textClr="text-white"
                        bgIcon="bg-gradient-to-br from-primary to-yellow-500"
                        mainIcon="https://img.icons8.com/?size=100&id=85801&format=png&color=000000"
                        icon1="https://img.icons8.com/?size=100&id=87505&format=png&color=ffffff"
                        icon2="https://img.icons8.com/?size=100&id=zssVYAAiltQy&format=png&color=ffffff"
                        icon3="https://img.icons8.com/?size=100&id=Vr5TGbc9C4Ma&format=png&color=ffffff"
                        icon4="https://img.icons8.com/?size=100&id=SuYRJWCg1Sdz&format=png&color=ffffff"
                    />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                    <WeOfferCard
                        title="Safety First"
                        textClr="text-black"
                        desc="Prioritizing your security on every ride"
                        bgMain="bg-gradient-to-br from-primary via-yellow-400 to-primary"
                        bgIcon="bg-gradient-to-br from-black to-gray-800"
                        mainIcon="https://img.icons8.com/?size=100&id=10483&format=png&color=FCC419"
                        icon1="https://img.icons8.com/?size=100&id=59751&format=png&color=000000"
                        icon2="https://img.icons8.com/?size=100&id=HtoPj7ftiHFM&format=png&color=000000"
                        icon1Text="Guarantee"
                        icon2Text="Quick Ride"
                    />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                    <WeOfferCard
                        title="100% Digital"
                        textClr="text-black"
                        desc="Fully digital experience, fast and paperless"
                        bgMain="bg-gradient-to-br from-white to-gray-50 border border-gray-200"
                        bgIcon="bg-gradient-to-br from-primary to-yellow-500"
                        mainIcon="https://img.icons8.com/?size=100&id=11474&format=png&color=000000"
                        icon1="https://img.icons8.com/?size=100&id=95294&format=png&color=fdb813"
                        icon1Text="Apple"
                        icon2="https://img.icons8.com/?size=100&id=C0IckHPpZZCE&format=png&color=fdb813"
                        icon2Text="Android"
                    />
                </div>
            </div>
        </div>
    );
}