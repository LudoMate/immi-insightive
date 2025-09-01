import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { 
      fullName, 
      email, 
      mobile, 
      password, 
      companyName, 
      businessEmail, 
      contactNumber, 
      accountType 
    } = body

    // TODO: Add your actual signup logic here
    // This is a placeholder response
    return NextResponse.json(
      { message: "Account created successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
