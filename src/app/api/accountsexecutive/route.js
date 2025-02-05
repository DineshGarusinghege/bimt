

import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse form data
    const formData = await req.formData();
    const file = formData.get("file");
    const firstName = formData.get("name"); // Ensure this matches the frontend
    const email = formData.get("email");
    const comment = formData.get("message");

    // Use /tmp/ directory for file storage on Vercel
    let filePath = null;

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      filePath = path.join("/tmp", file.name);

      // Save the file in a temporary directory
      await fs.writeFile(filePath, buffer);
    }

    // Configure nodemailer transporter (Use environment variables!)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'ictdinesh.se@gmail.com', 
        pass: 'yalt issu sayt ckgz', 
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ictdinesh.se@gmail.com",
      subject: "Accounts Executive (Female)",
      html: `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${comment}</p>
      `,
      attachments: filePath
        ? [
            {
              filename: file.name,
              path: filePath,
            },
          ]
        : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: "Form submitted and email sent successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return new Response(
      JSON.stringify({ message: "Failed to process the form.", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}


// import { promises as fs } from "fs";
// import path from "path";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file");
//     const firstName = formData.get("firstName");
//     const email = formData.get("email");
//     const comment = formData.get("message");

//     // Create tmp directory if not exists
//     const uploadDir = path.join(process.cwd(), "public/uploads");
//     await fs.mkdir(uploadDir, { recursive: true });

//     let filePath = null;

//     if (file) {
//       // Read file buffer
//       const bytes = await file.arrayBuffer();
//       const buffer = Buffer.from(bytes);
//       filePath = path.join(uploadDir, file.name);

//       // Save the file
//       await fs.writeFile(filePath, buffer);
//     }

//     // Configure transporter for Gmail
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: 'ictdinesh.se@gmail.com', 
//         pass: 'yalt issu sayt ckgz', 
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: process.env.EMAIL_USER, // Use environment variables for security
//       to: "ictdinesh.se@gmail.com",
//       subject: "Accounts Executive (Female)",
//       html: `
//         <p><strong>First Name:</strong> ${firstName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${comment}</p>
//       `,
//       attachments: filePath
//         ? [
//             {
//               filename: file.name,
//               path: filePath, // Attach the uploaded file
//             },
//           ]
//         : [],
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return new Response(
//       JSON.stringify({
//         message: "Form submitted and email sent successfully!",
//       }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error processing form:", error);
//     return new Response(
//       JSON.stringify({ message: "Failed to process the form." }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }


