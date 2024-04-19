import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerficationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
) : Promise<ApiResponse>{
    try {
        const data = await resend.emails.send({
            from: 'INCOGMEMOS <onboarding@resend.dev>',
            to: [email],
            subject: 'IncogMemos | Verification Code',
            react: VerificationEmail({username: username, otp: verifyCode})
          });


        return {success: true, message:"Verification email sent successfully"}
    } catch (emailError) {
        console.error("Error sending verification email", emailError)
        return {success: false, message:"Failed to send verification email"}
    }
}
