import bgImage from "@/assets/steel-look-podium-product-display.webp";
import phoneImage from "@/assets/mobile-apps.webp";

export default function DownloadApp() {
    return (
        <section
            className="relative py-10 px-6 md:px-12 bg-cover bg-top lg:h-[450px] my-20"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Phone Image Container */}
                <div className="flex justify-center md:justify-end relative">
                    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[600px]">
                        <img
                            src={phoneImage}
                            alt="Phone App Preview"
                            className="md:absolute lg:-top-20 md:left-1/2 md:transform md:-translate-x-1/2  h-full md:max-w-none md:drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="text-white ">
                    <p className="text-yellow-400 font-semibold mb-2">Download RideMate App</p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
                        Download RideMate App <br /> From Your Gadget<span className="text-yellow-400">.</span>
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                        ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    {/* Store Buttons */}
                    <div className="flex gap-4">
                        <a href="#">
                            <img
                                src="https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/app-store-apple.webp"
                                alt="Download on the App Store"
                                className="h-14"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/google-play-badge.webp"
                                alt="Get it on Google Play"
                                className="h-14"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}