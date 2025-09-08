import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/her1.webp"

interface Hero1Props {
    badge?: string;
    heading: string;
    description: string;
    buttons: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    }
}

const Hero1 = () => {
    const props: Hero1Props = {
        badge: "✨ Your relaiable ridemate",
        heading: "RideMate – Your Smart Ride Companion",
        description: "Book rides, manage trips, and drive with ease. A seamless ride-sharing platform built for Riders, Drivers, and Admins.",
        buttons: {
            primary: {
                text: "Discover all components",
                url: "https://www.shadcnblocks.com",
            },
            secondary: {
                text: "View on GitHub",
                url: "https://www.shadcnblocks.com",
            },
        }
    }
    return (
        <section className="py-32">
            <div className="container mx-auto">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        {props && (
                            <Badge className="text-white" variant="outline">
                                {props.badge}
                                <ArrowUpRight className="ml-2 size-4" />
                            </Badge>
                        )}
                        <h1 className="my-6 text-white text-pretty text-4xl font-semibold lg:text-6xl">
                            {props.heading}
                        </h1>
                        <p className="text-white font-light mb-8 max-w-xl">
                            {props.description}
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            {props.buttons.primary && (
                                <Button asChild className="w-full sm:w-auto">
                                    <a href={props.buttons.primary.url}>{props.buttons.primary.text}</a>
                                </Button>
                            )}
                            {props.buttons.secondary && (
                                <Button asChild variant="outline" className="w-full sm:w-auto">
                                    <a href={props.buttons.secondary.url}>
                                        {props.buttons.secondary.text}
                                        <ArrowRight className="size-4" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className=" mx-auto relative">
                        <div className="guten-2AM08B">

                        </div>
                        <img
                            src={hero1}
                            alt={"Hero 1"}
                            className="max-h-[505px] rounded-md  relative"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero1 };
