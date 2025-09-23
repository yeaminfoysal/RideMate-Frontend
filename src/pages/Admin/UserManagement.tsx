/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useBlockUserMutation,
  useGetAllUsersQuery,
  useUnblockUserMutation,
} from "@/redux/features/user/userApi";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function UserManagement() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState<string | undefined>();
  const [isBlocked, setIsBlocked] = useState<boolean | undefined>();

  const { data, isLoading } = useGetAllUsersQuery({
    searchTerm: search || undefined,
    isBlocked,
    role,
  });

  const [blockUser] = useBlockUserMutation();
  const [unblockUser] = useUnblockUserMutation();

  const handleBlock = async (id: string) => {
    try {
      await blockUser(id).unwrap();
      toast.success("User blocked successfully");
    } catch {
      toast.error("Failed to block user");
    }
  };

  const handleUnblock = async (id: string) => {
    try {
      await unblockUser(id).unwrap();
      toast.success("User unblocked successfully");
    } catch {
      toast.error("Failed to unblock user");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-wrap sm:flex-nowrap  gap-4 mb-4">
            <Input
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Select onValueChange={(v) => setRole(v === "all" ? undefined : v)}>
              <SelectTrigger className="w-[130px] sm:w-[150px]">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="USER">Rider</SelectItem>
                <SelectItem value="DRIVER">Driver</SelectItem>
              </SelectContent>
            </Select>

            <Select
              onValueChange={(v) =>
                setIsBlocked(v === "all" ? undefined : v === "true")
              }
            >
              <SelectTrigger className="w-[130px] sm:w-[150px]">
                <SelectValue placeholder="Blocked/Unblocked" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="true">Blocked</SelectItem>
                <SelectItem value="false">Unblocked</SelectItem>
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
                    <th className="p-2 text-left">Role</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((user: any) => (
                    <tr key={user._id} className="border-b">
                      <td className="p-2">{user.name}</td>
                      <td className="p-2">{user.email}</td>
                      <td className="p-2 capitalize">{user.role}</td>
                      <td className="p-2">
                        {user.isBlocked ? (
                          <span className="text-red-500">Blocked</span>
                        ) : (
                          <span className="text-green-600">Active</span>
                        )}
                      </td>
                      <td className="p-2 flex gap-2">
                        {user.isBlocked ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUnblock(user._id)}
                          >
                            Unblock
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleBlock(user._id)}
                          >
                            Block
                          </Button>
                        )}
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
