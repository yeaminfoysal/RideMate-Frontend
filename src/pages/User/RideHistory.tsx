/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CalendarIcon, MapPin, Wallet, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Slider } from "@/components/ui/slider";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

// ✅ API Hook
import { useGetMyRideHistoryQuery } from "@/redux/features/ride/rideApi";

export default function RideHistory() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
    const [fareRange, setFareRange] = useState<number[]>([0, 5000]);
    const [page, setPage] = useState(1);
    const pageSize = 3;
    const [createdAt, setCreatedAt] = useState<string | null>(null);

    // ✅ Send undefined if "All" is selected
    const apiStatus = statusFilter === "all" ? undefined : statusFilter;

    // ✅ Fetch rides from API with server-side pagination and filters
    const { data: ridesData, isLoading } = useGetMyRideHistoryQuery({
        searchTerm: search || undefined,
        status: apiStatus,
        requestedAt: createdAt || undefined,
        minFare: fareRange[0],
        maxFare: fareRange[1],
        page,
        limit: pageSize,
    });

    if (isLoading) {
        return <p className="text-center text-muted-foreground">Loading rides...</p>;
    }

    const totalPages = ridesData?.meta?.totalPage || 1;

    return (
        <section className="py-10 container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">🚖 Ride History</h1>

            {/* 🔎 Filters */}
            <div className="flex flex-wrap gap-4 items-center mb-6 w-full mx-auto justify-evenly">

                {/* Search */}
                <div className="relative">
                    <Input
                        placeholder="Search rides..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                        className="w-64 pl-9"
                    />
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>

                {/* Status Filter */}
                <Select
                    value={statusFilter || "all"}
                    onValueChange={(value) => {
                        setStatusFilter(value);
                        setPage(1);
                    }}
                >
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                        <SelectItem value="requested">Requested</SelectItem>
                    </SelectContent>
                </Select>

                {/* CreatedAt Date */}
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-[180px] justify-start text-left font-normal"
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {createdAt ? createdAt : "Select Date"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar
                            mode="single"
                            selected={createdAt ? new Date(createdAt) : undefined}
                            onSelect={(day) => {
                                if (!day) return;
                                // Format as YYYY-MM-DD in local time
                                const yyyy = day.getFullYear();
                                const mm = String(day.getMonth() + 1).padStart(2, "0");
                                const dd = String(day.getDate()).padStart(2, "0");
                                const dateString = `${yyyy}-${mm}-${dd}`;
                                setCreatedAt(dateString);
                                setPage(1);
                            }}

                        />
                    </PopoverContent>
                </Popover>

                {/* Fare Range */}
                <div className="flex flex-col gap-3">
                    <span className="text-sm text-muted-foreground">
                        Fare: ৳{fareRange[0]} – ৳{fareRange[1]}
                    </span>
                    <Slider
                        min={0}
                        max={5000}
                        step={50}
                        value={fareRange}
                        onValueChange={(value) => {
                            setFareRange(value as [number, number]);
                            setPage(1);
                        }}
                        className="w-72"
                    />
                </div>

            </div>

            {/* 📋 Ride List */}
            <div className="grid gap-6">
                {ridesData?.data?.length > 0 ? (
                    ridesData.data.map((ride: any) => (
                        <Card
                            key={ride._id}
                            className="hover:shadow-lg transition border rounded-lg"
                        >
                            <CardHeader className="flex flex-row justify-between items-center">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-green-500" /> {ride.pickup.address}
                                    <span className="mx-2">→</span>
                                    <MapPin className="h-5 w-5 text-red-500" /> {ride.destination.address}
                                </CardTitle>
                                <Badge
                                    variant={
                                        ride.status === "completed"
                                            ? "default"
                                            : ride.status === "requested"
                                                ? "secondary"
                                                : "destructive"
                                    }
                                >
                                    {ride.status}
                                </Badge>
                            </CardHeader>

                            <CardContent className="grid sm:grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <Wallet className="h-4 w-4 text-yellow-500" />
                                    <span className="font-medium">Fare:</span> ৳{ride.fare}
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarIcon className="h-4 w-4 text-blue-500" />
                                    <span className="font-medium">Date:</span>{" "}
                                    {new Date(ride.requestedAt).toLocaleString()}
                                </div>
                                <div>
                                    <span className="font-medium">Payment:</span> {ride.paymentMethod}
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-muted-foreground">
                        No rides found matching your filters.
                    </p>
                )}
            </div>

            {/* 📄 Pagination */}
            {totalPages > 1 && (
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={() => setPage((p) => Math.max(p - 1, 1))} />
                        </PaginationItem>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink isActive={page === i + 1} onClick={() => setPage(i + 1)}>
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext onClick={() => setPage((p) => Math.min(p + 1, totalPages))} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </section>
    );
}
