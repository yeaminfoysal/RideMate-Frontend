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
        <div
            className={`${bgMain} p-[25px] rounded-2xl ${textClr} shadow-lg hover:shadow-2xl transition-shadow duration-300`}
        >
            <div className="flex justify-between items-center gap-[20px] ">
                <div className={`${bgIcon} text-primary p-[17px] rounded-lg`}>
                    <img className="w-[30px]" src={mainIcon} alt="" />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
            <hr className="border-t border-t-foreground/10 my-[20px]" />
            <div className="flex justify-evenly px-3">
                <div className="flex items-center gap-2">
                    <img className="w-[34px]" src={icon1} alt="" />
                    <p>{icon1Text}</p>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-[34px]" src={icon2} alt="" />
                    <p>{icon2Text}</p>
                </div>
                {icon3 && (
                    <img className="w-[34px]" src={icon3} alt="" />
                )}
                {icon4 && (
                    <img className="w-[34px]" src={icon4} alt="" />
                )}
            </div>
        </div>
    )
}
