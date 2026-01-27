import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            period: '2024 - Present',
            title: 'Student · Tibiscus University',
            description: 'Studying Computer Science and Informatics (FCIA), second year. Focusing on web development, software engineering principles, and modern application architecture.',
            technologies: ['React', 'JavaScript', 'Next.js', 'Vite']
        },
        {
            period: '2023 - Present',
            title: 'Member · Harmonia Christi Choir',
            description: 'Active member of the Catholic Choir in Timișoara. Performing sacred music, national tours, and collaborating with diverse musical groups.',
            technologies: ['Sacred Music', 'Teamwork', 'Performance']
        },
        {
            period: '2022 - 2023',
            title: 'Pizza Maker · Professional Kitchen',
            description: 'One year of experience crafting authentic pizzas. Expert in working with various dough types and operating industrial electric ovens.',
            technologies: ['Culinary Arts', 'Time Management', 'Precision']
        },
        {
            period: '2022 - Present',
            title: 'Audio Technician · Events & Concerts',
            description: 'Specialize in installing and configuring professional audio systems for live performances and concerts.',
            technologies: ['Audio Engineering', 'Live Sound', 'Technical Setup']
        },
        {
            period: '2020 - 2024',
            title: 'Student · Liceul de Arte Ion Vidu',
            description: 'Developed a strong foundation in creative thinking, design principles, and artistic expression at the prestigious Art High School.',
            technologies: ['Design', 'Creative Thinking', 'Fine Arts']
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="section-number">02.</span>
                    EXPERIENCE
                </h2>
                <div className="section-line"></div>
            </div>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker">
                            <div className="timeline-dot"></div>
                            {index < experiences.length - 1 && <div className="timeline-line"></div>}
                        </div>

                        <div className="timeline-content">
                            <div className="timeline-period">{exp.period}</div>
                            <h3 className="timeline-title">{exp.title}</h3>
                            <p className="timeline-description">{exp.description}</p>
                            <div className="timeline-tech">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
