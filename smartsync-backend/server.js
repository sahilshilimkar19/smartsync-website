const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'himanshu.shah@synconic.in';

// Security and Optimization Middleware
app.use(helmet()); // Sets robust HTTP headers
app.use(cors());
app.use(express.json({ limit: '10kb' })); // Prevent memory overflow from huge JSON payloads

// Rate Limiting to prevent DDoS or spamming the contact form
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 requests per windowMs
    message: { success: false, message: 'Too many requests from this IP, please try again later.' }
});

// Basic health check route for Railway
app.get('/', (req, res) => {
    res.send('SmartSync Services API is running');
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
    try {
        const { name, email, inquiryType, message } = req.body;

        // Input validation & sanitation
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
        }

        if (name.length > 100 || email.length > 100 || message.length > 5000) {
            return res.status(400).json({ success: false, message: 'Input parameters exceed maximum length.' });
        }

        // Configure Nodemailer
        // Expecting EMAIL_USER and EMAIL_PASS to be set in process.env / Railway variables
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER || 'noreply@smartsyncservices.com',
            replyTo: email,
            to: CONTACT_TO_EMAIL,
            subject: `SmartSync Web Inquiry: ${inquiryType} from ${name}`,
            text: `You have received a new inquiry from the SmartSync website.\n\nName: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`,
        });

        console.log(`Successfully processed and emailed contact form submission from ${name} (${email})`);

        res.status(200).json({ success: true, message: 'Your inquiry has been sent successfully!' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
