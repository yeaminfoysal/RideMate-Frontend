import WeOfferCard from "./WeOfferCard";

export default function WhatWeOffer() {
    return (
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
                <p className="text-primary text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase mb-2 sm:mb-3">
                    What We Offer
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 px-4">
                    We Offer The Best For You
                </h2>
                <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed px-4 sm:px-6">
                    Discover our range of top-quality services designed to bring you comfort, reliability, and convenience. We are committed to offering the very best, tailored just for you.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row justify-between items-center sm:items-stretch gap-6 sm:gap-6 md:gap-8 lg:gap-10">
                <div className="animate-fade-in-up w-full sm:w-auto flex justify-center" style={{ animationDelay: "0ms" }}>
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

                <div className="animate-fade-in-up w-full sm:w-auto flex justify-center" style={{ animationDelay: "150ms" }}>
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

                <div className="animate-fade-in-up w-full sm:w-auto flex justify-center" style={{ animationDelay: "300ms" }}>
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