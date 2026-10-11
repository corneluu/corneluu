import { Language, SkillLevel } from "@/types";

export interface TranslationData {
    languageNames: Record<Language, string>;
    nav: {
        about: string;
        projects: string;
        skills: string;
        experience: string;
        hobbies: string;
        contact: string;
    };
    hero: {
        badge: string;
        heading: string;
        description: string;
        ctaWork: string;
        ctaCv: string;
        stats: {
            yearsExp: string;
            projects: string;
            technologies: string;
        };
        codeRole: string;
    };
    about: {
        badge: string;
        heading: string;
        p1: string;
        p2: string;
        badgeYears: string;
        details: {
            nameLabel: string;
            locationLabel: string;
            locationValue: string;
            emailLabel: string;
            availabilityLabel: string;
            availabilityValue: string;
        };
    };
    projects: {
        badge: string;
        heading: string;
        description: string;
        filters: {
            all: string;
            webApp: string;
            mobile: string;
            experiment: string;
        };
        items: Record<string, { title?: string; description: string }>;
    };
    skills: {
        badge: string;
        heading: string;
        description: string;
        frontendHeading: string;
        toolsHeading: string;
        learningHeading: string;
        levels: Record<SkillLevel, string>;
    };
    experience: {
        badge: string;
        heading: string;
        description: string;
        items: Array<{
            period: string;
            title: string;
            organization: string;
            description: string;
        }>;
    };
    hobbies: {
        badge: string;
        heading: string;
        description: string;
        items: Record<string, { name: string; description: string; linkText?: string }>;
    };
    contact: {
        badge: string;
        heading: string;
        description: string;
        emailLabel: string;
        locationLabel: string;
        locationValue: string;
        socialHeading: string;
        form: {
            namePlaceholder: string;
            emailPlaceholder: string;
            subjectPlaceholder: string;
            messagePlaceholder: string;
            consentEmail: string;
            consentAccuracy: string;
            submit: string;
            sending: string;
            success: string;
            error: string;
        };
    };
    footer: {
        rights: string;
        backToTop: string;
    };
}

