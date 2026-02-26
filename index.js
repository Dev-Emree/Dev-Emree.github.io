import * as THREE from "https://unpkg.com/three@0.170.0/build/three.module.js";

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg-canvas"),
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
// Optimization: Cap pixel ratio to save GPU resources on high-DPI screens
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Geometry and Materials
const baseGeometry = new THREE.TorusKnotGeometry(1.5, 0.4, 150, 20);
const positionAttribute = baseGeometry.attributes.position;
const spherePositions = [];

// Transform TorusKnot to Sphere for Morph Targets
const tubularSegments = 150;
const radialSegments = 20;

for (let i = 0; i < positionAttribute.count; i++) {
    // Determine grid position based on index
    // Note: The loop logic from original minified code:
    // let t=21,o=Math.floor(i/21),r=i%21, ...

    const stride = 21;
    const row = Math.floor(i / stride);
    const col = i % stride;

    const u = (row / 150) * Math.PI * 2;
    const v = (col / 20) * Math.PI;

    const x = 2 * Math.sin(v) * Math.cos(u);
    const y = 2 * Math.cos(v);
    const z = 2 * Math.sin(v) * Math.sin(u);

    spherePositions.push(x, y, z);
}

baseGeometry.morphAttributes.position = [new THREE.Float32BufferAttribute(spherePositions, 3)];

const material = new THREE.MeshStandardMaterial({
    color: 0xbb86fc,
    emissive: 0xbb86fc,
    emissiveIntensity: 0.5,
    wireframe: true,
    roughness: 0.1,
    metalness: 0.5,
    morphTargets: true
});

const morphMesh = new THREE.Mesh(baseGeometry, material);
scene.add(morphMesh);

// Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 700; // Original code had this variable
const posArray = new Float32Array(2100); // 700 * 3
for (let i = 0; i < 2100; i++) {
    posArray[i] = (Math.random() - 0.5) * 15;
}
particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0xffffff,
    transparent: true,
    opacity: 0.8
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 2);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Interaction
let mouseX = 0;
let mouseY = 0;
document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX / window.innerWidth - 0.5;
    mouseY = event.clientY / window.innerHeight - 0.5;
});

// Animation
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    morphMesh.rotation.y = 0.1 * elapsedTime;
    morphMesh.rotation.x = 0.05 * elapsedTime;
    particlesMesh.rotation.y = 0.05 * elapsedTime;

    // Scroll effect
    const bodyTop = document.body.getBoundingClientRect().top;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;

    // Calculate scroll ratio (0 to 1) based on scroll position
    // Formula from original code: r=Math.min(1,Math.max(0,-t/(.6*o)))
    let scrollRatio = Math.min(1, Math.max(0, -bodyTop / (0.6 * scrollHeight)));

    morphMesh.morphTargetInfluences[0] = 1 - scrollRatio;

    const isMobile = window.innerWidth < 768;
    const offset = isMobile ? 2 : -2;

    // Position interpolation
    // morphMesh.position.x = n + (0 - n) * r;
    morphMesh.position.x = offset + (0 - offset) * scrollRatio;

    // Camera movement based on scroll
    camera.position.y = -0.002 * bodyTop;

    // Smooth camera movement based on mouse
    camera.position.x += (0.5 * mouseX - camera.position.x) * 0.05;
    camera.position.y += (-(0.5 * mouseY) - camera.position.y) * 0.05;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

camera.position.z = 5;
animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Note: We keep pixel ratio fixed or update it if needed, but usually fixed is fine.
});

