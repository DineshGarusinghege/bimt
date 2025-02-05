import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // Disable body parser for file uploads
  },
};

export async function POST(req) {
  try {
    console.log("🟢 Request received");

    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      console.log("ℹ️ Creating upload directory...");
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB limit
    });

    return new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error("❌ File upload error:", err);
          return resolve(new Response(JSON.stringify({ message: "File upload failed." }), { status: 500 }));
        }

        console.log("✅ Form parsed successfully:", { fields, files });

        const { name, email, message } = fields;
        const file = files.file ? files.file[0] : null;

        try {
          console.log("📧 Preparing to send email...");

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'ictdinesh.se@gmail.com', 
                pass: 'yalt issu sayt ckgz', 
            },
          });

          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "ictdinesh.se@gmail.com",
            subject: "New Contact Form Submission",
            html: `
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
            `,
            attachments: file
              ? [{ filename: file.originalFilename, path: file.filepath }]
              : [],
          };

          await transporter.sendMail(mailOptions);
          console.log("✅ Email sent successfully!");

          resolve(new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 }));
        } catch (emailError) {
          console.error("❌ Email error:", emailError);
          resolve(new Response(JSON.stringify({ message: "Failed to send email." }), { status: 500 }));
        }
      });
    });

  } catch (error) {
    console.error("❌ Server error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}