export const translations: Record<Language, TranslationData> = {
    en: {
        languageNames: {
            en: "English",
            ro: "Română",
            de: "Deutsch",
            it: "Italiano",
        },
        nav: {
            about: "About",
            projects: "Projects",
            skills: "Skills",
            experience: "Experience",
            hobbies: "Hobbies",
            contact: "Contact",
        },
        hero: {
            badge: "👋 Available for work",
            heading: "Building digital experiences that matter",
            description:
                "I'm Miron Cornel-Iosif, a frontend developer, audio technician, and choir bass specializing in React, TypeScript, and modern web technologies. I create accessible, performant, and beautiful user interfaces.",
            ctaWork: "View My Work",
            ctaCv: "Download CV",
            stats: {
                yearsExp: "Years Experience",
                projects: "Projects",
                technologies: "Technologies",
            },
            codeRole: "Frontend Developer",
        },
        about: {
            badge: "About Me",
            heading: "A mix of design, code, and audio",
            p1: "I'm Miron Cornel-Iosif, a second-year Computer Science student at Tibiscus University in Timișoara, specializing in modern web development.",
            p2: "My journey is a blend of creative arts and technical precision. Beyond building web experiences, I work as an audio technician for concert venues and am an active part of a choir team, performing as a bass. These experiences taught me precision, teamwork, and the importance of harmony.",
            badgeYears: "2+ Years",
            details: {
                nameLabel: "Name",
                locationLabel: "Location",
                locationValue: "Timișoara, Romania",
                emailLabel: "Email",
                availabilityLabel: "Availability",
                availabilityValue: "Open to work",
            },
        },
        projects: {
            badge: "Featured Work",
            heading: "Projects that showcase my expertise",
            description:
                "A selection of my recent work, from web applications to experimental interfaces.",
            filters: {
                all: "All",
                webApp: "Web App",
                mobile: "Mobile",
                experiment: "Experiment",
            },
            items: {
                "mgm-bastion": {
                    title: "MGM Bastion",
                    description:
                        "A refined bilingual digital menu for an Italian restaurant located in Timișoara's historic Bastion. Focuses on a wood-fired pizza and panini menu with a rustic, authentic aesthetic.",
                },
                feeling: {
                    title: "Feeling",
                    description:
                        "A quiet, human, and intentional application that offers emotionally aligned verses and reflections based on how you feel. AI-driven spiritual reflection.",
                },
                "harmonia-christi": {
                    title: "Harmonia Christi",
                    description:
                        "A secure choir sheet music platform with code-based authentication. Provides chorists with protected access to partiture and audio resources.",
                },
                "ai-marketing": {
                    title: "AI Marketing Assistant",
                    description:
                        "A custom-designed AI character that helps with marketing work. This 3D-style persona streamlines creative tasks and assists in building a unique brand presence.",
                },
                portfolio: {
                    title: "Portfolio Website",
                    description:
                        "A modern, dark-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and accessibility.",
                },
                "2026-lockin": {
                    title: "Quiet Progress (2026 Lock In)",
                    description:
                        "A private, React-based habit tracker that syncs daily progress directly to Google Sheets via Webhooks.",
                },
                "code-preview": {
                    title: "CodePen Local",
                    description:
                        "A modern, offline-capable, in-browser replica of CodePen with drag-and-drop import and zip export.",
                },
                scream: {
                    title: "Scream Runner",
                    description:
                        "A voice-controlled 3D endless runner game where players must scream into their microphone to move.",
                },
                moneytracker: {
                    title: "Money Tracker",
                    description:
                        "A personal finance web application for tracking and managing daily expenses.",
                },
                "calculator-aluat": {
                    title: "Calculator Aluat",
                    description:
                        "A specialized utility for calculating dough ingredients and hydration levels for baking.",
                },
            },
        },
        skills: {
            badge: "Expertise",
            heading: "Technologies I work with",
            description: "My technical toolkit for building modern web applications.",
            frontendHeading: "Frontend Development",
            toolsHeading: "Tools & Workflow",
            learningHeading: "Currently Learning",
            levels: {
                Advanced: "Advanced",
                Intermediate: "Intermediate",
                Beginner: "Beginner",
                Learning: "Learning",
            },
        },
        experience: {
            badge: "Journey",
            heading: "Experience & Education",
            description: "My professional path and academic background.",
            items: [
                {
                    period: "2024 - Present",
                    title: "Frontend Developer",
                    organization: "Freelance",
                    description:
                        "Building modern web applications for clients using React and Next.js. Delivering responsive, accessible, and performant solutions.",
                },
                {
                    period: "2024 - Present",
                    title: "Audio Technician & Choir Bass",
                    organization: "Concert Venues & Choir Team",
                    description:
                        "Installing and operating professional audio systems for live events while performing as a bass in the choir team. Ensuring technical excellence and musical harmony.",
                },
                {
                    period: "2023 - Present",
                    title: "Computer Science Student",
                    organization: "Tibiscus University",
                    description:
                        "Studying web development and software engineering at the Faculty of Computer Science and Informatics (FCIA).",
                },
                {
                    period: "2023 - 2024",
                    title: "Pizza Maker",
                    organization: "Local Restaurant",
                    description:
                        "Developed time management and teamwork skills in fast-paced environment. Expert in working with various dough types and electric ovens.",
                },
                {
                    period: "2019 - 2023",
                    title: "High School Graduate",
                    organization: "Liceul de Arte Ion Vidu",
                    description:
                        "Specialized in arts with focus on creative design principles. Developed strong foundation in creative thinking and artistic expression.",
                },
            ],
        },
        hobbies: {
            badge: "Free Time",
            heading: "What I like to do",
            description:
                "When I'm not writing code, you can find me recharging through these activities.",
            items: {
                "Listening to music": {
                    name: "Listening to music",
                    description:
                        "Exploring new genres and compiling playlists. Music is an essential part of my daily creative process.",
                    linkText: "Follow on Spotify",
                },
                Fishing: {
                    name: "Fishing",
                    description:
                        "Spending quiet, patient time by the water. It's my favorite way to disconnect and recharge.",
                },
                "Playing pool": {
                    name: "Playing pool",
                    description:
                        "Enjoying friendly but strategic games of pool. It's a great exercise in geometry and focus.",
                },
                Gaming: {
                    name: "Gaming",
                    description:
                        "Immersing myself in interactive worlds. Gaming inspires my approach to digital experiences and problem-solving.",
                },
                "Creating prototype apps": {
                    name: "Creating prototype apps",
                    description:
                        "Tinkering with code and sketching out new UI concepts just for the fun of building something new.",
                },
                "Photography & Videography": {
                    name: "Photography & Videography",
                    description:
                        "Capturing moments, making videos, and editing them to tell a compelling visual story.",
                    linkText: "Follow on Instagram",
                },
            },
        },
        contact: {
            badge: "Get In Touch",
            heading: "Let's work together",
            description:
                "Have a project in mind or want to discuss opportunities? I'd love to hear from you.",
            emailLabel: "Email",
            locationLabel: "Location",
            locationValue: "Timișoara, Romania",
            socialHeading: "Connect on social media",
            form: {
                namePlaceholder: "Your name",
                emailPlaceholder: "your@email.com",
                subjectPlaceholder: "Project inquiry",
                messagePlaceholder: "Tell me about your project...",
                consentEmail: "I agree to be contacted via email regarding my inquiry.",
                consentAccuracy:
                    "I confirm that the information provided is correct and I'm ready to collaborate.",
                submit: "Send Message",
                sending: "Sending...",
                success: "Message sent successfully! I'll get back to you soon.",
                error: "Something went wrong. Please try again or email me directly.",
            },
        },
        footer: {
            rights: "All rights reserved.",
            backToTop: "Back to top",
        },
    },
    ro: {
        languageNames: {
            en: "English",
            ro: "Română",
            de: "Deutsch",
            it: "Italiano",
        },
        nav: {
            about: "Despre mine",
            projects: "Proiecte",
            skills: "Abilități",
            experience: "Experiență",
            hobbies: "Pasiuni",
            contact: "Contact",
        },
        hero: {
            badge: "👋 Disponibil pentru proiecte",
            heading: "Construiesc experiențe digitale de impact",
            description:
                "Sunt Miron Cornel-Iosif, dezvoltator frontend, tehnician audio și bas în cor, specializat în React, TypeScript și tehnologii web moderne. Creez interfețe accesibile, performante și estetice.",
            ctaWork: "Vezi Proiectele Mele",
            ctaCv: "Descarcă CV-ul",
            stats: {
                yearsExp: "Ani Experiență",
                projects: "Proiecte",
                technologies: "Tehnologii",
            },
            codeRole: "Dezvoltator Frontend",
        },
        about: {
            badge: "Despre mine",
            heading: "O combinație între design, cod și sunet",
            p1: "Sunt Miron Cornel-Iosif, student în anul al doilea la Informatică la Universitatea Tibiscus din Timișoara, pasionat de dezvoltarea web modernă.",
            p2: "Parcursul meu este o îmbinare între artele creative și precizia tehnică. Pe lângă crearea de aplicații web, lucrez ca tehnician audio pentru săli de concerte și activez ca bas într-un cor. Aceste experiențe m-au învățat precizia, spiritul de echipă și valoarea armoniei.",
            badgeYears: "2+ Ani",
            details: {
                nameLabel: "Nume",
                locationLabel: "Locație",
                locationValue: "Timișoara, România",
                emailLabel: "Email",
                availabilityLabel: "Disponibilitate",
                availabilityValue: "Deschis la colaborări",
            },
        },
        projects: {
            badge: "Lucrări reprezentative",
            heading: "Proiecte care reflectă experiența mea",
            description:
                "O selecție a celor mai recente proiecte, de la aplicații web complexe la interfețe experimentale.",
            filters: {
                all: "Toate",
                webApp: "Aplicații Web",
                mobile: "Mobile",
                experiment: "Experimente",
            },
            items: {
                "mgm-bastion": {
                    title: "MGM Bastion",
                    description:
                        "Un meniu digital bilingv rafinat pentru un restaurant italian din Bastionul istoric din Timișoara. Axat pe un meniu de pizza pe vatră și panini, cu o estetică rustică și autentică.",
                },
                feeling: {
                    title: "Feeling",
                    description:
                        "O aplicație caldă, umană și empatică, ce oferă versete și reflecții aliniate stării tale emoționale. Reflecție spirituală ghidată prin inteligență artificială.",
                },
                "harmonia-christi": {
                    title: "Harmonia Christi",
                    description:
                        "O platformă securizată de partituri corale cu autentificare prin cod. Oferă coriștilor acces protejat la partituri și resurse audio de repetiție.",
                },
                "ai-marketing": {
                    title: "Asistent Marketing AI",
                    description:
                        "Un avatar AI creat personalizat pentru optimizarea sarcinilor de marketing. Acest personaj 3D accelerează creativitatea și conturează o identitate de brand memorabilă.",
                },
                portfolio: {
                    title: "Site Portofoliu",
                    description:
                        "Un portofoliu modern cu temă întunecată, creat cu Next.js, TypeScript și Tailwind CSS. Include animații fluide, design receptiv și standarde înalte de accesibilitate.",
                },
                "2026-lockin": {
                    title: "Quiet Progress (2026 Lock In)",
                    description:
                        "Un instrument privat de urmărire a obiceiurilor zilnice în React, sincronizat automat cu Google Sheets prin Webhooks.",
                },
                "code-preview": {
                    title: "CodePen Local",
                    description:
                        "O replică de CodePen direct în browser, funcțională offline, cu suport pentru import drag-and-drop și export în arhivă zip.",
                },
                scream: {
                    title: "Scream Runner",
                    description:
                        "Un joc 3D de tip endless runner controlat vocal: personajul înaintează atunci când jucătorul strigă în microfon.",
                },
                moneytracker: {
                    title: "Money Tracker",
                    description:
                        "Aplicație web pentru gestionarea finanțelor personale, concepută pentru monitorizarea simplă a cheltuielilor zilnice.",
                },
                "calculator-aluat": {
                    title: "Calculator Aluat",
                    description:
                        "Un calculator specializat pentru dozarea ingredientelor și a nivelurilor de hidratare a aluatului pentru copt.",
                },
            },
        },
        skills: {
            badge: "Expertiză",
            heading: "Tehnologiile cu care lucrez",
            description: "Trusa mea tehnică pentru dezvoltarea de aplicații web moderne.",
            frontendHeading: "Dezvoltare Frontend",
            toolsHeading: "Instrumente & Flux de lucru",
            learningHeading: "În curs de învățare",
            levels: {
                Advanced: "Avansat",
                Intermediate: "Intermediar",
                Beginner: "Începător",
                Learning: "În învățare",
            },
        },
        experience: {
            badge: "Parcurs profesional",
            heading: "Experiență & Educație",
            description: "Drumul meu profesional și pregătirea academică.",
            items: [
                {
                    period: "2024 - Prezent",
                    title: "Dezvoltator Frontend",
                    organization: "Freelance",
                    description:
                        "Dezvoltare de aplicații web moderne pentru clienți utilizând React și Next.js. Livrare de soluții responsive, accesibile și performante.",
                },
                {
                    period: "2024 - Prezent",
                    title: "Tehnician Audio & Bas Coral",
                    organization: "Săli de concerte & Ansamblu coral",
                    description:
                        "Instalarea și operarea sistemelor audio profesionale pentru evenimente live și activitate ca bas în ansamblul coral. Asigurarea excelenței tehnice și a armoniei muzicale.",
                },
                {
                    period: "2023 - Prezent",
                    title: "Student Informatică",
                    organization: "Universitatea Tibiscus",
                    description:
                        "Studii în dezvoltare web și inginerie software la Facultatea de Calculatoare și Informatică Aplicată (FCIA).",
                },
                {
                    period: "2023 - 2024",
                    title: "Pizzar",
                    organization: "Restaurant local",
                    description:
                        "Dezvoltarea abilităților de organizare și colaborare într-un mediu cu ritm alert. Experiență de lucru cu diverse tipuri de aluat și cuptoare electrice.",
                },
                {
                    period: "2019 - 2023",
                    title: "Absolvent de Liceu",
                    organization: "Liceul de Arte Ion Vidu",
                    description:
                        "Specializare artistică centrată pe principii de design creativ. Dezvoltarea unei baze solide în gândire creativă și exprimare vizuală.",
                },
            ],
        },
        hobbies: {
            badge: "Timp liber",
            heading: "Ce îmi place să fac",
            description:
                "Când nu scriu linii de cod, iată activitățile prin care mă deconectez și îmi reîncarc energia.",
            items: {
                "Listening to music": {
                    name: "Ascultatul muzicii",
                    description:
                        "Descoperirea de noi genuri muzicale și crearea de playlisturi. Muzica este esențială în ritmul meu zilnic de creație.",
                    linkText: "Urmărește pe Spotify",
                },
                Fishing: {
                    name: "Pescuit",
                    description:
                        "Ore liniștite și pline de răbdare la marginea apei. Este refugiul meu ideal pentru relaxare completă.",
                },
                "Playing pool": {
                    name: "Biliard",
                    description:
                        "Partide amicale, dar strategice de biliard. Un mod plăcut de a exersa geometria și concentrarea.",
                },
                Gaming: {
                    name: "Gaming",
                    description:
                        "Explorarea de lumi interactive. Jocurile video îmi inspiră perspectiva asupra interfețelor și a rezolvării problemelor.",
                },
                "Creating prototype apps": {
                    name: "Prototipuri de aplicații",
                    description:
                        "Experimentarea cu idei de cod și schițarea de noi concepte UI, din pura bucurie de a crea lucruri noi.",
                },
                "Photography & Videography": {
                    name: "Fotografie & Video",
                    description:
                        "Surprinderea momentelor cheie, filmarea și editarea de clipuri video care spun o poveste vizuală captivantă.",
                    linkText: "Urmărește pe Instagram",
                },
            },
        },
        contact: {
            badge: "Contact",
            heading: "Hai să colaborăm",
            description:
                "Ai un proiect în minte sau dorești să discutăm o oportunitate? Mi-ar face mare plăcere să stăm de vorbă.",
            emailLabel: "Email",
            locationLabel: "Locație",
            locationValue: "Timișoara, România",
            socialHeading: "Rețele sociale",
            form: {
                namePlaceholder: "Numele tău",
                emailPlaceholder: "adresa@email.com",
                subjectPlaceholder: "Subiectul mesajului",
                messagePlaceholder: "Povestește-mi despre proiectul tău...",
                consentEmail: "Sunt de acord să fiu contactat prin email referitor la această solicitare.",
                consentAccuracy:
                    "Confirm că informațiile furnizate sunt corecte și sunt pregătit pentru o colaborare.",
                submit: "Trimite mesajul",
                sending: "Se trimite...",
                success: "Mesajul a fost trimis cu succes! Îți voi răspunde în cel mai scurt timp.",
                error: "A apărut o problemă. Te rog încearcă din nou sau scrie-mi direct pe email.",
            },
        },
        footer: {
            rights: "Toate drepturile rezervate.",
            backToTop: "Înapoi sus",
        },
    },
    de: {
        languageNames: {
            en: "English",
            ro: "Română",
            de: "Deutsch",
            it: "Italiano",
        },
        nav: {
            about: "Über mich",
            projects: "Projekte",
            skills: "Fähigkeiten",
            experience: "Erfahrung",
            hobbies: "Hobbys",
            contact: "Kontakt",
        },
        hero: {
            badge: "👋 Verfügbar für Projekte",
            heading: "Digitale Erlebnisse mit Mehrwert schaffen",
            description:
                "Ich bin Miron Cornel-Iosif, Frontend-Entwickler, Audiotechniker und Chorbassist, spezialisiert auf React, TypeScript und moderne Webtechnologien. Ich entwickle barrierefreie, performante und ansprechende Benutzeroberflächen.",
            ctaWork: "Meine Arbeiten",
            ctaCv: "Lebenslauf herunterladen",
            stats: {
                yearsExp: "Jahre Erfahrung",
                projects: "Projekte",
                technologies: "Technologien",
            },
            codeRole: "Frontend-Entwickler",
        },
        about: {
            badge: "Über mich",
            heading: "Eine Synergie aus Design, Code und Klang",
            p1: "Ich bin Miron Cornel-Iosif, Informatikstudent im zweiten Studienjahr an der Tibiscus-Universität in Timișoara mit Schwerpunkt auf moderner Webentwicklung.",
            p2: "Mein Weg verbindet kreative Gestaltung mit technischer Präzision. Neben der Webentwicklung arbeite ich als Audiotechniker für Konzertsäle und singe aktiv als Bass im Chor. Diese Erfahrungen haben mich Präzision, Teamgeist und das Gespür für Harmonie gelehrt.",
            badgeYears: "2+ Jahre",
            details: {
                nameLabel: "Name",
                locationLabel: "Standort",
                locationValue: "Timișoara, Rumänien",
                emailLabel: "E-Mail",
                availabilityLabel: "Verfügbarkeit",
                availabilityValue: "Offen für Anfragen",
            },
        },
        projects: {
            badge: "Ausgewählte Arbeiten",
            heading: "Projekte, die meine Expertise zeigen",
            description:
                "Eine Auswahl meiner aktuellen Arbeiten, von Webanwendungen bis hin zu experimentellen Interfaces.",
            filters: {
                all: "Alle",
                webApp: "Web-App",
                mobile: "Mobil",
                experiment: "Experiment",
            },
            items: {
                "mgm-bastion": {
                    title: "MGM Bastion",
                    description:
                        "Eine raffinierte zweisprachige digitale Speisekarte für ein italienisches Restaurant in der historischen Bastion von Timișoara mit Steinofenpizza und Panini in rustikaler Optik.",
                },
                feeling: {
                    title: "Feeling",
                    description:
                        "Eine achtsame und feinfühlige Anwendung für emotionsbasierte Bibelverse und Gedankenanstöße. KI-gestützte spirituelle Reflexion.",
                },
                "harmonia-christi": {
                    title: "Harmonia Christi",
                    description:
                        "Eine sichere Chornoten-Plattform mit codebasierter Authentifizierung. Bietet Chormitgliedern geschützten Zugriff auf Partituren und Audio-Ressourcen.",
                },
                "ai-marketing": {
                    title: "KI-Marketing-Assistent",
                    description:
                        "Ein maßgeschneiderter 3D-KI-Charakter für Marketing-Aufgaben, der kreative Abläufe beschleunigt und einen unverwechselbaren Markenauftritt formt.",
                },
                portfolio: {
                    title: "Portfolio-Website",
                    description:
                        "Eine moderne Website im Dark-Mode, entwickelt mit Next.js, TypeScript und Tailwind CSS. Mit flüssigen Animationen und hoher Barrierefreiheit.",
                },
                "2026-lockin": {
                    title: "Quiet Progress (2026 Lock In)",
                    description:
                        "Ein privater, React-basierter Gewohnheits-Tracker, der Fortschritte via Webhooks direkt in Google Sheets speichert.",
                },
                "code-preview": {
                    title: "CodePen Local",
                    description:
                        "Eine offline nutzbare CodePen-Alternative im Browser mit Drag-and-Drop-Import und Zip-Exportfunktionen.",
                },
                scream: {
                    title: "Scream Runner",
                    description:
                        "Ein sprachgesteuertes 3D-Endless-Runner-Spiel, bei dem die Spielfigur durch Rufen ins Mikrofon gesteuert wird.",
                },
                moneytracker: {
                    title: "Money Tracker",
                    description:
                        "Eine Webanwendung für persönliche Finanzen zur unkomplizierten Überwachung und Verwaltung täglicher Ausgaben.",
                },
                "calculator-aluat": {
                    title: "Teig-Rechner",
                    description:
                        "Ein Spezialrechner zur Bestimmung von Teigzutaten und Hydratationsstufen für präzises Backen.",
                },
            },
        },
        skills: {
            badge: "Expertise",
            heading: "Technologien, mit denen ich arbeite",
            description: "Mein technisches Toolkit für die Entwicklung moderner Webanwendungen.",
            frontendHeading: "Frontend-Entwicklung",
            toolsHeading: "Werkzeuge & Workflow",
            learningHeading: "Aktuell im Lernfokus",
            levels: {
                Advanced: "Fortgeschritten",
                Intermediate: "Mittelstufe",
                Beginner: "Grundlagen",
                Learning: "Lernend",
            },
        },
        experience: {
            badge: "Werdegang",
            heading: "Erfahrung & Ausbildung",
            description: "Mein beruflicher Werdegang und akademischer Hintergrund.",
            items: [
                {
                    period: "2024 - Heute",
                    title: "Frontend-Entwickler",
                    organization: "Freiberuflich",
                    description:
                        "Entwicklung moderner Webanwendungen für Kunden mit React und Next.js. Erstellung responsiver, barrierefreier und hochperformanter Lösungen.",
                },
                {
                    period: "2024 - Heute",
                    title: "Audiotechniker & Chorbassist",
                    organization: "Konzertsäle & Chorteam",
                    description:
                        "Installation und Steuerung professioneller Soundsysteme für Live-Events sowie musikalisches Engagement als Bass im Chorensemble.",
                },
                {
                    period: "2023 - Heute",
                    title: "Informatik-Student",
                    organization: "Tibiscus-Universität",
                    description:
                        "Studium der Softwareentwicklung und Webtechnologien an der Fakultät für Informatik und angewandte Informatik (FCIA).",
                },
                {
                    period: "2023 - 2024",
                    title: "Pizzabäcker",
                    organization: "Lokales Restaurant",
                    description:
                        "Vertiefung von Zeitmanagement und Teamarbeit in einem dynamischen Arbeitsumfeld. Umfassende Praxis mit Teigarten und Pizzaöfen.",
                },
                {
                    period: "2019 - 2023",
                    title: "Gymnasialabschluss",
                    organization: "Ion Vidu Kunstlyzeum",
                    description:
                        "Künstlerischer Schwerpunkt mit Fokus auf kreative Gestaltungsprinzipien und visuelle Ausdrucksformen.",
                },
            ],
        },
        hobbies: {
            badge: "Freizeit",
            heading: "Was ich gerne mache",
            description:
                "Wenn ich nicht gerade code, tanke ich mit diesen Aktivitäten neue Kraft.",
            items: {
                "Listening to music": {
                    name: "Musik hören",
                    description:
                        "Neue Musikrichtungen erkunden und Playlists zusammenstellen. Musik ist der Taktgeber meines täglichen Schaffens.",
                    linkText: "Auf Spotify folgen",
                },
                Fishing: {
                    name: "Angeln",
                    description:
                        "Ruhige, geduldige Stunden am Wasser verbringen. Meine beste Methode zum Abschalten und Durchatmen.",
                },
                "Playing pool": {
                    name: "Billard",
                    description:
                        "Freundschaftliche, aber strategische Runden am Billardtisch. Perfekt für Geometrie und Konzentration.",
                },
                Gaming: {
                    name: "Gaming",
                    description:
                        "Eintauchen in interaktive Spielwelten. Videospiele inspirieren meine Herangehensweise an Interfaces und Problemlösung.",
                },
                "Creating prototype apps": {
                    name: "Prototypen bauen",
                    description:
                        "Mit neuen Codeideen tüfteln und UI-Konzepte skizzieren – einfach aus purer Freude am Gestalten.",
                },
                "Photography & Videography": {
                    name: "Foto- & Videografie",
                    description:
                        "Momente mit der Kamera einfangen und Videos schneiden, um lebendige visuelle Geschichten zu erzählen.",
                    linkText: "Auf Instagram folgen",
                },
            },
        },
        contact: {
            badge: "Kontakt",
            heading: "Lass uns zusammenarbeiten",
            description:
                "Hast du ein Projekt im Kopf oder möchtest neue Möglichkeiten besprechen? Ich freue mich auf deine Nachricht.",
            emailLabel: "E-Mail",
            locationLabel: "Standort",
            locationValue: "Timișoara, Rumänien",
            socialHeading: "In sozialen Netzwerken vernetzen",
            form: {
                namePlaceholder: "Dein Name",
                emailPlaceholder: "deine@email.com",
                subjectPlaceholder: "Betreff der Anfrage",
                messagePlaceholder: "Erzähle mir von deinem Projekt...",
                consentEmail: "Ich stimme zu, bezüglich meiner Anfrage per E-Mail kontaktiert zu werden.",
                consentAccuracy:
                    "Ich bestätige die Richtigkeit meiner Angaben und bin bereit für eine Zusammenarbeit.",
                submit: "Nachricht senden",
                sending: "Wird gesendet...",
                success: "Nachricht erfolgreich gesendet! Ich melde mich in Kürze bei dir.",
                error: "Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreibe mir direkt per Mail.",
            },
        },
        footer: {
            rights: "Alle Rechte vorbehalten.",
            backToTop: "Nach oben",
        },
    },
    it: {
        languageNames: {
            en: "English",
            ro: "Română",
            de: "Deutsch",
            it: "Italiano",
        },
        nav: {
            about: "Chi sono",
            projects: "Progetti",
            skills: "Competenze",
            experience: "Esperienza",
            hobbies: "Hobby",
            contact: "Contatti",
        },
        hero: {
            badge: "👋 Disponibile per nuovi progetti",
            heading: "Creare esperienze digitali che contano",
            description:
                "Sono Miron Cornel-Iosif, sviluppatore frontend, tecnico audio e basso corale, specializzato in React, TypeScript e tecnologie web moderne. Realizzo interfacce accessibili, performanti e curate nel design.",
            ctaWork: "I miei progetti",
            ctaCv: "Scarica CV",
            stats: {
                yearsExp: "Anni di esperienza",
                projects: "Progetti",
                technologies: "Tecnologie",
            },
            codeRole: "Sviluppatore Frontend",
        },
        about: {
            badge: "Chi sono",
            heading: "Un connubio tra design, codice e audio",
            p1: "Sono Miron Cornel-Iosif, studente del secondo anno di Informatica all'Università Tibiscus di Timișoara, appassionato di sviluppo web moderno.",
            p2: "Il mio percorso unisce sensibilità artistica e rigore tecnico. Oltre allo sviluppo di interfacce web, lavoro come tecnico del suono in sale da concerto e canto come voce di basso in un coro. Queste esperienze mi hanno insegnato precisione, spirito di squadra e armonia.",
            badgeYears: "2+ Anni",
            details: {
                nameLabel: "Nome",
                locationLabel: "Luogo",
                locationValue: "Timișoara, Romania",
                emailLabel: "Email",
                availabilityLabel: "Disponibilità",
                availabilityValue: "Aperto a collaborazioni",
            },
        },
        projects: {
            badge: "Lavori in primo piano",
            heading: "Progetti che mettono in luce le mie competenze",
            description:
                "Una selezione dei miei lavori più recenti, da applicazioni web complete a interfacce sperimentali.",
            filters: {
                all: "Tutti",
                webApp: "Web App",
                mobile: "Mobile",
                experiment: "Esperimenti",
            },
            items: {
                "mgm-bastion": {
                    title: "MGM Bastion",
                    description:
                        "Un raffinato menu digitale bilingue per un ristorante italiano nello storico Bastione di Timișoara, con pizza al forno a legna e panini dall'estetica rustica.",
                },
                feeling: {
                    title: "Feeling",
                    description:
                        "Un'applicazione intima e umana che suggerisce versetti e spunti di riflessione basati sul proprio stato d'animo. Riflessione spirituale supportata dall'IA.",
                },
                "harmonia-christi": {
                    title: "Harmonia Christi",
                    description:
                        "Piattaforma protetta per spartiti corali con autenticazione via codice, che garantisce ai coristi l'accesso a spartiti e tracce audio di prova.",
                },
                "ai-marketing": {
                    title: "Assistente Marketing IA",
                    description:
                        "Un personaggio 3D generato con l'IA per ottimizzare le attività di marketing, velocizzare la creazione di contenuti e valorizzare l'identità del brand.",
                },
                portfolio: {
                    title: "Sito Portfolio",
                    description:
                        "Un portfolio moderno dal design dark, realizzato con Next.js, TypeScript e Tailwind CSS. Include animazioni fluide, accessibilità e piena reattività.",
                },
                "2026-lockin": {
                    title: "Quiet Progress (2026 Lock In)",
                    description:
                        "Un tracker personale di abitudini in React che sincronizza i progressi giornalieri direttamente su Google Sheets tramite Webhook.",
                },
                "code-preview": {
                    title: "CodePen Local",
                    description:
                        "Un clone leggero di CodePen funzionante offline nel browser, con importazione drag-and-drop ed esportazione in formato zip.",
                },
                scream: {
                    title: "Scream Runner",
                    description:
                        "Un gioco endless runner 3D a controllo vocale: il personaggio avanza quando il giocatore urla nel microfono.",
                },
                moneytracker: {
                    title: "Money Tracker",
                    description:
                        "Un'applicazione web di finanza personale pensata per annotare e gestire le spese quotidiane in tutta semplicità.",
                },
                "calculator-aluat": {
                    title: "Calcolatore Impasti",
                    description:
                        "Uno strumento specifico per calcolare con precisione gli ingredienti e il grado di idratazione dell'impasto per pane e pizza.",
                },
            },
        },
        skills: {
            badge: "Competenze",
            heading: "Tecnologie con cui lavoro",
            description: "Il mio arsenale tecnico per lo sviluppo di applicazioni web all'avanguardia.",
            frontendHeading: "Sviluppo Frontend",
            toolsHeading: "Strumenti & Flusso di lavoro",
            learningHeading: "Attualmente in studio",
            levels: {
                Advanced: "Avanzato",
                Intermediate: "Intermedio",
                Beginner: "Base",
                Learning: "In apprendimento",
            },
        },
        experience: {
            badge: "Percorso",
            heading: "Esperienza & Istruzione",
            description: "Il mio cammino professionale e il percorso accademico.",
            items: [
                {
                    period: "2024 - Presente",
                    title: "Sviluppatore Frontend",
                    organization: "Freelance",
                    description:
                        "Sviluppo di applicazioni web moderne per clienti utilizzando React e Next.js, con focus su reattività, prestazioni e accessibilità.",
                },
                {
                    period: "2024 - Presente",
                    title: "Tecnico Audio & Basso Corale",
                    organization: "Sale concerti & Gruppo Corale",
                    description:
                        "Configurazione e regia di impianti audio professionali per concerti ed esibizioni canore come basso nella formazione corale.",
                },
                {
                    period: "2023 - Presente",
                    title: "Studente di Informatica",
                    organization: "Università Tibiscus",
                    description:
                        "Percorso di studi in sviluppo software e tecnologie web presso la Facoltà di Informatica e Informatica Applicata (FCIA).",
                },
                {
                    period: "2023 - 2024",
                    title: "Pizzaiolo",
                    organization: "Ristorante Locale",
                    description:
                        "Sviluppo della gestione del tempo e del lavoro di squadra in un contesto dinamico. Esperienza con diversi tipi di impasti e forni elettrici.",
                },
                {
                    period: "2019 - 2023",
                    title: "Diploma di Scuola Superiore",
                    organization: "Liceo Artistico Ion Vidu",
                    description:
                        "Specializzazione artistica orientata ai principi del design creativo e allo sviluppo del pensiero visivo.",
                },
            ],
        },
        hobbies: {
            badge: "Tempo libero",
            heading: "Le mie passioni",
            description:
                "Quando non scrivo codice, ecco le attività che mi aiutano a staccare e rigenerarmi.",
            items: {
                "Listening to music": {
                    name: "Ascoltare musica",
                    description:
                        "Scoprire nuovi generi musicali e curare playlist tematiche. La musica è una fonte costante di ispirazione quotidiana.",
                    linkText: "Segui su Spotify",
                },
                Fishing: {
                    name: "Pesca",
                    description:
                        "Momenti di tranquillità e pazienza vicino all'acqua: il mio modo preferito per rilassarmi e ritrovare la calma.",
                },
                "Playing pool": {
                    name: "Biliardo",
                    description:
                        "Sfide amichevoli ma ad alta concentrazione sul tavolo verde, ottime per stimolare geometria e precisione.",
                },
                Gaming: {
                    name: "Gaming",
                    description:
                        "Esplorare mondi videoludici interattivi, che stimolano la mia creatività nella progettazione di interfacce e nel problem solving.",
                },
                "Creating prototype apps": {
                    name: "Creare prototipi di app",
                    description:
                        "Sperimentare con nuove idee di codice e disegnare bozze di UI per il puro piacere di creare qualcosa di nuovo.",
                },
                "Photography & Videography": {
                    name: "Fotografia & Video",
                    description:
                        "Catturare dettagli unici, girare e montare video che raccontano storie autentiche ed evocative.",
                    linkText: "Segui su Instagram",
                },
            },
        },
        contact: {
            badge: "Contatti",
            heading: "Lavoriamo insieme",
            description:
                "Hai in mente un progetto o vuoi valutare nuove opportunità? Sarò felice di ascoltarti.",
            emailLabel: "Email",
            locationLabel: "Luogo",
            locationValue: "Timișoara, Romania",
            socialHeading: "Connettiti sui social",
            form: {
                namePlaceholder: "Il tuo nome",
                emailPlaceholder: "tua@email.com",
                subjectPlaceholder: "Oggetto della richiesta",
                messagePlaceholder: "Parlami del tuo progetto...",
                consentEmail: "Accetto di essere ricontattato via email in merito a questa richiesta.",
                consentAccuracy:
                    "Confermo che i dati inseriti sono corretti e sono pronto a collaborare.",
                submit: "Invia Messaggio",
                sending: "Invio in corso...",
                success: "Messaggio inviato con successo! Ti risponderò al più presto.",
                error: "Si è verificato un errore. Riprova o scrivimi direttamente via email.",
            },
        },
        footer: {
            rights: "Tutti i diritti riservati.",
            backToTop: "Torna su",
        },
    },
};
