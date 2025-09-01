// This is a mock authentication service
// In a real application, you would use a proper authentication system

export type User = {
  id: string
  name: string
  email: string
  mobile?: string
  familyMembers?: number
}

// Mock user data
const USERS: User[] = [
  {
    id: "1",
    name: "Francois Mercer",
    email: "xyz@gmail.com",
    mobile: "+91 9097832964",
    familyMembers: 4,
  },
]

export const login = async (emailOrMobile: string, password?: string): Promise<User | null> => {
  // In a real app, you would validate credentials against a database
  const user = USERS.find((u) => u.email === emailOrMobile || u.mobile === emailOrMobile)
  return user || null
}

export const loginWithOtp = async (emailOrMobile: string): Promise<boolean> => {
  // In a real app, you would send an OTP to the user's email or mobile
  const user = USERS.find((u) => u.email === emailOrMobile || u.mobile === emailOrMobile)
  return !!user
}

export const verifyOtp = async (emailOrMobile: string, otp: string): Promise<User | null> => {
  // In a real app, you would verify the OTP
  // For this mock, we'll just check if the user exists
  const user = USERS.find((u) => u.email === emailOrMobile || u.mobile === emailOrMobile)
  return user || null
}

export const register = async (name: string, email: string, mobile: string): Promise<User> => {
  // In a real app, you would create a new user in the database
  const newUser: User = {
    id: String(USERS.length + 1),
    name,
    email,
    mobile,
  }

  USERS.push(newUser)
  return newUser
}

export const updateProfile = async (userId: string, data: Partial<User>): Promise<User | null> => {
  // In a real app, you would update the user in the database
  const userIndex = USERS.findIndex((u) => u.id === userId)
  if (userIndex === -1) return null

  USERS[userIndex] = { ...USERS[userIndex], ...data }
  return USERS[userIndex]
}

export const resetPassword = async (email: string): Promise<boolean> => {
  // In a real app, you would send a password reset link to the user's email
  const user = USERS.find((u) => u.email === email)
  return !!user
}