// Translations and Typing logic
const translations = {
  en: {
    nav_about: "About",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    hero_greeting: "Hello, I am",
    hero_cta_portfolio: "View Work",
    hero_cta_contact: "Contact Me",
    about_title: "About Me",
    about_text: "I am a software developer with a passion for creating innovative designs and user-friendly experiences. By combining aesthetics with functionality, I help brands tell their stories in the most impressive way. I closely follow modern web technologies and design trends, aiming to leave a unique touch on every project.",
    portfolio_title: "Selected Works",
    project_1_desc: "API & Backend Architecture",
    project_1_role: "System Architect",
    project_2_desc: "Mobile App Development",
    project_2_role: "Dev Team Member",
    project_3_desc: "Web Platform",
    project_3_role: "Dev Team Member",
    contact_title: "Contact",
    contact_text: "Ready for your next project? <br> Let's create something amazing together.",
    footer_rights: "All rights reserved.",
    typed_strings: ["Innovative Technology Enthusiast", "Solution Architect", "Designing Creative Web Interfaces", "Building Scalable API Architectures", "Developing High-Performance Mobile Apps", "Optimizing Database Performance"],
    code_role: "'Creative Developer'",
    code_hire: "Let's build something amazing!"
  },
  tr: {
    nav_about: "Hakkımda",
    nav_portfolio: "Portfolyo",
    nav_contact: "İletişim",
    hero_greeting: "Merhaba, ben",
    hero_cta_portfolio: "Çalışmalarımı Gör",
    hero_cta_contact: "İletişime Geç",
    about_title: "Hakkımda",
    about_text: "Yenilikçi tasarımlar ve kullanıcı dostu deneyimler yaratma tutkusu olan bir yazılım geliştiriciyim. Estetiği fonksiyonellikle birleştirerek, markaların hikayelerini en etkileyici şekilde anlatmalarına yardımcı oluyorum. Modern web teknolojileri ve tasarım trendlerini yakından takip ederek, her projede özgün bir dokunuş bırakmayı hedefliyorum.",
    portfolio_title: "Seçili İşler",
    project_1_desc: "API & Backend Mimarisi",
    project_1_role: "Sistem Mimarı",
    project_2_desc: "Mobil Uygulama Geliştirme",
    project_2_role: "Geliştirici Ekip Üyesi",
    project_3_desc: "Web Platformu",
    project_3_role: "Geliştirici Ekip Üyesi",
    contact_title: "İletişim",
    contact_text: "Bir sonraki projeniz için hazır mısınız? <br> Hadi birlikte harika bir şeyler yaratalım.",
    footer_rights: "Tüm hakları saklıdır.",
    typed_strings: ["Yenilikçi Teknoloji Tutkunu", "Yaratıcı Web Arayüzleri Tasarlayan", "Yüksek Performanslı Mobil Uygulamalar Geliştiren", "Ölçeklenebilir API Mimarileri Kuran", "Çözüm Mimarı", "Veri Tabanı Performansını Optimize Eden"],
    code_role: "'Yaratıcı Geliştirici'",
    code_hire: "Harika bir şeyler yapalım!"
  },
  ru: {
    nav_about: "Обо мне",
    nav_portfolio: "Портфолио",
    nav_contact: "Контакты",
    hero_greeting: "Привет, я",
    hero_cta_portfolio: "Мои работы",
    hero_cta_contact: "Связаться",
    about_title: "Обо мне",
    about_text: "Я разработчик программного обеспечения со страстью к созданию инновационного дизайна и удобного пользовательского опыта. Сочетая эстетику с функциональностью, я помогаю брендам рассказывать свои истории наиболее впечатляющим образом.",
    portfolio_title: "Избранные работы",
    project_1_desc: "API и Backend-архитектура",
    project_1_role: "Системный архитектор",
    project_2_desc: "Разработка мобильных приложений",
    project_2_role: "Член команды разработчиков",
    project_3_desc: "Веб-платформа",
    project_3_role: "Член команды разработчиков",
    contact_title: "Контакты",
    contact_text: "Готовы к следующему проекту? <br> Давайте создадим что-то удивительное вместе.",
    footer_rights: "Все права защищены.",
    typed_strings: ["Энтузиаст инновационных технологий", "Дизайн креативных веб-интерфейсов", "Разработка высокопроизводительных мобильных приложений", "Создание масштабируемых API", "Архитектор решений", "Оптимизация баз данных"],
    code_role: "'Креативный разработчик'",
    code_hire: "Давайте строить!"
  },
  it: {
    nav_about: "Chi Sono",
    nav_portfolio: "Portfolio",
    nav_contact: "Contatti",
    hero_greeting: "Ciao, sono",
    hero_cta_portfolio: "Vedi Lavori",
    hero_cta_contact: "Contattami",
    about_title: "Chi Sono",
    about_text: "Sono uno sviluppatore software con la passione per la creazione di design innovativi ed esperienze utente intuitive. Unendo estetica e funzionalità, aiuto i brand a raccontare le loro storie nel modo più impressionante.",
    portfolio_title: "Lavori Selezionati",
    project_1_desc: "Architettura API & Backend",
    project_1_role: "Architetto di Sistema",
    project_2_desc: "Sviluppo App Mobile",
    project_2_role: "Membro del Team",
    project_3_desc: "Piattaforma Web",
    project_3_role: "Membro del Team",
    contact_title: "Contatti",
    contact_text: "Pronto per il tuo prossimo progetto? <br> Creiamo qualcosa di straordinario insieme.",
    footer_rights: "Tutti i diritti riservati.",
    typed_strings: ["Appassionato di Tecnologia Innovativa", "Progettazione Interfacce Web Creative", "Sviluppo App Mobile ad Alte Prestazioni", "Costruzione Architetture API Scalabili", "Architetto di Soluzioni", "Ottimizzazione Performance Database"],
    code_role: "'Sviluppatore Creativo'",
    code_hire: "Costruiamo qualcosa!"
  },
  fr: {
    nav_about: "À Propos",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    hero_greeting: "Bonjour, je suis",
    hero_cta_portfolio: "Voir Travaux",
    hero_cta_contact: "Contactez-moi",
    about_title: "À Propos",
    about_text: "Je suis un développeur de logiciels passionné par la création de designs innovants et d'expériences utilisateur conviviales. En alliant esthétique et fonctionnalité, j'aide les marques à raconter leur histoire de la manière la plus impressionnante.",
    portfolio_title: "Travaux Sélectionnés",
    project_1_desc: "Architecture API & Backend",
    project_1_role: "Architecte Système",
    project_2_desc: "Dév. App Mobile",
    project_2_role: "Membre de l'équipe",
    project_3_desc: "Plateforme Web",
    project_3_role: "Membre de l'équipe",
    contact_title: "Contact",
    contact_text: "Prêt pour votre prochain projet ? <br> Créons quelque chose d'incroyable ensemble.",
    footer_rights: "Tous droits réservés.",
    typed_strings: ["Passionné de Technologies Innovantes", "Design d'Interfaces Web Créatives", "Dév. d'Apps Mobiles Performantes", "Architecture API Évolutive", "Architecte de Solutions", "Optimisation de Bases de Données"],
    code_role: "'Développeur Créatif'",
    code_hire: "Créons ensemble !"
  },
  de: {
    nav_about: "Über Mich",
    nav_portfolio: "Portfolio",
    nav_contact: "Kontakt",
    hero_greeting: "Hallo, ich bin",
    hero_cta_portfolio: "Arbeiten ansehen",
    hero_cta_contact: "Kontakt",
    about_title: "Über Mich",
    about_text: "Ich bin Softwareentwickler mit einer Leidenschaft für innovative Designs und benutzerfreundliche Erlebnisse. Durch die Verbindung von Ästhetik und Funktionalität helfe ich Marken, ihre Geschichten auf beeindruckende Weise zu erzählen.",
    portfolio_title: "Ausgewählte Arbeiten",
    project_1_desc: "API & Backend Architektur",
    project_1_role: "Systemarchitekt",
    project_2_desc: "Mobile App Entwicklung",
    project_2_role: "Entwicklerteam-Mitglied",
    project_3_desc: "Web-Plattform",
    project_3_role: "Entwicklerteam-Mitglied",
    contact_title: "Kontakt",
    contact_text: "Bereit für Ihr nächstes Projekt? <br> Lassen Sie uns gemeinsam etwas Großartiges schaffen.",
    footer_rights: "Alle Rechte vorbehalten.",
    typed_strings: ["Enthusiast für innovative Technologien", "Design kreativer Web-Interfaces", "Entwicklung leistungsstarker Apps", "Aufbau skalierbarer API-Architekturen", "Lösungsarchitekt", "Datenbank-Optimierung"],
    code_role: "'Kreativer Entwickler'",
    code_hire: "Lass uns bauen!"
  }
};

