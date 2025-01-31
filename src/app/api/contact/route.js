import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { firstName, lastName, phone, email, comment } = await req.json();

        // Configure transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ictdinesh.se@gmail.com', 
                pass: 'yalt issu sayt ckgz', 
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'ictdinesh.se@gmail.com', // Recipient email
            subject: 'New Contact Form Submission',
            html: `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Comment:</strong> ${comment}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
