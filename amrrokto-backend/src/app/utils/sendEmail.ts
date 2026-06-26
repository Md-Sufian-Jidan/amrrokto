import nodemailer from "nodemailer";
import { env } from "../config/env";
import AppError from "../errors/AppError";
import status from "http-status";

const transporter = nodemailer.createTransport({
  host: env.EMAIL_SENDER.SMTP_HOST,
  secure: true,
  auth: {
    user: env.EMAIL_SENDER.SMTP_USER,
    pass: env.EMAIL_SENDER.SMTP_PASS
  },
  port: Number(env.EMAIL_SENDER.SMTP_PORT)
});

export interface ISendEmail {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: ISendEmail) => {
  try {
    await transporter.sendMail({
      from: `"AmrRokto" <${env.EMAIL_SENDER.SMTP_FROM}>`,
      to,
      subject,
      html,
    });
  } catch (error: any) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, error.message || "Failed to send email");
  }
};