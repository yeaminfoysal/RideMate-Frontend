/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useGetAllRidesQuery } from "@/redux/features/ride/rideApi"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts"
import { format, parseISO } from "date-fns"

export default function Analytics() {
    const { data, isLoading } = useGetAllRidesQuery(undefined)

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
            </div>
        )
    }

    const rides = data?.data || []

    // 📊 Prepare Data
    const dailyRevenue = rides.reduce((acc: any, ride: any) => {
        const day = format(parseISO(ride.requestedAt), "yyyy-MM-dd")
        acc[day] = (acc[day] || 0) + (ride.status === "completed" ? ride.fare : 0)
        return acc
    }, {})

    const revenueTrend = Object.entries(dailyRevenue).map(([date, total]) => ({
        date,
        revenue: total,
    }))

    const statusCounts = rides.reduce((acc: any, ride: any) => {
        acc[ride.status] = (acc[ride.status] || 0) + 1
        return acc
    }, {})

    const statusData = Object.entries(statusCounts).map(([status, count]) => ({
        status,
        count,
    }))

    const driverEarnings = rides
        .filter((r: any) => r.driver)
        .reduce((acc: any, ride: any) => {
            const driver = ride.driver?.user?.name || "Unknown"
            acc[driver] = (acc[driver] || 0) + (ride.status === "completed" ? ride.fare : 0)
            return acc
        }, {})

    const driverData = Object.entries(driverEarnings).map(([driver, total]) => ({
        driver,
        earnings: total,
    }))

    const COLORS = ["#4f46e5", "#06b6d4", "#f59e0b", "#ef4444", "#10b981"]

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Revenue Trend */}
            <Card>
                <CardHeader>
                    <CardTitle>Revenue Trends (Daily)</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={revenueTrend}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Ride Status Distribution */}
            <Card>
                <CardHeader>
                    <CardTitle>Ride Volume by Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={statusData}
                                dataKey="count"
                                nameKey="status"
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
                                label
                            >
                                {statusData.map((_, i) => (
                                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Driver Earnings */}
            <Card>
                <CardHeader>
                    <CardTitle>Driver Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={driverData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="driver" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="earnings" fill="#06b6d4" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Ride Count per Day */}
            <Card>
                <CardHeader>
                    <CardTitle>Rides per Day</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart
                            data={Object.entries(
                                rides.reduce((acc: any, ride: any) => {
                                    const day = format(parseISO(ride.requestedAt), "yyyy-MM-dd")
                                    acc[day] = (acc[day] || 0) + 1
                                    return acc
                                }, {})
                            ).map(([date, count]) => ({ date, count }))}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#10b981" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}
