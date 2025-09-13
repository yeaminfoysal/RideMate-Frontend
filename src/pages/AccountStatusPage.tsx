import { Ban, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
// import Link from "next/link";

export default function AccountStatusPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-lg w-full rounded-2xl shadow-xl border bg-card p-8 text-center space-y-6">
        
        {/* Icon */}
        <div className="flex justify-center">
          <div className="p-6 bg-destructive/10 rounded-full">
            <Ban className="h-16 w-16 text-destructive" />
          </div>
        </div>

        {/* Status */}
        <h1 className="text-3xl font-bold text-foreground">Account Suspended</h1>
        <p className="text-muted-foreground">
          Your account has been <span className="font-semibold">temporarily suspended</span>.  
          You cannot access your dashboard until this issue is resolved.
        </p>

        {/* Instructions */}
        <div className="space-y-2 text-left">
          <h2 className="font-semibold text-foreground">What you can do:</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Review your recent activities for compliance.</li>
            <li>Contact support to understand the reason for suspension.</li>
            <li>Follow the instructions provided by our support team.</li>
          </ul>
        </div>

        {/* Contact Options */}
        <div className="flex flex-col gap-3">
          <Button asChild variant="default" className="flex items-center gap-2">
            <Link to="/contact">
              <Mail className="h-4 w-4" />
              Email Support
            </Link>
          </Button>

          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link to="/contact">
              <Phone className="h-4 w-4" />
              Call Support
            </Link>
          </Button>
        </div>

        {/* Back to Home */}
        <Button asChild variant="ghost">
          <Link to="/">← Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
