import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER, // nhận chính mình
            subject: `📩 Liên hệ mới từ ${name}`,
            html: `
        <h3>Thông tin liên hệ:</h3>
        <p><b>Họ tên:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Số điện thoại:</b> ${phone || "Không có"}</p>
        <p><b>Nội dung:</b></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Gửi mail thất bại" }, { status: 500 });
    }
}