let heroTyped = null;
let codeTyped = null;

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    if (heroTyped) heroTyped.destroy();

    heroTyped = new Typed(".typing-text", {
        strings: translations[lang].typed_strings,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        smartBackspace: true
    });

    if (codeTyped) codeTyped.destroy();

    const codeContent = `<span class="key">const</span> developer = {
  name: <span class="str">'Emre Ekiz'</span>,
  role: <span class="str">${translations[lang].code_role}</span>,
  skills: [
    <span class="str">'Solution Architecture'</span>,
    <span class="str">'React.js'</span>,
    <span class="str">'Nest.js'</span>,
    <span class="str">'Next.js'</span>,
    <span class="str">'React Native'</span>,
    <span class="str">'Swift'</span>
  ],
  hardWorker: <span class="key">true</span>,
  problemSolver: <span class="key">true</span>,
  <span class="func">hire</span>: <span class="key">function</span>() {
    <span class="key">return</span> <span class="str">"${translations[lang].code_hire}"</span>;
  }
};`;

    codeTyped = new Typed("#code-typewriter", {
        strings: [codeContent],
        typeSpeed: 30,
        backSpeed: 0,
        loop: false,
        contentType: "html",
        showCursor: true
    });

    document.querySelector(".current-lang").textContent = lang.toUpperCase();
    document.documentElement.lang = lang;
}

document.querySelectorAll(".lang-dropdown button").forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        setLanguage(lang);
    });
});

setLanguage("en");

// Back to Top functionality
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
