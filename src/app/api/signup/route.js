// import connection from '@/lib/db';
import connection from '../../../../lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    const { email, password, name } = await req.json();

    // Check if all required fields are provided
    if (!email || !password || !name) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // Check if the email already exists
    try {
        const [rows] = await connection.promise().query(
            'SELECT email FROM users WHERE email = ?',
            [email]
        );

        if (rows.length > 0) {
            return new Response(JSON.stringify({ error: 'Email already exists' }), {
                status: 409,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Database query error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // Hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    // Insert into DB
    try {
        await connection.promise().query(
            'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
            [email, hashedPass, name]
        );
        return new Response(JSON.stringify({ message: 'User created successfully' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error creating user' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}