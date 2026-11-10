import { Language } from "@/types";

export interface TranslationData {
    nav: {
        about: string;
        projects: string;
        skills: string;
        experience: string;
        hobbies: string;
        contact: string;
    };
    hero: {
        status: string;
        role: string;
        description: string;
        ctaWork: string;
        ctaCv: string;
        stats: {
            yearsExp: string;
            projects: string;
            technologies: string;
        };
    };
    about: {
        heading: string;
        p1: string;
        p2: string;
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
        heading: string;
        description: string;
        moreHeading: string;
        live: string;
        source: string;
        items: Record<string, { title?: string; description: string }>;
    };
    skills: {
        heading: string;
        description: string;
        coreHeading: string;
        toolsHeading: string;
        learningHeading: string;
    };
    experience: {
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
        heading: string;
        description: string;
        items: Record<string, { name: string; description: string; linkText?: string }>;
    };
    contact: {
        heading: string;
        description: string;
        emailLabel: string;
        locationLabel: string;
        locationValue: string;
        socialHeading: string;
        form: {
            nameLabel: string;
            emailLabel: string;
            subjectLabel: string;
            messageLabel: string;
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
        nav: {
            about: "About",
            projects: "Projects",
            skills: "Skills",
            experience: "Experience",
            hobbies: "Hobbies",
            contact: "Contact",
        },
        hero: {
            status: "Open to work",
            role: "Frontend developer in Timișoara, building clear and fast web interfaces.",
            description:
                "I'm a Computer Science student and freelance developer working with React, Next.js and Tailwind CSS. I take projects from the first sketch to a deployed site, with attention to accessibility and detail.",
            ctaWork: "View projects",
            ctaCv: "Download CV",
            stats: {
                yearsExp: "years of experience",
                projects: "projects built",
                technologies: "technologies",
            },
        },
        about: {
            heading: "Design, code and sound",
            p1: "I'm a second-year Computer Science student at Tibiscus University in Timișoara, focused on frontend development. I graduated from an arts high school, so I care about how an interface looks and feels as much as how it is built.",
            p2: "Alongside web work, I set up and run live sound for concerts and sing bass in a choir. Both have taught me precision, teamwork and how to listen.",
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
            heading: "Selected work",
            description:
                "Four projects I'm most proud of, followed by smaller tools and experiments.",
            moreHeading: "More projects",
            live: "Live site",
            source: "Source code",
            items: {
                "mgm-bastion": {
                    title: "MGM Bastion",
                    description:
                        "A bilingual digital menu for an Italian restaurant in Timișoara's historic Bastion. Wood-fired pizza and panini, presented with a warm, rustic look.",
                },
                feeling: {
                    title: "Feeling",
                    description:
                        "A calm app that suggests verses and short reflections based on how you feel, with AI-assisted matching.",
                },
                "harmonia-christi": {
                    title: "Harmonia Christi",
                    description:
                        "A sheet-music platform for a choir, protected by access codes. Singers find their scores and rehearsal audio in one place.",
                },
                portfolio: {
                    title: "Portfolio Website",
                    description:
                        "This site. Built with Next.js, TypeScript and Tailwind CSS, in four languages, with subtle motion and accessible markup.",
                },
                "2026-lockin": {
                    title: "Quiet Progress (2026 Lock In)",
                    description:
                        "A private habit tracker in React that syncs daily progress to Google Sheets through webhooks.",
                },
                "code-preview": {
                    title: "CodePen Local",
                    description:
                        "An offline-capable, in-browser code playground with drag-and-drop import and zip export.",
                },
                scream: {
                    title: "Scream Runner",
                    description:
                        "A voice-controlled 3D endless runner: you scream into the microphone to move.",
                },
                moneytracker: {
                    title: "Money Tracker",
                    description:
                        "A personal finance app for tracking and managing daily expenses.",
                },
                "calculator-aluat": {
                    title: "Calculator Aluat",
                    description:
                        "A dough calculator for working out ingredients and hydration levels when baking.",
                },
                voluntari: {
                    title: "Școala Voluntarilor",
                    description:
                        "A short online course for choir and youth event volunteers, with 14 lessons, a test for each and a certificate at the end.",
                },
                addicted2: {
                    title: "Addicted2 Romania",
                    description:
                        "A bold presentation site for a Minecraft server, with game modes, how to join and one-click IP copy.",
                },
                mrt: {
                    title: "Masa Rotundă Timișoara",
                    description:
                        "The website of a nonprofit association, covering its projects, news, gallery, volunteering and donations.",
                },
                caelestis: {
                    title: "Caelestis",
                    description:
                        "A sheet music portal for a choir, with rehearsal audio for each voice, score viewing, search and downloads.",
                },
                inctcpartituri: {
                    title: "Întâlnirea Corurilor Portal",
                    description:
                        "The sheet music portal for a national choir meeting, with scores and rehearsal audio by voice, filtered by composer.",
                },
                "cor-medjugorje": {
                    title: "Cor Medjugorje",
                    description:
                        "A sheet music portal for the Romanian choir at Medjugorje, with scores, audio for each voice and YouTube links.",
                },
                inctc: {
                    title: "INCT 2026",
                    description:
                        "The event website for the national meeting of Catholic youth choirs in Timișoara, with guests, venue, programme and registration.",
                },
                countdowninctc: {
                    title: "Countdown INCTC",
                    description:
                        "A stage timer for running a live event, with preset countdowns for each moment of the programme.",
                },
                qrcodepermanent: {
                    title: "QR Code Permanent",
                    description:
                        "A redirect page that keeps a printed QR code valid: the destination meeting link can change without reprinting the code.",
                },
                "react-menu-app": {
                    title: "React Navigation App",
                    description:
                        "A small practice app demonstrating React hooks and navigation across five pages.",
                },
            },
        },
        skills: {
            heading: "Skills",
            description: "What I use day to day, and what I'm picking up next.",
            coreHeading: "Core",
            toolsHeading: "Tools & workflow",
            learningHeading: "Currently learning",
        },
        experience: {
            heading: "Experience & education",
            description: "Work and study so far.",
            items: [
                {
                    period: "2024 – Present",
                    title: "Frontend Developer",
                    organization: "Freelance",
                    description:
                        "Building web applications for clients with React and Next.js: responsive, accessible and fast.",
                },
                {
                    period: "2024 – Present",
                    title: "Audio Technician & Choir Bass",
                    organization: "Concert Venues & Choir Team",
                    description:
                        "Setting up and operating professional audio systems for live events, and singing bass in the choir.",
                },
                {
                    period: "2023 – Present",
                    title: "Computer Science Student",
                    organization: "Tibiscus University",
                    description:
                        "Studying web development and software engineering at the Faculty of Computer Science and Informatics (FCIA).",
                },
                {
                    period: "2023 – 2024",
                    title: "Pizza Maker",
                    organization: "Local Restaurant",
                    description:
                        "Fast-paced kitchen work that built my time management and teamwork. Experienced with different dough types and electric ovens.",
                },
                {
                    period: "2019 – 2023",
                    title: "High School Graduate",
                    organization: "Liceul de Arte Ion Vidu",
                    description:
                        "Arts specialisation with a focus on creative design principles and artistic expression.",
                },
            ],
        },
        hobbies: {
            heading: "Outside of work",
            description: "What I do when I'm not writing code.",
            items: {
                "Listening to music": {
                    name: "Listening to music",
                    description:
                        "Exploring new genres and building playlists. Music is part of how I work every day.",
                    linkText: "Follow on Spotify",
                },
                Fishing: {
                    name: "Fishing",
                    description:
                        "Quiet, patient time by the water. My favourite way to disconnect and recharge.",
                },
                "Playing pool": {
                    name: "Playing pool",
                    description:
                        "Friendly but strategic games. A good exercise in geometry and focus.",
                },
                Gaming: {
                    name: "Gaming",
                    description:
                        "Interactive worlds that shape how I think about digital experiences and problem-solving.",
                },
                "Creating prototype apps": {
                    name: "Creating prototype apps",
                    description:
                        "Tinkering with code and sketching UI ideas for the fun of building something new.",
                },
                "Photography & Videography": {
                    name: "Photography & Videography",
                    description:
                        "Capturing moments, shooting video and editing it into a story.",
                    linkText: "Follow on Instagram",
                },
            },
        },
        contact: {
            heading: "Get in touch",
            description:
                "I'm open to frontend roles and freelance projects. Send a message here or email me directly.",
            emailLabel: "Email",
            locationLabel: "Location",
            locationValue: "Timișoara, Romania",
            socialHeading: "Elsewhere",
            form: {
                nameLabel: "Name",
                emailLabel: "Email",
                subjectLabel: "Subject",
                messageLabel: "Message",
                namePlaceholder: "Your name",
                emailPlaceholder: "you@example.com",
                subjectPlaceholder: "What is this about?",
                messagePlaceholder: "Tell me about the role or project",
                consentEmail: "I agree to be contacted by email about my message.",
                consentAccuracy:
                    "I confirm that the information I provided is correct.",
                submit: "Send message",
                sending: "Sending…",
                success: "Message sent. I'll get back to you soon.",
                error: "The message could not be sent. Please try again or email me directly.",
            },
        },
        footer: {
            rights: "All rights reserved.",
            backToTop: "Back to top",
        },
    },
    ro: {
        nav: {
            about: "Despre mine",
            projects: "Proiecte",
            skills: "Abilități",
            experience: "Experiență",
            hobbies: "Pasiuni",
            contact: "Contact",
        },
        hero: {
            status: "Disponibil pentru angajare",
            role: "Dezvoltator frontend din Timișoara. Construiesc interfețe web clare și rapide.",
            description:
                "Sunt student la Informatică și dezvoltator freelance. Lucrez cu React, Next.js și Tailwind CSS și duc proiectele de la prima schiță până la site-ul publicat, cu atenție la accesibilitate și detalii.",
            ctaWork: "Vezi proiectele",
            ctaCv: "Descarcă CV-ul",
            stats: {
                yearsExp: "ani de experiență",
                projects: "proiecte realizate",
                technologies: "tehnologii",
            },
        },
        about: {
            heading: "Design, cod și sunet",
            p1: "Sunt student în anul al doilea la Informatică, la Universitatea Tibiscus din Timișoara, și mă concentrez pe dezvoltarea frontend. Am absolvit un liceu de arte, așa că mă interesează la fel de mult cum arată și cum se simte o interfață, nu doar cum este construită.",
            p2: "Pe lângă web, instalez și operez sisteme de sunet la concerte și cânt bas într-un cor. Amândouă m-au învățat precizia, lucrul în echipă și cum să ascult.",
            details: {
                nameLabel: "Nume",
                locationLabel: "Locație",
                locationValue: "Timișoara, România",
                emailLabel: "Email",
                availabilityLabel: "Disponibilitate",
                availabilityValue: "Disponibil pentru angajare",
            },
        },
        projects: {
            heading: "Proiecte selectate",
            description:
                "Patru proiecte de care sunt cel mai mândru, urmate de instrumente mai mici și experimente.",
            moreHeading: "Alte proiecte",
            live: "Site live",
            source: "Cod sursă",
            items: {
                "mgm-bastion": {
                    title: "MGM Bastion",
                    description:
                        "Un meniu digital bilingv pentru un restaurant italian din Bastionul istoric al Timișoarei. Pizza pe vatră și panini, într-o prezentare caldă, rustică.",
                },
                feeling: {
                    title: "Feeling",
                    description:
                        "O aplicație liniștită care îți propune versete și scurte reflecții în funcție de starea ta, cu potrivire asistată de AI.",
                },
                "harmonia-christi": {
                    title: "Harmonia Christi",
                    description:
                        "O platformă de partituri pentru un cor, protejată prin coduri de acces. Coriștii își găsesc partiturile și înregistrările de repetiție într-un singur loc.",
                },
                portfolio: {
                    title: "Site Portofoliu",
                    description:
                        "Acest site. Construit cu Next.js, TypeScript și Tailwind CSS, în patru limbi, cu animații discrete și marcaj accesibil.",
                },
                "2026-lockin": {
                    title: "Quiet Progress (2026 Lock In)",
                    description:
                        "Un tracker privat de obiceiuri, în React, care sincronizează progresul zilnic cu Google Sheets prin webhook-uri.",
                },
                "code-preview": {
                    title: "CodePen Local",
                    description:
                        "Un editor de cod în browser, funcțional offline, cu import prin drag-and-drop și export în zip.",
                },
                scream: {
                    title: "Scream Runner",
                    description:
                        "Un endless runner 3D controlat vocal: strigi în microfon ca să înaintezi.",
                },
                moneytracker: {
                    title: "Money Tracker",
                    description:
                        "O aplicație de finanțe personale pentru urmărirea și gestionarea cheltuielilor zilnice.",
                },
                "calculator-aluat": {
                    title: "Calculator Aluat",
                    description:
                        "Un calculator pentru ingredientele și hidratarea aluatului, util la copt.",
                },
                voluntari: {
                    title: "Școala Voluntarilor",
                    description:
                        "Un curs online scurt pentru voluntarii corului și ai evenimentelor pentru tineri, cu 14 lecții, câte un test și un certificat la final.",
                },
                addicted2: {
                    title: "Addicted2 Romania",
                    description:
                        "Un site de prezentare îndrăzneț pentru un server de Minecraft, cu modurile de joc, pașii de intrare și copierea IP-ului dintr-un clic.",
                },
                mrt: {
                    title: "Masa Rotundă Timișoara",
                    description:
                        "Site-ul unei asociații nonprofit, cu proiecte, noutăți, galerie, voluntariat și donații.",
                },
                caelestis: {
                    title: "Caelestis",
                    description:
                        "Un portal de partituri pentru un cor, cu audio de repetiție pentru fiecare voce, vizualizare de partituri, căutare și descărcări.",
                },
                inctcpartituri: {
                    title: "Portal Întâlnirea Corurilor",
                    description:
                        "Portalul de partituri al unei întâlniri naționale a corurilor, cu partituri și audio pe voci, filtrate după compozitor.",
                },
                "cor-medjugorje": {
                    title: "Cor Medjugorje",
                    description:
                        "Un portal de partituri pentru corul român de la Medjugorje, cu partituri, audio pentru fiecare voce și linkuri YouTube.",
                },
                inctc: {
                    title: "INCT 2026",
                    description:
                        "Site-ul evenimentului pentru întâlnirea națională a corurilor de tineret catolice din Timișoara, cu invitați, locație, program și înscriere.",
                },
                countdowninctc: {
                    title: "Countdown INCTC",
                    description:
                        "Un cronometru de scenă pentru evenimente live, cu timpi prestabiliți pentru fiecare moment din program.",
                },
                qrcodepermanent: {
                    title: "QR Code Permanent",
                    description:
                        "O pagină de redirecționare care păstrează valabil un cod QR tipărit: linkul întâlnirii se poate schimba fără a retipări codul.",
                },
                "react-menu-app": {
                    title: "React Navigation App",
                    description:
                        "O mică aplicație de exercițiu care demonstrează hook-uri React și navigarea între cinci pagini.",
                },
            },
        },
        skills: {
            heading: "Abilități",
            description: "Ce folosesc zi de zi și ce învăț în continuare.",
            coreHeading: "De bază",
            toolsHeading: "Instrumente și flux de lucru",
            learningHeading: "Învăț acum",
        },
        experience: {
            heading: "Experiență și educație",
            description: "Muncă și studii până acum.",
            items: [
                {
                    period: "2024 – Prezent",
                    title: "Dezvoltator Frontend",
                    organization: "Freelance",
                    description:
                        "Dezvolt aplicații web pentru clienți cu React și Next.js: responsive, accesibile și rapide.",
                },
                {
                    period: "2024 – Prezent",
                    title: "Tehnician Audio și Bas în Cor",
                    organization: "Săli de concerte și ansamblu coral",
                    description:
                        "Instalez și operez sisteme audio profesionale la evenimente live și cânt bas în cor.",
                },
                {
                    period: "2023 – Prezent",
                    title: "Student la Informatică",
                    organization: "Universitatea Tibiscus",
                    description:
                        "Studiez dezvoltare web și inginerie software la Facultatea de Calculatoare și Informatică Aplicată (FCIA).",
                },
                {
                    period: "2023 – 2024",
                    title: "Pizzar",
                    organization: "Restaurant local",
                    description:
                        "Muncă într-o bucătărie cu ritm alert, care mi-a format organizarea timpului și lucrul în echipă. Experiență cu diverse tipuri de aluat și cuptoare electrice.",
                },
                {
                    period: "2019 – 2023",
                    title: "Absolvent de liceu",
                    organization: "Liceul de Arte Ion Vidu",
                    description:
                        "Specializare artistică, axată pe principii de design creativ și expresie artistică.",
                },
            ],
        },
        hobbies: {
            heading: "În afara muncii",
            description: "Ce fac atunci când nu scriu cod.",
            items: {
                "Listening to music": {
                    name: "Muzică",
                    description:
                        "Descopăr genuri noi și îmi fac playlisturi. Muzica face parte din felul în care lucrez zi de zi.",
                    linkText: "Urmărește pe Spotify",
                },
                Fishing: {
                    name: "Pescuit",
                    description:
                        "Timp liniștit, cu răbdare, la marginea apei. Felul meu preferat de a mă deconecta.",
                },
                "Playing pool": {
                    name: "Biliard",
                    description:
                        "Partide amicale, dar strategice. Un exercițiu bun de geometrie și concentrare.",
                },
                Gaming: {
                    name: "Gaming",
                    description:
                        "Lumi interactive care îmi influențează felul în care gândesc experiențele digitale și rezolvarea problemelor.",
                },
                "Creating prototype apps": {
                    name: "Prototipuri de aplicații",
                    description:
                        "Mă joc cu cod și schițez idei de interfață, din plăcerea de a construi ceva nou.",
                },
                "Photography & Videography": {
                    name: "Fotografie și video",
                    description:
                        "Surprind momente, filmez și montez materialul într-o poveste.",
                    linkText: "Urmărește pe Instagram",
                },
            },
        },
        contact: {
            heading: "Contact",
            description:
                "Sunt deschis la roluri de frontend și la proiecte freelance. Trimite-mi un mesaj aici sau scrie-mi direct pe email.",
            emailLabel: "Email",
            locationLabel: "Locație",
            locationValue: "Timișoara, România",
            socialHeading: "Mă găsești și aici",
            form: {
                nameLabel: "Nume",
                emailLabel: "Email",
                subjectLabel: "Subiect",
                messageLabel: "Mesaj",
                namePlaceholder: "Numele tău",
                emailPlaceholder: "tu@exemplu.com",
                subjectPlaceholder: "Despre ce este vorba?",
                messagePlaceholder: "Spune-mi despre rol sau proiect",
                consentEmail: "Sunt de acord să fiu contactat prin email în legătură cu mesajul meu.",
                consentAccuracy:
                    "Confirm că informațiile furnizate sunt corecte.",
                submit: "Trimite mesajul",
                sending: "Se trimite…",
                success: "Mesaj trimis. Îți răspund în curând.",
                error: "Mesajul nu a putut fi trimis. Încearcă din nou sau scrie-mi direct pe email.",
            },
        },
        footer: {
            rights: "Toate drepturile rezervate.",
            backToTop: "Înapoi sus",
        },
    },
    de: {
        nav: {
            about: "Über mich",
            projects: "Projekte",
            skills: "Fähigkeiten",
            experience: "Erfahrung",
            hobbies: "Hobbys",
            contact: "Kontakt",
        },
        hero: {
            status: "Offen für Jobangebote",
            role: "Frontend-Entwickler aus Timișoara. Ich baue klare und schnelle Weboberflächen.",
            description:
                "Ich bin Informatikstudent und freiberuflicher Entwickler und arbeite mit React, Next.js und Tailwind CSS. Ich begleite Projekte von der ersten Skizze bis zur veröffentlichten Website, mit Blick für Barrierefreiheit und Details.",
            ctaWork: "Projekte ansehen",
            ctaCv: "Lebenslauf herunterladen",
            stats: {
                yearsExp: "Jahre Erfahrung",
                projects: "umgesetzte Projekte",
                technologies: "Technologien",
            },
        },
        about: {
            heading: "Design, Code und Klang",
            p1: "Ich studiere im zweiten Jahr Informatik an der Tibiscus-Universität in Timișoara, mit Schwerpunkt Frontend-Entwicklung. Ich habe ein Kunstgymnasium abgeschlossen, deshalb ist mir genauso wichtig, wie eine Oberfläche aussieht und sich anfühlt, wie die Art, wie sie gebaut ist.",
            p2: "Neben der Webentwicklung baue ich Tontechnik für Konzerte auf, betreue sie und singe Bass in einem Chor. Beides hat mich Präzision, Teamarbeit und genaues Zuhören gelehrt.",
            details: {
                nameLabel: "Name",
                locationLabel: "Standort",
                locationValue: "Timișoara, Rumänien",
                emailLabel: "E-Mail",
                availabilityLabel: "Verfügbarkeit",
                availabilityValue: "Offen für Jobangebote",
            },
        },
        projects: {
            heading: "Ausgewählte Arbeiten",
            description:
                "Vier Projekte, auf die ich besonders stolz bin, gefolgt von kleineren Tools und Experimenten.",
            moreHeading: "Weitere Projekte",
            live: "Live-Website",
            source: "Quellcode",
            items: {
                "mgm-bastion": {
                    title: "MGM Bastion",
                    description:
                        "Eine zweisprachige digitale Speisekarte für ein italienisches Restaurant in der historischen Bastion von Timișoara. Holzofenpizza und Panini in warmer, rustikaler Optik.",
                },
                feeling: {
                    title: "Feeling",
                    description:
                        "Eine ruhige App, die passend zur eigenen Stimmung Verse und kurze Gedanken vorschlägt, mit KI-gestützter Auswahl.",
                },
                "harmonia-christi": {
                    title: "Harmonia Christi",
                    description:
                        "Eine Notenplattform für einen Chor, geschützt durch Zugangscodes. Die Sänger finden Partituren und Probenaufnahmen an einem Ort.",
                },
                portfolio: {
                    title: "Portfolio-Website",
                    description:
                        "Diese Website. Entwickelt mit Next.js, TypeScript und Tailwind CSS, in vier Sprachen, mit dezenten Animationen und barrierefreiem Markup.",
                },
                "2026-lockin": {
                    title: "Quiet Progress (2026 Lock In)",
                    description:
                        "Ein privater Gewohnheits-Tracker in React, der den täglichen Fortschritt per Webhooks mit Google Sheets synchronisiert.",
                },
                "code-preview": {
                    title: "CodePen Local",
                    description:
                        "Ein offline nutzbarer Code-Editor im Browser mit Drag-and-Drop-Import und Zip-Export.",
                },
                scream: {
                    title: "Scream Runner",
                    description:
                        "Ein sprachgesteuerter 3D-Endless-Runner: Man schreit ins Mikrofon, um sich zu bewegen.",
                },
                moneytracker: {
                    title: "Money Tracker",
                    description:
                        "Eine App für persönliche Finanzen, mit der sich tägliche Ausgaben erfassen und verwalten lassen.",
                },
                "calculator-aluat": {
                    title: "Teig-Rechner",
                    description:
                        "Ein Rechner für Teigzutaten und Hydration beim Backen.",
                },
                voluntari: {
                    title: "Școala Voluntarilor",
                    description:
                        "Ein kurzer Online-Kurs für Freiwillige bei Chor- und Jugendveranstaltungen, mit 14 Lektionen, je einem Test und einem Zertifikat am Ende.",
                },
                addicted2: {
                    title: "Addicted2 Romania",
                    description:
                        "Eine auffällige Präsentationsseite für einen Minecraft-Server, mit Spielmodi, Anleitung zum Beitreten und IP-Kopie per Klick.",
                },
                mrt: {
                    title: "Masa Rotundă Timișoara",
                    description:
                        "Die Website eines gemeinnützigen Vereins mit Projekten, Neuigkeiten, Galerie, Freiwilligenarbeit und Spenden.",
                },
                caelestis: {
                    title: "Caelestis",
                    description:
                        "Ein Notenportal für einen Chor, mit Probenaudio für jede Stimme, Notenansicht, Suche und Downloads.",
                },
                inctcpartituri: {
                    title: "Portal Întâlnirea Corurilor",
                    description:
                        "Das Notenportal eines nationalen Chortreffens, mit Noten und Probenaudio nach Stimmen, filterbar nach Komponist.",
                },
                "cor-medjugorje": {
                    title: "Cor Medjugorje",
                    description:
                        "Ein Notenportal für den rumänischen Chor in Medjugorje, mit Noten, Audio für jede Stimme und YouTube-Links.",
                },
                inctc: {
                    title: "INCT 2026",
                    description:
                        "Die Veranstaltungswebsite für das nationale Treffen katholischer Jugendchöre in Timișoara, mit Gästen, Ort, Programm und Anmeldung.",
                },
                countdowninctc: {
                    title: "Countdown INCTC",
                    description:
                        "Ein Bühnen-Timer für Live-Veranstaltungen, mit voreingestellten Countdowns für jeden Programmpunkt.",
                },
                qrcodepermanent: {
                    title: "QR Code Permanent",
                    description:
                        "Eine Weiterleitungsseite, die einen gedruckten QR-Code gültig hält: Der Meeting-Link lässt sich ändern, ohne den Code neu zu drucken.",
                },
                "react-menu-app": {
                    title: "React Navigation App",
                    description:
                        "Eine kleine Übungs-App, die React-Hooks und die Navigation über fünf Seiten zeigt.",
                },
            },
        },
        skills: {
            heading: "Fähigkeiten",
            description: "Womit ich täglich arbeite und was ich als Nächstes lerne.",
            coreHeading: "Kernkompetenzen",
            toolsHeading: "Werkzeuge und Workflow",
            learningHeading: "Lerne ich gerade",
        },
        experience: {
            heading: "Erfahrung und Ausbildung",
            description: "Arbeit und Studium bisher.",
            items: [
                {
                    period: "2024 – Heute",
                    title: "Frontend-Entwickler",
                    organization: "Freiberuflich",
                    description:
                        "Entwicklung von Webanwendungen für Kunden mit React und Next.js: responsiv, barrierefrei und schnell.",
                },
                {
                    period: "2024 – Heute",
                    title: "Tontechniker und Chorbassist",
                    organization: "Konzertsäle und Chor",
                    description:
                        "Aufbau und Betrieb professioneller Tonanlagen bei Live-Veranstaltungen sowie Bass im Chor.",
                },
                {
                    period: "2023 – Heute",
                    title: "Informatikstudent",
                    organization: "Tibiscus-Universität",
                    description:
                        "Studium der Webentwicklung und Softwaretechnik an der Fakultät für Informatik und angewandte Informatik (FCIA).",
                },
                {
                    period: "2023 – 2024",
                    title: "Pizzabäcker",
                    organization: "Lokales Restaurant",
                    description:
                        "Arbeit in einer schnell getakteten Küche, die mein Zeitmanagement und meine Teamfähigkeit geprägt hat. Erfahrung mit verschiedenen Teigarten und Elektroöfen.",
                },
                {
                    period: "2019 – 2023",
                    title: "Gymnasialabschluss",
                    organization: "Kunstlyzeum Ion Vidu",
                    description:
                        "Künstlerischer Schwerpunkt mit Fokus auf kreative Gestaltungsprinzipien und künstlerischen Ausdruck.",
                },
            ],
        },
        hobbies: {
            heading: "Abseits der Arbeit",
            description: "Was ich mache, wenn ich nicht programmiere.",
            items: {
                "Listening to music": {
                    name: "Musik hören",
                    description:
                        "Neue Genres entdecken und Playlists zusammenstellen. Musik gehört zu meinem Arbeitsalltag.",
                    linkText: "Auf Spotify folgen",
                },
                Fishing: {
                    name: "Angeln",
                    description:
                        "Ruhige, geduldige Stunden am Wasser. Meine liebste Art abzuschalten.",
                },
                "Playing pool": {
                    name: "Billard",
                    description:
                        "Freundschaftliche, aber strategische Partien. Eine gute Übung in Geometrie und Konzentration.",
                },
                Gaming: {
                    name: "Gaming",
                    description:
                        "Interaktive Welten, die prägen, wie ich über digitale Erlebnisse und Problemlösung denke.",
                },
                "Creating prototype apps": {
                    name: "Prototypen bauen",
                    description:
                        "Mit Code tüfteln und UI-Ideen skizzieren, aus Freude daran, etwas Neues zu bauen.",
                },
                "Photography & Videography": {
                    name: "Foto und Video",
                    description:
                        "Momente festhalten, filmen und das Material zu einer Geschichte schneiden.",
                    linkText: "Auf Instagram folgen",
                },
            },
        },
        contact: {
            heading: "Kontakt",
            description:
                "Ich bin offen für Frontend-Stellen und freiberufliche Projekte. Schreib mir hier oder direkt per E-Mail.",
            emailLabel: "E-Mail",
            locationLabel: "Standort",
            locationValue: "Timișoara, Rumänien",
            socialHeading: "Auch hier zu finden",
            form: {
                nameLabel: "Name",
                emailLabel: "E-Mail",
                subjectLabel: "Betreff",
                messageLabel: "Nachricht",
                namePlaceholder: "Dein Name",
                emailPlaceholder: "du@beispiel.de",
                subjectPlaceholder: "Worum geht es?",
                messagePlaceholder: "Erzähl mir von der Stelle oder dem Projekt",
                consentEmail: "Ich bin einverstanden, zu meiner Nachricht per E-Mail kontaktiert zu werden.",
                consentAccuracy:
                    "Ich bestätige, dass meine Angaben korrekt sind.",
                submit: "Nachricht senden",
                sending: "Wird gesendet…",
                success: "Nachricht gesendet. Ich melde mich bald.",
                error: "Die Nachricht konnte nicht gesendet werden. Bitte versuche es erneut oder schreib mir direkt per E-Mail.",
            },
        },
        footer: {
            rights: "Alle Rechte vorbehalten.",
            backToTop: "Nach oben",
        },
    },
    it: {
        nav: {
            about: "Chi sono",
            projects: "Progetti",
            skills: "Competenze",
            experience: "Esperienza",
            hobbies: "Hobby",
            contact: "Contatti",
        },
        hero: {
            status: "Disponibile per lavoro",
            role: "Sviluppatore frontend a Timișoara. Realizzo interfacce web chiare e veloci.",
            description:
                "Sono uno studente di Informatica e sviluppatore freelance. Lavoro con React, Next.js e Tailwind CSS e seguo i progetti dal primo schizzo al sito pubblicato, con attenzione all'accessibilità e ai dettagli.",
            ctaWork: "Vedi i progetti",
            ctaCv: "Scarica il CV",
            stats: {
                yearsExp: "anni di esperienza",
                projects: "progetti realizzati",
                technologies: "tecnologie",
            },
        },
        about: {
            heading: "Design, codice e suono",
            p1: "Sono al secondo anno di Informatica all'Università Tibiscus di Timișoara e mi concentro sullo sviluppo frontend. Mi sono diplomato in un liceo artistico, quindi per me conta l'aspetto e la sensazione di un'interfaccia tanto quanto il modo in cui è costruita.",
            p2: "Oltre al web, allestisco e gestisco l'audio dal vivo per i concerti e canto come basso in un coro. Entrambe le attività mi hanno insegnato precisione, lavoro di squadra e ascolto.",
            details: {
                nameLabel: "Nome",
                locationLabel: "Luogo",
                locationValue: "Timișoara, Romania",
                emailLabel: "Email",
                availabilityLabel: "Disponibilità",
                availabilityValue: "Disponibile per lavoro",
            },
        },
        projects: {
            heading: "Lavori selezionati",
            description:
                "Quattro progetti di cui vado più fiero, seguiti da strumenti più piccoli ed esperimenti.",
            moreHeading: "Altri progetti",
            live: "Sito live",
            source: "Codice sorgente",
            items: {
                "mgm-bastion": {
                    title: "MGM Bastion",
                    description:
                        "Un menu digitale bilingue per un ristorante italiano nello storico Bastione di Timișoara. Pizza al forno a legna e panini, con un aspetto caldo e rustico.",
                },
                feeling: {
                    title: "Feeling",
                    description:
                        "Un'app tranquilla che propone versetti e brevi riflessioni in base al tuo stato d'animo, con abbinamento assistito dall'IA.",
                },
                "harmonia-christi": {
                    title: "Harmonia Christi",
                    description:
                        "Una piattaforma di spartiti per un coro, protetta da codici di accesso. I coristi trovano spartiti e audio per le prove in un unico posto.",
                },
                portfolio: {
                    title: "Sito Portfolio",
                    description:
                        "Questo sito. Realizzato con Next.js, TypeScript e Tailwind CSS, in quattro lingue, con animazioni discrete e markup accessibile.",
                },
                "2026-lockin": {
                    title: "Quiet Progress (2026 Lock In)",
                    description:
                        "Un tracker privato di abitudini in React che sincronizza i progressi giornalieri con Google Sheets tramite webhook.",
                },
                "code-preview": {
                    title: "CodePen Local",
                    description:
                        "Un editor di codice nel browser, utilizzabile offline, con importazione drag-and-drop ed esportazione in zip.",
                },
                scream: {
                    title: "Scream Runner",
                    description:
                        "Un endless runner 3D a controllo vocale: si urla nel microfono per muoversi.",
                },
                moneytracker: {
                    title: "Money Tracker",
                    description:
                        "Un'app di finanza personale per registrare e gestire le spese quotidiane.",
                },
                "calculator-aluat": {
                    title: "Calcolatore Impasti",
                    description:
                        "Un calcolatore per gli ingredienti e l'idratazione dell'impasto.",
                },
                voluntari: {
                    title: "Școala Voluntarilor",
                    description:
                        "Un breve corso online per i volontari del coro e degli eventi per giovani, con 14 lezioni, un test per ciascuna e un certificato finale.",
                },
                addicted2: {
                    title: "Addicted2 Romania",
                    description:
                        "Un sito di presentazione d'impatto per un server Minecraft, con modalità di gioco, istruzioni per entrare e copia dell'IP con un clic.",
                },
                mrt: {
                    title: "Masa Rotundă Timișoara",
                    description:
                        "Il sito di un'associazione nonprofit, con progetti, notizie, galleria, volontariato e donazioni.",
                },
                caelestis: {
                    title: "Caelestis",
                    description:
                        "Un portale di spartiti per un coro, con audio di prova per ogni voce, visualizzazione degli spartiti, ricerca e download.",
                },
                inctcpartituri: {
                    title: "Portale Întâlnirea Corurilor",
                    description:
                        "Il portale di spartiti di un incontro nazionale dei cori, con spartiti e audio per voce, filtrabili per compositore.",
                },
                "cor-medjugorje": {
                    title: "Cor Medjugorje",
                    description:
                        "Un portale di spartiti per il coro romeno di Medjugorje, con spartiti, audio per ogni voce e link YouTube.",
                },
                inctc: {
                    title: "INCT 2026",
                    description:
                        "Il sito dell'incontro nazionale dei cori giovanili cattolici a Timișoara, con ospiti, luogo, programma e iscrizioni.",
                },
                countdowninctc: {
                    title: "Countdown INCTC",
                    description:
                        "Un timer da palco per gestire eventi dal vivo, con conti alla rovescia preimpostati per ogni momento del programma.",
                },
                qrcodepermanent: {
                    title: "QR Code Permanent",
                    description:
                        "Una pagina di reindirizzamento che mantiene valido un codice QR stampato: il link della riunione può cambiare senza ristampare il codice.",
                },
                "react-menu-app": {
                    title: "React Navigation App",
                    description:
                        "Una piccola app di esercizio che mostra gli hook di React e la navigazione tra cinque pagine.",
                },
            },
        },
        skills: {
            heading: "Competenze",
            description: "Cosa uso ogni giorno e cosa sto imparando.",
            coreHeading: "Principali",
            toolsHeading: "Strumenti e flusso di lavoro",
            learningHeading: "Sto imparando",
        },
        experience: {
            heading: "Esperienza e istruzione",
            description: "Lavoro e studio fino a oggi.",
            items: [
                {
                    period: "2024 – Presente",
                    title: "Sviluppatore Frontend",
                    organization: "Freelance",
                    description:
                        "Sviluppo applicazioni web per clienti con React e Next.js: responsive, accessibili e veloci.",
                },
                {
                    period: "2024 – Presente",
                    title: "Tecnico Audio e Basso Corale",
                    organization: "Sale da concerto e coro",
                    description:
                        "Allestisco e gestisco impianti audio professionali per eventi dal vivo e canto come basso nel coro.",
                },
                {
                    period: "2023 – Presente",
                    title: "Studente di Informatica",
                    organization: "Università Tibiscus",
                    description:
                        "Studio sviluppo web e ingegneria del software presso la Facoltà di Informatica e Informatica Applicata (FCIA).",
                },
                {
                    period: "2023 – 2024",
                    title: "Pizzaiolo",
                    organization: "Ristorante locale",
                    description:
                        "Lavoro in una cucina dai ritmi serrati, che ha formato la mia gestione del tempo e il lavoro di squadra. Esperienza con diversi tipi di impasto e forni elettrici.",
                },
                {
                    period: "2019 – 2023",
                    title: "Diploma di scuola superiore",
                    organization: "Liceo Artistico Ion Vidu",
                    description:
                        "Indirizzo artistico, con attenzione ai principi del design creativo e all'espressione artistica.",
                },
            ],
        },
        hobbies: {
            heading: "Fuori dal lavoro",
            description: "Cosa faccio quando non scrivo codice.",
            items: {
                "Listening to music": {
                    name: "Ascoltare musica",
                    description:
                        "Scopro nuovi generi e creo playlist. La musica fa parte del mio modo di lavorare ogni giorno.",
                    linkText: "Segui su Spotify",
                },
                Fishing: {
                    name: "Pesca",
                    description:
                        "Tempo tranquillo e paziente vicino all'acqua. Il mio modo preferito per staccare.",
                },
                "Playing pool": {
                    name: "Biliardo",
                    description:
                        "Partite amichevoli ma strategiche. Un buon esercizio di geometria e concentrazione.",
                },
                Gaming: {
                    name: "Gaming",
                    description:
                        "Mondi interattivi che influenzano il mio modo di pensare le esperienze digitali e il problem solving.",
                },
                "Creating prototype apps": {
                    name: "Prototipi di app",
                    description:
                        "Sperimento con il codice e abbozzo idee di interfaccia, per il piacere di costruire qualcosa di nuovo.",
                },
                "Photography & Videography": {
                    name: "Fotografia e video",
                    description:
                        "Catturo momenti, giro video e li monto in una storia.",
                    linkText: "Segui su Instagram",
                },
            },
        },
        contact: {
            heading: "Contatti",
            description:
                "Sono aperto a ruoli frontend e a progetti freelance. Scrivimi da qui o direttamente via email.",
            emailLabel: "Email",
            locationLabel: "Luogo",
            locationValue: "Timișoara, Romania",
            socialHeading: "Mi trovi anche qui",
            form: {
                nameLabel: "Nome",
                emailLabel: "Email",
                subjectLabel: "Oggetto",
                messageLabel: "Messaggio",
                namePlaceholder: "Il tuo nome",
                emailPlaceholder: "tu@esempio.it",
                subjectPlaceholder: "Di cosa si tratta?",
                messagePlaceholder: "Parlami del ruolo o del progetto",
                consentEmail: "Accetto di essere contattato via email riguardo al mio messaggio.",
                consentAccuracy:
                    "Confermo che le informazioni fornite sono corrette.",
                submit: "Invia messaggio",
                sending: "Invio in corso…",
                success: "Messaggio inviato. Ti rispondo presto.",
                error: "Non è stato possibile inviare il messaggio. Riprova o scrivimi direttamente via email.",
            },
        },
        footer: {
            rights: "Tutti i diritti riservati.",
            backToTop: "Torna su",
        },
    },
};
