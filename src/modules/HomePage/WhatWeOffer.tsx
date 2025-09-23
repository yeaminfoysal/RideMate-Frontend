import WeOfferCard from "./WeOfferCard";

export default function WhatWeOffer() {
    return (
        <div className="py-14 px-4 sm:px-6 lg:px-20 container mx-auto">
            <p className="text-primary text-center text-lg">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mt-2">
                We Offer The Best For You
            </h2>

            <p className="text-center max-w-[700px] mx-auto mt-4 sm:mt-6 text-sm sm:text-base">
                Discover our range of top-quality services designed to bring you comfort, reliability, and convenience. We are committed to offering the very best, tailored just for you.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
                <WeOfferCard
                    title="Support All Payment"
                    desc="Seamless transactions with every payment method"
                    bgMain="bg-[#212121]"
                    textClr="text-white"
                    bgIcon="bg-primary"
                    mainIcon="https://img.icons8.com/?size=100&id=85801&format=png&color=000000"
                    icon1="https://img.icons8.com/?size=100&id=87505&format=png&color=ffffff"
                    icon2="https://img.icons8.com/?size=100&id=zssVYAAiltQy&format=png&color=ffffff"
                    icon3="https://img.icons8.com/?size=100&id=Vr5TGbc9C4Ma&format=png&color=ffffff"
                    icon4="https://img.icons8.com/?size=100&id=SuYRJWCg1Sdz&format=png&color=ffffff"
                />
                <WeOfferCard
                    title="Safety First"
                    textClr="text-black"
                    desc="Prioritizing your security on every ride"
                    bgMain="bg-primary"
                    bgIcon="bg-black"
                    mainIcon="https://img.icons8.com/?size=100&id=10483&format=png&color=FCC419"
                    icon1="https://img.icons8.com/?size=100&id=59751&format=png&color=000000"
                    icon2="https://img.icons8.com/?size=100&id=HtoPj7ftiHFM&format=png&color=000000"
                    icon1Text="Guarantee"
                    icon2Text="Quick Ride"
                />
                <WeOfferCard
                    title="100% Digital"
                    textClr="text-black"
                    desc="Fully digital experience, fast and paperless"
                    bgMain="bg-white"
                    bgIcon="bg-primary"
                    mainIcon="https://img.icons8.com/?size=100&id=11474&format=png&color=000000"
                    icon1="https://img.icons8.com/?size=100&id=95294&format=png&color=fdb813"
                    icon1Text="Apple"
                    icon2="https://img.icons8.com/?size=100&id=C0IckHPpZZCE&format=png&color=fdb813"
                    icon2Text="Android"
                />
            </div>
        </div>
    )
}
