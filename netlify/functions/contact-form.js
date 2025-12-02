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
      general: "Penthouse Suite",
      viewing: "Rooftop Suite",
      other: "Other",
    }

    const inquiryLabel = inquiryLabelMap[inquiryType] || "Other"

    const adminTo = process.env.NOTIFICATION_EMAIL
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Contact <no-reply@a-domenik-residence.com>"

    // 1) Email to admin
    const adminHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5;color:#0f172a;">
        <h2 style="margin:0 0 12px 0;">New Contact Form Submission</h2>
        <p style="margin:0 0 16px 0;color:#6b7280;">A. DomeNik Residence – Zakaki, Limassol</p>

        <table style="border-collapse:collapse;width:100%;max-width:600px;margin-bottom:16px;">
          <tbody>
            <tr>
              <td style="padding:8px;font-weight:600;width:160px;border-bottom:1px solid #e5e7eb;">Name</td>
              <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px;font-weight:600;border-bottom:1px solid #e5e7eb;">Email</td>
              <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding:8px;font-weight:600;border-bottom:1px solid #e5e7eb;">Phone</td>
              <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${phone}</td>
            </tr>
            <tr>
              <td style="padding:8px;font-weight:600;border-bottom:1px solid #e5e7eb;">Inquiry</td>
              <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${inquiryLabel}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top:16px;">
          <p style="margin:0 0 8px 0;font-weight:600;">Message</p>
          <div style="padding:12px;border-radius:8px;background:#f9fafb;border:1px solid #e5e7eb;white-space:pre-wrap;">
            ${message}
          </div>
        </div>

        <p style="margin-top:24px;font-size:12px;color:#9ca3af;">
          This email was sent from the contact form on <strong>a-domenik-residence.com</strong>.
        </p>
      </div>
    `

    const adminSubject = `New ${inquiryLabel} inquiry – A. DomeNik Residence`

    // 2) Confirmation email to user
    const userHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5;color:#0f172a;">
        <h2 style="margin:0 0 12px 0;">Thank you for contacting A. DomeNik Residence</h2>
        <p style="margin:0 0 16px 0;color:#6b7280;">
          Dear ${name || "Guest"},
        </p>
        <p style="margin:0 0 12px 0;">
          We have received your message regarding <strong>${inquiryLabel}</strong> and a member of our Zakaki, Limassol sales team will reply as soon as possible.
        </p>
        <p style="margin:0 0 12px 0;">
          For your reference, here is a copy of what you sent us:
        </p>
        <div style="padding:12px;border-radius:8px;background:#f9fafb;border:1px solid #e5e7eb;white-space:pre-wrap;margin-bottom:16px;">
          ${message}
        </div>
        <p style="margin:0 0 12px 0;">
          If you need to add anything else, you can send us an email on adomenikresidence@gmail.com.
        </p>
        <p style="margin-top:24px;font-size:12px;color:#9ca3af;">
          A. DomeNik Residence – Zakaki, Limassol, Cyprus
        </p>
      </div>
    `

    const userSubject = "We’ve received your inquiry – DomeNik Residence"

    // Send both emails (admin + user)
    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: [adminTo],
        subject: adminSubject,
        html: adminHtml,
        reply_to: email,
      }),
      resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: userSubject,
        html: userHtml,
      }),
    ]) // Resend supports array of recipients per send and multiple sends via its API.[web:373][web:372][web:459]

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    }
  } catch (err) {
    console.error("Contact form handler error:", err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    }
  }

}
