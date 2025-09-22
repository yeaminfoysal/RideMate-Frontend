type WeOfferCardProps = {
    title: string
    desc: string
    bgMain: string
    textClr: string
    bgIcon: string
    mainIcon: string
    icon1: string
    icon2: string
    icon3?: string
    icon4?: string
    icon1Text?: string
    icon2Text?: string
}

export default function WeOfferCard({
    title,
    desc,
    bgMain,
    textClr,
    bgIcon,
    mainIcon,
    icon1,
    icon2,
    icon3,
    icon4,
    icon1Text,
    icon2Text,
}: WeOfferCardProps) {
    return (
        <div className={`${bgMain} p-5 sm:p-6 md:p-8 rounded-2xl ${textClr} shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full sm:w-[280px] md:w-[300px] lg:w-[340px]`}>
            <div className="flex justify-between items-center gap-4">
                <div className={`${bgIcon} text-primary p-3 rounded-lg`}>
                    <img className="w-8 sm:w-10" src={mainIcon} alt="" />
                </div>
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
                    <p className="text-sm sm:text-base">{desc}</p>
                </div>
            </div>
            <hr className="border-t border-t-foreground/10 my-4" />
            <div className="flex flex-wrap justify-evenly gap-3 px-2">
                <div className="flex items-center gap-2">
                    <img className="w-6 sm:w-8" src={icon1} alt="" />
                    <p className="text-xs sm:text-sm">{icon1Text}</p>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-6 sm:w-8" src={icon2} alt="" />
                    <p className="text-xs sm:text-sm">{icon2Text}</p>
                </div>
                {icon3 && <img className="w-6 sm:w-8" src={icon3} alt="" />}
                {icon4 && <img className="w-6 sm:w-8" src={icon4} alt="" />}
            </div>
        </div>

    )
}
