import { Link } from "react-router";
import logo from "@/assets/logo1.png";
import appStore from "@/assets/app-store-apple.webp";
import googlePlay from "@/assets/google-play-badge.webp";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-gradient-to-br from-primary/5 via-background to-background lg:pt-6">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative mx-auto container px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Brand Section - Takes 4 columns on large screens */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="RideMate Logo"
                className="h-24 md:h-32 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Your trusted ride-sharing companion. Book rides instantly, track your journey in real-time,
              and enjoy seamless transportation with RideMate. Safe, reliable, and convenient.
            </p>

            {/* Download App Section */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-foreground mb-3">Download Our App</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="transition-transform hover:scale-105 duration-300"
                  aria-label="Download on App Store"
                >
                  <img src={appStore} alt="App Store" className="h-10 w-auto" />
                </a>
                <a
                  href="#"
                  className="transition-transform hover:scale-105 duration-300"
                  aria-label="Get it on Google Play"
                >
                  <img src={googlePlay} alt="Google Play" className="h-10 w-auto" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Sections - Takes 8 columns on large screens */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {/* For Riders */}
            <div>
              <p className="font-semibold text-foreground mb-4">For Riders</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/user/ride-book" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Book a Ride
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Our Features
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link to="/user/ride-history" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Ride History
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Drivers */}
            <div>
              <p className="font-semibold text-foreground mb-4">For Drivers</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/register" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Become a Driver
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Driver Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/driver" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Driver Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Requirements
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="font-semibold text-foreground mb-4">Company</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Careers
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Press & News
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div>
              <p className="font-semibold text-foreground mb-4">Follow Us</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 inline-block"
                    aria-label="Facebook"
                  >
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 inline-block"
                    aria-label="Instagram"
                  >
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 inline-block"
                    aria-label="Twitter"
                  >
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 inline-block"
                    aria-label="LinkedIn"
                  >
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>


          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2026 RideMate. All rights reserved. Built by <a href="https://yeamin-foysal.vercel.app" className="font-semibold text-primary underline transition-colors duration-200 hover:text-foreground">Yeamin Foysal</a> for seamless rides.
          </p>

          <div className="flex gap-6 text-xs">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}