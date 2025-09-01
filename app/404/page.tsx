"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0B1120] to-[#0B1120]/90">
      <h1 className="text-4xl font-bold mb-4 text-white">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
