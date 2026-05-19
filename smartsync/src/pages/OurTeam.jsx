import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: "CA Himanshu Shah, CFA",
        role: "Co-Founder and Chief Investment Officer",
        image: "/team/himanshhu.png",
        bio: "CA Himanshu Shah is a seasoned finance professional with over 10+ years of experience specializing in research, investment strategy, and portfolio management. A qualified Chartered Accountant (CA) and Chartered Financial Analyst (CFA), CA Himanshu Shah has a proven track record of delivering robust financial insights and creating tailored investment solutions for a diverse clientele. Himanshu is known for a strong analytical mindset, strategic investment acumen, and an unwavering commitment to client-centric financial advisory.",
        linkedin: "https://www.linkedin.com/in/ca-himanshu-shah-971348b2/",
        x: "https://x.com/shimanshu0796"
    },
    {
        name: "Akhilesh Pathak",
        role: "Co-Founder and Managing Partner",
        image: "/team/akhilesh.jpg",
        bio: "Akhilesh has been investing for over 20+ years in listed markets and has deep insights into businesses. He serves as a Board Member, Investor, and Advisor to several startups. He holds a Mechanical Engineering degree from NIT Durgapur and an MDP from IIM Ahmedabad. A strategic thinker and analytics specialist, Akhilesh has over 18 years of proven experience across industries, excelling in Digital Transformation, Business Development, and Large Enterprise Account Management.",
        linkedin: "https://www.linkedin.com/in/akhilesh-pathak-a043b136",
        x: "https://twitter.com/akhileshnpathak"
    },
    {
        name: "Atul Raval",
        role: "Investment Advisor",
        image: "/team/raval.jpg",
        bio: "Passionate about investing in stocks, more from the academic view rather than the monetary side. Mr. Atul graduated in Civil Engineering from L D College of Engineering, Ahmedabad, and did his MBA from B K School of Business Management in 1991. He has a diverse background ranging from civil engineering at the Narmada Dam project to IT implementation, playing a pivotal role in bringing a State PSU to a 95% online working environment.",
        x: "https://twitter.com/AtulDRaval"
    },
    {
        name: "Dr. Deepa Dwivedi",
        role: "Economic Advisor",
        image: "/team/deepa.png",
        bio: "An Educator, Economist and an Investor in the stock market advising family offices. Dr. Deepa Dwivedi holds a PhD and MA in Economics, UGC-NET qualified, with over a decade of teaching experience at Vikram University. Based in Ahmedabad, she actively invests in financial markets and provides expert advisory services to institutions, leveraging her deep expertise to deliver strategic insights.",
    },
    {
        name: "Krishna Satija",
        role: "Partner and Principal Officer",
        image: "/team/krishna.jpg",
        bio: "A passionate investor with over 5 years of equity investment experience. Krishna Satija is a dynamic investment professional with a CA Finalist qualification, an M.A. in Economics, and a B.Com degree. With a strong foundation in finance, his sharp analytical skills and passion for monitoring market trends enable him to identify high-potential investment opportunities.",
    },
    {
        name: "Sahil Shilimkar",
        role: "Senior AI/ML Developer",
        image: "/team/sahil.jpeg",
        bio: "Sahil Shilimkar specializes in building intelligent systems powered by Artificial Intelligence and Machine Learning. He focuses on developing data-driven solutions that enhance research workflows, automate complex data analysis, and generate actionable insights from large financial datasets. With experience in predictive modeling, natural language processing, and data engineering, Sahil works on building scalable AI tools that support smarter decision-making and efficient information processing.",
    },
 {
        name: "Madhav Rathi",
        role: "Senior Research Analyst",        image: "/team/madhav.jpg",        bio: "Madhav Rathi focuses on generating high-conviction stock ideas through fundamental research and sector analysis. He follows a structured top-down approach, identifying macro and industry trends before evaluating companies and building investment theses. Madhav combines traditional research with AI-driven tools to improve insight generation and research efficiency, with a strong focus on businesses benefiting from India’s long-term growth trends.",
    },
    
];

const OurTeam = () => {
    return (
        <main className="page-wrapper pt-32">
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>Our <span className="text-accent">Team</span></h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px' }}>
                            Driven by a relentless pursuit of understanding businesses through the prism of first principles.
                        </p>
                    </motion.div>

                    <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                style={{ background: 'var(--color-bg-surface)', padding: '2.5rem', border: '1px solid rgba(26, 26, 26, 0.1)', display: 'flex', flexDirection: 'column' }}
                            >
                                {member.image && (
                                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', fontWeight: 600 }}>{member.name}</h3>
                                <p style={{ color: 'var(--color-accent-primary)', fontWeight: 500, marginBottom: '1.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{member.role}</p>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                                    {member.bio}
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline' }}>LinkedIn</a>
                                    )}
                                    {member.x && (
                                        <a href={member.x} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'underline' }}>X (Twitter)</a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OurTeam;
