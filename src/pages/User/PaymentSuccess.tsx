import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

export default function PaymentSuccess() {
  
  useEffect(() => {
    document.title = "RideMate | Payment Success";
  }, []);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const transactionId = queryParams.get("transactionId");
  const message = queryParams.get("message");
  const amount = queryParams.get("amount");
  const status = queryParams.get("status");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background transition-colors duration-300">
      <Card className="rounded-2xl shadow-xl p-8 w-full max-w-md text-center transition-colors duration-300">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="text-green-500 w-16 h-16" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Payment {status === "success" ? "Successful!" : "Status"}
        </h1>
        <p className="text-muted-foreground mb-6">{message}</p>

        {/* Details Card */}
        <div className="bg-muted rounded-xl p-4 text-left space-y-2 mb-6 transition-colors duration-300">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Transaction ID:</span>{" "}
            {transactionId}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Amount Paid:</span> ৳
            {amount}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded-md text-xs font-semibold ${status === "success"
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                }`}
            >
              {status}
            </span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors duration-300"
          >
            Back to Home
          </Link>
          <Link
            to="/user"
            className="w-full border border-green-500 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-300 dark:hover:bg-gray-700 py-2 rounded-lg transition-colors duration-300"
          >
            Go to Dashboard
          </Link>
        </div>
      </Card>
    </div>
  );
}
