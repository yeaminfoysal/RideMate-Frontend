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

const FeaturesPage = () => {
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
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-[50px] font-bold text-primary-foreground mb-6 leading-tight">
                Powerful Features
                <span className="block text-background">For Everyone</span>
              </h1>
              <p className=" text-primary-foreground/90 mb-8 max-w-2xl">
                Discover comprehensive capabilities designed for riders, drivers, and administrators. 
                Experience seamless ride-sharing with advanced features and intuitive controls.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Explore Rider Features
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-light text-primary-foreground hover:bg-primary-light/20">
                  View Driver Dashboard
                </Button>
              </div>
            </div>
            <div className="relative  animate-[float_3s_ease-in-out_infinite]">
              <img 
                src={heroImage} 
                alt="Ride sharing app features" 
                className="w-full h-auto rounded-2xl shadow-card-hover"
              />
            </div>
          </div>
        </div>
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
      <section className="py-20 bg-feature-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className=" text-muted-foreground mb-8">
              Join thousands of satisfied users who trust our platform for their daily transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className=" px-12 py-6">
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