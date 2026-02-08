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
                question: "What happens if my driver doesn’t arrive?",
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

export default function FaqPage() {
    const [search, setSearch] = useState("");

    const filteredSections = faqData.map((section) => ({
        ...section,
        faqs: section.faqs.filter((faq) =>
            faq.question.toLowerCase().includes(search.toLowerCase())
        ),
    }));

    return (
        <div className="max-w-5xl mx-auto py-8 sm:py-10 md:py-12 px-4 my-10 sm:my-16 md:my-20">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
                <span className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 text-xs px-3 py-1 rounded-full">
                    FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold mt-3 dark:primary">
                    Frequently Asked{" "}
                    <span className="text-primary dark:text-yellow-400">
                        Questions
                    </span>
                </h2>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 px-2">
                    Find answers to common questions about our ride-sharing services.
                </p>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 max-w-md mx-auto mb-8 sm:mb-10 px-2">
                <Search className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                <Input
                    placeholder="Search questions..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="dark:bg-gray-800 dark:primary"
                />
            </div>

            {/* FAQ Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {filteredSections.map((section, idx) => (
                    <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm border bg-white dark:bg-gray-900 dark:border-gray-700"
                    >
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            {section.icon}
                            <h3 className="font-semibold text-sm sm:text-base dark:text-gray-100">
                                {section.title}
                            </h3>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            {section.faqs.length > 0 ? (
                                section.faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`item-${idx}-${i}`}>
                                        <AccordionTrigger className="text-sm sm:text-base text-left dark:text-gray-200">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm dark:text-gray-400">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))
                            ) : (
                                <p className="text-sm text-gray-400 dark:text-gray-500">
                                    No results found.
                                </p>
                            )}
                        </Accordion>
                    </div>
                ))}
            </div>

            {/* Contact Support */}
            <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl text-center">
                <p className="text-base sm:text-lg font-medium dark:primary">
                    Still Have Questions?
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 px-2">
                    Can’t find the answer you’re looking for? Please chat with our
                    support team.
                </p>
                <Button className="bg-yellow-500 hover:bg-primary primary rounded-full text-sm sm:text-base px-4 sm:px-6">
                    <Link to="/contact" >💬 Contact Support</Link>
                </Button>
            </div>
        </div>
    );
}
