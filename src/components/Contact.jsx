import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/xgokpbqn', { // Replace with your Formspree ID
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="section-number">04.</span>
                    CONTACT
                </h2>
                <div className="section-line"></div>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p>
                        Although I'm currently focused on my studies, my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best
                        to get back to you!
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <div>
                                <div className="contact-label">Email</div>
                                <a href="mailto:cornelmrn18@gmail.com">cornelmrn18@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div>
                                <div className="contact-label">Location</div>
                                <div>Timișoara, Romania</div>
                            </div>
                        </div>
                    </div>

                    <a href="mailto:cornelmrn18@gmail.com" className="contact-cta">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Say Hello
                    </a>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@gmail.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn ${status}`}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error!' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <div className="form-status success">
                                Thanks for your message! I'll get back to you soon.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="form-status error">
                                Oops! Something went wrong. Please try again or email me directly.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
