import { useEffect, useState, type ReactNode } from "react";
import Footer from "./Footer";
import { Navbar1 } from "./Navbar1";

interface IProps {
    children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            console.log(currentScrollY)

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // scrolling down
                setVisible(false);
            } else {
                // scrolling up
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar with show/hide transition */}
            <div
                className={`fixed w-full z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <Navbar1 />
            </div>

            {/* Main content */}
            <div className="flex-grow">{children}</div>

            <Footer />
        </div>
    );
}
