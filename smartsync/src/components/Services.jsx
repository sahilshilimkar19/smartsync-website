import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        id: 1,
        icon: <Briefcase size={32} />,
        title: "Stock SIP Portfolio Advisory",
        description: "Over 207 Clients Served, since August 2020. Advised Asset Value of over Rs. 72 crores.",
        link: "Know More",
        isExternal: false,
        path: "/model-portfolio"
    },
    {
        id: 2,
        icon: <TrendingUp size={32} />,
        title: "Small-cap & Micro-cap Advisory",
        description: "Over 130 Clients since August 2023, Focussed on Fundamental Based Long-Term Investing.",
        link: "Try for Free",
        isExternal: false,
        path: "/flexi-cap-advisory-services"
    },
    {
        id: 3,
        icon: <BookOpen size={32} />,
        title: "MissioN S.M.I.L.E",
        description: "150+ Hours of Engaging Video Content, Keenly Used by Nearly 7000 New and Seasoned Investors.",
        link: "Start Learning",
        isExternal: true,
        path: "https://missionsmile.smartsyncservices.com/learn"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Services = () => {
    return (
        <section className="services section" id="services">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-gradient">Products & Services</h2>
                    <p className="section-subtitle">Tailored advisory to help you build and protect wealth.</p>
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {servicesData.map((service) => (
                        <motion.div key={service.id} className="service-card" variants={itemVariants}>
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            {service.isExternal ? (
                                <a href={service.path} target="_blank" rel="noopener noreferrer" className="service-link">
                                    {service.link}<span className="sr-only"> – {service.title} (opens in a new tab)</span>
                                    <ArrowRight size={16} />
                                </a>
                            ) : (
                                <Link to={service.path} className="service-link">
                                    {service.link}<span className="sr-only"> – {service.title}</span>
                                    <ArrowRight size={16} />
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
