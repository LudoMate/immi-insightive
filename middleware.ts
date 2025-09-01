import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This is a simplified middleware for demonstration purposes
// In a real application, you would use a proper authentication system
export function middleware(request: NextRequest) {
  // Check if the user is authenticated by looking for a session cookie
  // This is a simplified example - in a real app, you would verify the token
  const isAuthenticated = request.cookies.has("auth_session")

  // Define protected routes that require authentication
  const protectedRoutes = ["/dashboard", "/applications", "/profile"]

  // Check if the current path starts with any of the protected routes
  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  // If the route is protected and the user is not authenticated, redirect to login
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url)
    // Add a redirect parameter to return to the original page after login
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/applications/:path*", "/profile/:path*"],
}
