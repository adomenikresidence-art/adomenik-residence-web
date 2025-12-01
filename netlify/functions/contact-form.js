// netlify/functions/contact-form.js
const { Resend } = require("resend")

const resend = new Resend(process.env.RESEND_API_KEY)

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    }
  }

  try {
    const body = JSON.parse(event.body || "{}")
    const { name, email, phone, inquiryType, message } = body

    if (!name || !email || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      }
    }

    const inquiryLabelMap = {
      general: "General Inquiry",
      viewing: "Schedule Viewing",
      investment: "Investment Opportunity",
      sales: "Sales Question",
      relocation: "Relocation to Cyprus",
      other: "Other",
    }

    const inquiryLabel = inquiryLabelMap[inquiryType] || "General Inquiry"

    const subject = `New Contact Form Submission – ${inquiryLabel} – DomeNik Residence`
    const toEmail = process.env.NOTIFICATION_EMAIL || "yourname@gmail.com"
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Contact <no-reply@adomenikresidence.com>"

    const html = `
      <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif; line-height:1.5; color:#0f172a;">
        <h2 style="margin:0 0 12px 0;">New Contact Form Submission</h2>
        <p style="margin:0 0 16px 0; color:#6b7280;">DomeNik Residence – Zakaki, Limassol</p>

        <table style="border-collapse:collapse; width:100%; max-width:600px; margin-bottom:16px;">
          <tbody>
            <tr>
              <td style="padding:8px; font-weight:600; width:140px; border-bottom:1px solid #e5e7eb;">Name</td>
              <td style="padding:8px; border-bottom:1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:600; border-bottom:1px solid #e5e7eb;">Email</td>
              <td style="padding:8px; border-bottom:1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:600; border-bottom:1px solid #e5e7eb;">Phone</td>
              <td style="padding:8px; border-bottom:1px solid #e5e7eb;">${phone}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:600; border-bottom:1px solid #e5e7eb;">Inquiry Type</td>
              <td style="padding:8px; border-bottom:1px solid #e5e7eb;">${inquiryLabel}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top:16px;">
          <p style="margin:0 0 8px 0; font-weight:600;">Message</p>
          <div style="padding:12px; border-radius:8px; background:#f9fafb; border:1px solid #e5e7eb; white-space:pre-wrap;">
            ${message}
          </div>
        </div>

        <p style="margin-top:24px; font-size:12px; color:#9ca3af;">
          This email was sent from the contact form on <strong>adomenikresidence.com</strong>.
        </p>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      html,
      reply_to: email, // so you can reply directly to the lead
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to send email" }),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: data?.id }),
    }
  } catch (err) {
    console.error("Contact form handler error:", err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    }
  }
}
