import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            period: '2024 - Present',
            title: 'Student · Tibiscus University',
            description: 'Studying Computer Science and Informatics (FCIA), second year. Focusing on web development, software engineering principles, and modern application architecture.',
            technologies: ['React', 'JavaScript', 'Next.js', 'Storybook']
        },
        {
            period: '2020 - 2024',
            title: 'Student · Liceul de Arte Ion Vidu',
            description: 'Developed a strong foundation in creative thinking, design principles, and artistic expression. Learned to approach problems from multiple perspectives and blend creativity with technical skills.',
            technologies: ['Design', 'Creative Thinking', 'Problem Solving']
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
