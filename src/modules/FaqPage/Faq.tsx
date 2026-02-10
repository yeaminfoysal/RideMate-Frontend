// src/pages/FaqPage.tsx

import { useState, type JSX } from "react";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    Car,
    User,
    Wrench,
    Shield,
    LayoutDashboard,
    Search,
} from "lucide-react";
import { Link } from "react-router";

type FAQ = {
    question: string;
    answer: string;
};

type FAQSection = {
    title: string;
    icon: JSX.Element;
    faqs: FAQ[];
};

const faqData: FAQSection[] = [
    {
        title: "Rider FAQs",
        icon: <Car className="w-5 h-5 text-yellow-500" />,
        faqs: [
            {
                question: "How do I request a ride?",
                answer:
                    "Open the ride request form, enter pickup and destination, and confirm your request.",
            },
            {
                question: "Can I schedule a ride in advance?",
                answer:
                    "Currently, advance scheduling is not available. You can only book instant rides.",
            },
            {
                question: "How do I estimate my fare before booking?",
                answer:
                    "Fare is estimated automatically based on distance, time, and demand.",
            },
            {
                question: "What payment methods are accepted?",
                answer:
                    "We accept credit/debit cards, mobile payments, and cash (if enabled).",
            },
            {
                question: "Can I edit or cancel a ride after booking?",
                answer:
                    "Yes, you can cancel or edit before the driver arrives. Cancellation fees may apply.",
            },
        ],
    },
    {
        title: "Driver FAQs",
        icon: <User className="w-5 h-5 text-blue-500" />,
        faqs: [
            {
                question: "How do I go online/offline as a driver?",
                answer: "Use the Online/Offline toggle in your driver dashboard.",
            },
            {
                question: "How do I accept or reject ride requests?",
                answer:
                    "Incoming requests will show on your app with Accept/Reject options.",
            },
            {
                question: "How are driver earnings calculated?",
                answer:
                    "Earnings are based on completed trips minus service fees, visible in your dashboard.",
            },
            {
                question: "Can I see my daily/weekly/monthly earnings?",
                answer:
                    "Yes, you can view earning breakdowns in your driver dashboard.",
            },
            {
                question: "How do I update my vehicle details?",
                answer: "Go to Profile → Vehicle Details to update your information.",
            },
        ],
    },
    {
        title: "Ride & Trip Support",
        icon: <Wrench className="w-5 h-5 text-green-500" />,
        faqs: [
            {
                question: "What happens if my driver doesn't arrive?",
                answer:
                    "You can cancel the ride and request another driver without charges.",
            },
            {
                question: "How can I track my ride in real time?",
                answer: "Rides can be tracked on the live map in the app.",
            },
            {
                question: "What if the vehicle breaks down during the trip?",
                answer:
                    "Contact support or request another ride from your app immediately.",
            },
            {
                question: "What should I do if I left something in the vehicle?",
                answer:
                    "Use the Contact Driver option in your ride history page.",
            },
        ],
    },
    {
        title: "Admin & Account Management",
        icon: <LayoutDashboard className="w-5 h-5 text-purple-500" />,
        faqs: [
            {
                question: "How can admins block or unblock users?",
                answer:
                    "Admins can manage users in the User Management section.",
            },
            {
                question: "What analytics are available for admins?",
                answer:
                    "Admins have access to ride, revenue, and driver activity analytics.",
            },
            {
                question: "How do I update my profile and change my password?",
                answer: "Go to Profile → Settings to edit your account details.",
            },
            {
                question: "How do I report an issue to support?",
                answer: "Use the Support → Contact form in your admin panel.",
            },
        ],
    },
    {
        title: "Safety & Security",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        faqs: [
            {
                question: "How is my personal information protected?",
                answer:
                    "We use encryption and secure servers to protect your data.",
            },
            {
                question: "Are drivers verified before approval?",
                answer:
                    "Yes, drivers go through ID verification and approval before activation.",
            },
            {
                question: "What safety measures are in place during rides?",
                answer:
                    "You can share your live ride with family, and emergency support is available.",
            },
            {
                question: "How do I report inappropriate behavior?",
                answer:
                    "Go to Ride History → Report Issue for any trip.",
            },
        ],
    },
];

