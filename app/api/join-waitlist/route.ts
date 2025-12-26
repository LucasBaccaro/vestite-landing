import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
        return NextResponse.json(
            { error: 'Supabase credentials not configured' },
            { status: 500 }
        )
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    try {
        const { email } = await request.json()

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        const { error } = await supabase
            .from('waitlist')
            .insert([{ email, created_at: new Date().toISOString() }])

        if (error) {
            // If email already exists (unique constraint violation), execute gracefully
            if (error.code === '23505') {
                return NextResponse.json({ success: true, message: 'Already joined' })
            }
            throw error
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error adding to waitlist:', error)
        return NextResponse.json(
            { error: 'Failed to add to waitlist' },
            { status: 500 }
        )
    }
}
