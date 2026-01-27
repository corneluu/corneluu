import './About.css';

const About = () => {
    const technologies = [
        'JavaScript', 'TypeScript', 'React', 'Next.js',
        'Node.js', 'HTML', 'CSS', 'Git'
    ];

    return (
        <section id="about" className="about">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="section-number">01.</span>
                    ABOUT
                </h2>
                <div className="section-line"></div>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        I'm a developer passionate about crafting accessible, pixel-perfect user
                        interfaces that blend thoughtful design with robust engineering. My favorite
                        work lies at the intersection of design and development.
                    </p>

                    <p>
                        Currently, I'm a <strong>second-year student at Tibiscus University</strong>,
                        studying at the Faculty of Computer Science and Informatics (FCIA). I'm
                        specializing in web development and building modern, responsive applications.
                    </p>

                    <p>
                        In the past, I studied at <strong>Liceul de Arte Ion Vidu</strong> in Timișoara,
                        where I developed a strong foundation in creative thinking and design principles
                        that I now apply to my development work.
                    </p>

                    <p>
                        Beyond coding, I have a diverse range of interests and skills. Since 2024, I have been a member of the <strong>Harmonia Christi</strong> Catholic Choir in Timișoara, where we perform sacred music and national tours. This experience has taught me the importance of harmony, discipline, and collaboration.
                    </p>

                    <p>
                        I also have a technical side dedicated to sound; since 2024, I have been <strong>installing audio systems for concerts</strong>, ensuring every beat is heard perfectly. And when I'm not near a computer or a stage, you might find me in the kitchen—I have a <strong>year of experience as a pizza maker</strong>, working with all types of dough and mastered the electric oven.
                    </p>

                    <p>
                        In my spare time, I'm usually exploring new technologies, working on personal
                        projects, or hanging out with my friends and family.
                    </p>

                    <div className="stats">
                        <div className="stat-item">
                            <div className="stat-number">2+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">20</div>
                            <div className="stat-label">Years Old</div>
                        </div>
                    </div>

                    <div className="technologies">
                        <h3>TECHNOLOGIES I WORK WITH</h3>
                        <div className="tech-grid">
                            {technologies.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