export default function Faq() {
    const [search, setSearch] = useState("");

    const filteredSections = faqData.map((section) => ({
        ...section,
        faqs: section.faqs.filter((faq) =>
            faq.question.toLowerCase().includes(search.toLowerCase())
        ),
    }));

    return (
        <div className="relative overflow-hidden mx-auto py-12 sm:py-16 md:py-20 px-4 my-10 sm:my-16 md:my-20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />

                {/* Floating Particles */}
                <div className="absolute top-32 left-[15%] w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
                <div className="absolute top-48 right-[20%] w-3 h-3 bg-yellow-500/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
                <div className="absolute bottom-40 left-[25%] w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2.5s" }} />
                <div className="absolute bottom-56 right-[30%] w-3 h-3 bg-yellow-400/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
            </div>

            {/* Header */}
            <div className="text-center mb-10 sm:mb-12 relative z-10 animate-fade-in">
                {/* Enhanced Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-primary text-sm font-bold tracking-wide uppercase">FAQ</span>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>

                {/* Gradient Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-black mb-3">
                    <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent inline-block">
                        Frequently Asked Questions
                    </span>
                    <span className="text-primary">.</span>
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground mt-3 px-2 max-w-2xl mx-auto">
                    Find answers to common questions about our ride-sharing services.
                </p>

                {/* Decorative Line */}
                <div className="relative w-32 h-1 mx-auto mt-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full blur-sm animate-pulse" />
                </div>
            </div>

            {/* Enhanced Search */}
            <div className="relative max-w-md mx-auto mb-10 sm:mb-12 px-2 z-10 group animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-yellow-500/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                <div className="relative flex items-center gap-3 bg-background border-2 border-primary/10 hover:border-primary/30 rounded-lg px-4 py-3 transition-all duration-300">
                    <Search className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <Input
                        placeholder="Search questions..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                    />
                </div>
            </div>

            {/* Enhanced FAQ Sections */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 relative z-10">
                {filteredSections.map((section, idx) => (
                    <div
                        key={idx}
                        className="group relative p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-primary/10 hover:border-primary/30 bg-background transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in"
                        style={{ animationDelay: `${idx * 50}ms` }}
                    >
                        {/* Glowing Border Effect */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-yellow-500 to-primary opacity-20 blur-md animate-gradient-xy" />
                        </div>

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Section Header */}
                        <div className="relative flex items-center gap-3 mb-4">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative p-2 rounded-lg bg-gradient-to-br from-primary/10 to-yellow-500/10">
                                    {section.icon}
                                </div>
                            </div>
                            <h3 className="relative font-bold text-base sm:text-lg group-hover:text-primary transition-colors duration-300">
                                {section.title}
                            </h3>
                        </div>

                        {/* Accordion */}
                        <Accordion type="single" collapsible className="relative w-full">
                            {section.faqs.length > 0 ? (
                                section.faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`item-${idx}-${i}`} className="border-b border-primary/10">
                                        <AccordionTrigger className="text-sm sm:text-base text-left hover:text-primary transition-colors duration-300">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))
                            ) : (
                                <p className="text-sm text-muted-foreground py-4">
                                    No results found.
                                </p>
                            )}
                        </Accordion>
                    </div>
                ))}
            </div>

            {/* Enhanced Contact Support Section */}
            <div className="relative group mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 bg-gradient-to-br from-background via-background to-primary/5 rounded-xl sm:rounded-2xl text-center border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl overflow-hidden z-10 animate-fade-in" style={{ animationDelay: "250ms" }}>
                {/* Glowing Border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-yellow-500 to-primary opacity-20 blur-md" />
                </div>

                <div className="relative">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                        Still Have Questions?
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-5 px-2">
                        Can't find the answer you're looking for? Please chat with our support team.
                    </p>
                    <Link to="/contact">
                        <Button className="bg-primary hover:bg-yellow-600 text-foreground rounded-full text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            💬 Contact Support
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
    );
}
