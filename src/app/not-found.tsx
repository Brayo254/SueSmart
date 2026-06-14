import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto py-20 text-center">
        <span className="font-heading text-[150px] sm:text-[200px] font-bold text-accent-red leading-none block mb-4">
          404
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-accent-red hover:bg-white hover:text-navy text-white px-8 py-3 text-lg">
            <FiHome className="mr-2" />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}