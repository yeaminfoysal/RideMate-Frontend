import { Button } from "@/components/ui/button";
import {
  Car,
  MapPin,
  History,
  FileText,
  User,
  ToggleLeft,
  PhoneIncoming,
  Play,
  BarChart,
  Clock,
  UserCog,
  Users,
  Eye,
  TrendingUp,
  Search,
  Settings
} from "lucide-react";
import heroImage from "@/assets/FeaturesHero.jpg";
import riderImage from "@/assets/FeaturesRider.jpg";
import driverImage from "@/assets/FeaturesDriver.jpg";
import adminImage from "@/assets/FeaturesAdmin.jpg";
import { RoleSection } from "@/modules/FeaturesPage/RoleSection";
import { useEffect } from "react";

const FeaturesPage = () => {

  useEffect(() => {
    document.title = "RideMate | Features";
  }, []);
  
  const riderFeatures = [
    {
      icon: MapPin,
      title: "Ride Request Form",
      description: "Simple and intuitive booking experience",
      features: [
        "Pickup and destination fields with autocomplete",
        "Real-time fare estimation based on distance",
        "Multiple payment method selection",
        "Instant driver matching algorithm"
      ]
    },
    {
      icon: Car,
      title: "Live Ride Tracking",
      description: "Stay informed throughout your journey",
      features: [
        "Real-time GPS tracking on interactive map",
        "Driver details with photo and rating",
        "Estimated arrival time updates",
        "Live route optimization for fastest journey"
      ]
    },
    {
      icon: History,
      title: "Ride History",
      description: "Complete journey records at your fingertips",
      features: [
        "Paginated list with advanced search",
        "Filter by date, fare range, and status",
        "Downloadable trip receipts",
        "Rate and review past rides"
      ]
    },
    {
      icon: FileText,
      title: "Ride Details Page",
      description: "Comprehensive trip information",
      features: [
        "Interactive map showing complete route",
        "Detailed timestamps for each ride phase",
        "Driver information and contact details",
        "Status timeline from booking to completion"
      ]
    },
    {
      icon: User,
      title: "Profile Management",
      description: "Manage your account settings easily",
      features: [
        "Edit personal information and preferences",
        "Update phone number for notifications",
        "Secure password change functionality",
        "Emergency contact management"
      ]
    }
  ];

  const driverFeatures = [
    {
      icon: ToggleLeft,
      title: "Availability Control",
      description: "Flexible work schedule management",
      features: [
        "Simple online/offline toggle switch",
        "Automatic status updates based on location",
        "Custom availability scheduling",
        "Break mode for temporary unavailability"
      ]
    },
    {
      icon: PhoneIncoming,
      title: "Incoming Requests",
      description: "Smart ride request management",
      features: [
        "Audio and visual notifications for new rides",
        "Accept or reject with detailed ride information",
        "Automatic request timeout handling",
        "Rider rating and pickup location preview"
      ]
    },
    {
      icon: Play,
      title: "Active Ride Management",
      description: "Streamlined ride status updates",
      features: [
        "One-tap status updates (Accepted → Picked Up → In Transit → Completed)",
        "Quick cancellation with reason selection",
        "In-app communication with riders",
        "Route guidance and navigation integration"
      ]
    },
    {
      icon: BarChart,
      title: "Earnings Dashboard",
      description: "Comprehensive income tracking",
      features: [
        "Visual breakdown with interactive charts",
        "Daily, weekly, and monthly earning reports",
        "Trip count and average fare analytics",
        "Performance metrics and rating trends"
      ]
    },
    {
      icon: Clock,
      title: "Ride History",
      description: "Complete driving record management",
      features: [
        "Paginated list with advanced filtering",
        "Search by rider name, date, or fare amount",
        "Export data for tax and record purposes",
        "Detailed trip analytics and insights"
      ]
    },
    {
      icon: UserCog,
      title: "Profile Management",
      description: "Driver account and vehicle management",
      features: [
        "Vehicle details and documentation upload",
        "Contact information and emergency contacts",
        "Secure password and PIN management",
        "Professional photo and license verification"
      ]
    }
  ];

  const adminFeatures = [
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user administration",
      features: [
        "Advanced search and filtering capabilities",
        "Block/unblock riders with reason tracking",
        "Driver approval and suspension workflow",
        "Bulk actions for efficient management"
      ]
    },
    {
      icon: Eye,
      title: "Ride Oversight",
      description: "Complete ride monitoring and control",
      features: [
        "View all rides with real-time status updates",
        "Advanced filtering by date, status, driver, or rider",
        "Ride intervention and dispute resolution",
        "Emergency response and safety monitoring"
      ]
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Data-driven insights and reporting",
      features: [
        "Interactive data visualizations and charts",
        "Ride volume and revenue trend analysis",
        "Driver activity and performance metrics",
        "Custom report generation and export"
      ]
    },
    {
      icon: Search,
      title: "Search & Filter Tools",
      description: "Powerful data discovery tools",
      features: [
        "Consistent search interface across all pages",
        "Advanced filtering with multiple criteria",
        "Saved search queries and quick filters",
        "Real-time search results with pagination"
      ]
    },
    {
      icon: Settings,
      title: "Profile Management",
      description: "Administrative account management",
      features: [
        "Personal profile updates and preferences",
        "Role-based access control management",
        "Secure password and authentication settings",
        "System configuration and maintenance tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 md:py-24 lg:py-32 bg-gradient-to-br from-primary via-yellow-500 to-primary overflow-hidden">
        {/* Animated Background Layer */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-[10%] w-3 h-3 bg-white/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute top-32 right-[15%] w-4 h-4 bg-white/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-40 left-[20%] w-3 h-3 bg-white/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-20 right-[25%] w-4 h-4 bg-white/25 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-[30%] w-2 h-2 bg-white/35 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
              {/* Badge with animation */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-black/20 border border-white/30 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <p className="text-white text-xs sm:text-sm font-bold tracking-wide uppercase">
                  Platform Features
                </p>
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" style={{ animationDelay: "0.5s" }} />
              </div>

              {/* Enhanced Title with Gradient */}
              <h1 className="text-3xl sm:text-4xl md:text-[50px] lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
                <span className="block text-white">
                  Powerful Features
                </span>
                <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                  For Everyone
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover comprehensive capabilities designed for riders, drivers, and administrators.
                Experience seamless ride-sharing with advanced features and intuitive controls.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  variant="secondary"
                  size="lg"
                  className="group relative text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold overflow-hidden bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Rider Features
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group relative text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold border-2 border-white/80 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Driver Dashboard
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Button>
              </div>

              {/* Decorative accent line */}
              <div className="relative mt-8 w-32 h-1 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full blur-sm animate-pulse" />
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="relative group animate-[float_3s_ease-in-out_infinite] order-1 lg:order-2">
              {/* Decorative glow behind image */}
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-3xl group-hover:bg-white/20 transition-colors duration-500" />

              {/* Decorative frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl rotate-2 group-hover:rotate-3 transition-transform duration-500" />

              <div className="relative">
                <img
                  src={heroImage}
                  alt="Ride sharing app features"
                  className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-500"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </section>

      {/* Rider Features */}
      <RoleSection
        title="Rider Features"
        description="Everything riders need for a seamless, safe, and convenient journey experience"
        features={riderFeatures}
        images={[riderImage, riderImage, riderImage]}
        imageAlt="Rider app interface showing booking and tracking features"
      />

      {/* Driver Features */}
      <RoleSection
        title="Driver Features"
        description="Powerful tools for drivers to manage rides, track earnings, and optimize their driving experience"
        features={driverFeatures}
        images={[driverImage, driverImage, driverImage]}
        imageAlt="Driver dashboard showing earnings and ride management"
      // reverse={true}
      />

      {/* Admin Features */}
      <RoleSection
        title="Admin Features"
        description="Comprehensive administrative tools for managing users, monitoring rides, and analyzing platform performance"
        features={adminFeatures}
        images={[adminImage, driverImage, driverImage]}
        imageAlt="Admin dashboard with analytics and user management"
      />

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-feature-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-8">
              Join thousands of satisfied users who trust our platform for their daily transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 sm:px-12 py-4 sm:py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;