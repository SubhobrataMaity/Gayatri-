import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const name: string = (body?.name || '').toString().trim();
		const email: string = (body?.email || '').toString().trim();
		const message: string = (body?.message || '').toString().trim();

		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
		}

		const smtpHost = process.env.SMTP_HOST;
		const smtpPort = Number(process.env.SMTP_PORT || 587);
		const smtpUser = process.env.SMTP_USER;
		const smtpPass = process.env.SMTP_PASS;
		const toAddress = process.env.CONTACT_TO || process.env.SMTP_USER;

		if (!smtpHost || !smtpUser || !smtpPass) {
			return NextResponse.json({ error: 'Email is not configured on the server' }, { status: 500 });
		}

		const nodemailer = await import('nodemailer');
		const transporter = nodemailer.createTransport({
			host: smtpHost,
			port: smtpPort,
			secure: smtpPort === 465,
			auth: { user: smtpUser, pass: smtpPass },
		});

		const subject = `New portfolio contact from ${name}`;
		const text = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');
		const html = `
			<div>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<hr />
				<p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
			</div>
		`;

		await transporter.sendMail({
			from: `Portfolio Contact <${smtpUser}>`,
			to: toAddress,
			replyTo: email,
			subject,
			text,
			html,
		});

		return NextResponse.json({ ok: true });
	} catch (error) {
		return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
	}
}

function escapeHtml(input: string) {
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}


