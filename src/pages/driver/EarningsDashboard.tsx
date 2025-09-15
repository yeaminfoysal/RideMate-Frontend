// EarningsDashboard.tsx
import { useGetEarningsQuery } from "@/redux/features/driver/driverApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calendar, BarChart3, PieChart } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";

const EarningsDashboard = () => {
    const { data, isLoading, isError } = useGetEarningsQuery(undefined);
    const earnings = data?.data;

    // Loading state
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen ">
                <p className="text-gray-600 dark:text-gray-300 animate-pulse">
                    Loading earnings...
                </p>
            </div>
        );
    }

    // Error state
    if (isError || !earnings) {
        return (
            <div className="flex items-center justify-center min-h-screen ">
                <p className="text-red-600 dark:text-red-400">
                    Failed to load earnings. Please try again.
                </p>
            </div>
        );
    }

    // Prepare chart data
    const dailyData = Object.entries(earnings.daily || {}).map(([date, value]) => ({
        date,
        amount: Number(value), // ✅ cast to number
    }));

    const weeklyData = Object.entries(earnings.weekly || {}).map(([week, value]) => ({
        week,
        amount: Number(value), // ✅ cast to number
    }));

    const monthlyData = Object.entries(earnings.monthly || {}).map(([month, value]) => ({
        month,
        amount: Number(value), // ✅ cast to number
    }));


    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-950 min-h-screen space-y-6">
            {/* Summary Cards */}
            <div className="grid gap-6 md:grid-cols-4">
                <Card className="shadow-lg rounded-2xl">
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle>Total Earnings</CardTitle>
                        <DollarSign className="w-6 h-6 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${earnings.totalEarnings}
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg rounded-2xl">
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle>Today</CardTitle>
                        <Calendar className="w-6 h-6 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${dailyData[dailyData.length - 1]?.amount || 0}
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg rounded-2xl">
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle>This Week</CardTitle>
                        <BarChart3 className="w-6 h-6 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${weeklyData[weeklyData.length - 1]?.amount || 0}
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg rounded-2xl">
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle>This Month</CardTitle>
                        <PieChart className="w-6 h-6 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${monthlyData[monthlyData.length - 1]?.amount || 0}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Daily Earnings Chart */}
                <Card className="shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle>Daily Earnings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={dailyData}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Weekly Earnings Chart */}
                <Card className="shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle>Weekly Earnings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={weeklyData}>
                                <XAxis dataKey="week" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="amount" fill="#6366f1" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Monthly Earnings Chart */}
                <Card className="md:col-span-2 shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle>Monthly Earnings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlyData}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="amount" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default EarningsDashboard;
