/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
    useGetAllDriversQuery,
    useSetDriverApprovalStatusMutation,
} from "@/redux/features/driver/driverApi";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function DriverManagement() {
    const [search, setSearch] = useState("");
    const [approvalStatus, setApprovalStatus] = useState<string | undefined>();
    const [isOnline, setIsOnline] = useState<boolean | undefined>();

    const { data, isLoading } = useGetAllDriversQuery({
        searchTerm: search || undefined,
        approvalStatus,
        isOnline,
    });

    const [setDriverApprovalStatus] = useSetDriverApprovalStatusMutation();

    const handleDriverStatus = async (
        id: string,
        approvalStatus: "approved" | "suspended"
    ) => {
        try {
            await setDriverApprovalStatus({ id, approvalStatus }).unwrap();
            toast.success(`Driver ${approvalStatus}`);
        } catch {
            toast.error("Failed to update driver status");
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Card>
                <CardHeader>
                    <CardTitle>Driver Management</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Filters */}
                    <div className="flex gap-4 mb-4">
                        <Input
                            placeholder="Search drivers..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <Select
                            onValueChange={(v) =>
                                setApprovalStatus(v === "all" ? undefined : v)
                            }
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Approval Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                                <SelectItem value="suspended">Suspended</SelectItem>
                                <SelectItem value="none">None</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select
                            onValueChange={(v) =>
                                setIsOnline(v === "all" ? undefined : v === "true")
                            }
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Online Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="true">Online</SelectItem>
                                <SelectItem value="false">Offline</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Table */}
                    {isLoading ? (
                        <div className="flex justify-center py-10">
                            <Loader2 className="animate-spin w-6 h-6" />
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full border rounded-lg">
                                <thead className="bg-gray-100 dark:bg-gray-800">
                                    <tr>
                                        <th className="p-2 text-left">Name</th>
                                        <th className="p-2 text-left">Email</th>
                                        <th className="p-2 text-left">License Number</th>
                                        <th className="p-2 text-left">Approval</th>
                                        <th className="p-2 text-left">Online</th>
                                        <th className="p-2 text-left">Earnings</th>
                                        <th className="p-2 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data?.map((driver: any) => (
                                        <tr key={driver._id} className="border-b">
                                            <td className="p-2">{driver.user?.name}</td>
                                            <td className="p-2">{driver.user?.email}</td>
                                            <td className="p-2">{driver.licenseNumber || "-"}</td>
                                            <td className="p-2 capitalize">
                                                {driver.approvalStatus}
                                            </td>
                                            <td className="p-2">
                                                {driver.isOnline ? (
                                                    <span className="text-green-600">Online</span>
                                                ) : (
                                                    <span className="text-gray-500">Offline</span>
                                                )}
                                            </td>
                                            <td className="p-2">${driver.totalEarnings || 0}</td>
                                            <td className="p-2 flex gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() =>
                                                        handleDriverStatus(driver._id, "approved")
                                                    }
                                                    disabled={driver.approvalStatus === "approved"}
                                                >
                                                    Approve
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    onClick={() =>
                                                        handleDriverStatus(driver._id, "suspended")
                                                    }
                                                    disabled={driver.approvalStatus === "suspended"}
                                                >
                                                    Suspend
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
