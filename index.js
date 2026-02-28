import*as e from"https://unpkg.com/three@0.170.0/build/three.module.js";let scene=new e.Scene,camera=new e.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),renderer=new e.WebGLRenderer({canvas:document.querySelector("#bg-canvas"),alpha:!0,antialias:!0});renderer.setSize(window.innerWidth,window.innerHeight);
// Cap pixel ratio at 2 for performance
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));let baseGeometry=new e.TorusKnotGeometry(1.5,.4,150,20),positionAttribute=baseGeometry.attributes.position,spherePositions=[],heartPositions=[],vec3=new e.Vector3,tubularSegments=150,radialSegments=20,radius=2;for(let i=0;i<positionAttribute.count;i++){let t=21,o=Math.floor(i/21),r=i%21,a=o/150*Math.PI*2,n=r/20*Math.PI,s=2*Math.sin(n)*Math.cos(a),l=2*Math.cos(n),c=2*Math.sin(n)*Math.sin(a);spherePositions.push(s,l,c);let hx=16*Math.pow(Math.sin(a),3)/10,hy=(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a))/10;hy+=0.5;let cx=hx+0.3*Math.cos(n),cy=hy+0.3*Math.sin(n),cz=0.3*Math.sin(n)*Math.cos(a);heartPositions.push(cx,cy,cz);}baseGeometry.morphAttributes.position=[new e.Float32BufferAttribute(spherePositions,3),new e.Float32BufferAttribute(heartPositions,3)];let material=new e.MeshStandardMaterial({color:12289788,emissive:12289788,emissiveIntensity:.5,wireframe:!0,roughness:.1,metalness:.5,morphTargets:!0}),morphMesh=new e.Mesh(baseGeometry,material);scene.add(morphMesh);window.easterEggActive=false;window.easterEggProgress=0;window.baseColor=new e.Color(12289788);window.targetColor=new e.Color(0xff69b4);let particlesGeometry=new e.BufferGeometry,particlesCount=700,posArray=new Float32Array(2100);for(let i=0;i<2100;i++)posArray[i]=(Math.random()-.5)*15;particlesGeometry.setAttribute("position",new e.BufferAttribute(posArray,3));let particlesMaterial=new e.PointsMaterial({size:.02,color:16777215,transparent:!0,opacity:.8}),particlesMesh=new e.Points(particlesGeometry,particlesMaterial);scene.add(particlesMesh);let ambientLight=new e.AmbientLight(16777215,1);scene.add(ambientLight);let pointLight=new e.PointLight(16777215,2);pointLight.position.set(5,5,5),scene.add(pointLight);
let cachedWinWidth = window.innerWidth;
let cachedWinHeight = window.innerHeight;
let cachedScrollY = window.scrollY;
let cachedScrollHeight = document.body.scrollHeight;

let mouseX=0,mouseY=0;
document.addEventListener("mousemove",e=>{
  mouseX=e.clientX/cachedWinWidth-.5;
  mouseY=e.clientY/cachedWinHeight-.5;
});

window.addEventListener("scroll", () => {
  cachedScrollY = window.scrollY;
});

let clock=new e.Clock;
function animate(){
  requestAnimationFrame(animate);
  let e=clock.getElapsedTime();
  morphMesh.rotation.y=.1*e,morphMesh.rotation.x=.05*e,particlesMesh.rotation.y=.05*e;

  // ⚡ Bolt Optimization: Use cached variables to prevent layout thrashing
  let t=-cachedScrollY;
  let o=cachedScrollHeight-cachedWinHeight;
  let r=Math.min(1,Math.max(0,-t/(.6*o)));

  if(window.easterEggActive){
    window.easterEggProgress=Math.min(1,window.easterEggProgress+0.01);
    morphMesh.morphTargetInfluences[0]=(1-r)*(1-window.easterEggProgress);
    morphMesh.morphTargetInfluences[1]=window.easterEggProgress;
    material.color.lerpColors(window.baseColor,window.targetColor,window.easterEggProgress);
    material.emissive.lerpColors(window.baseColor,window.targetColor,window.easterEggProgress);
    if(window.easterEggProgress>0.99){
      morphMesh.rotation.x=0;
      morphMesh.rotation.y=0;
      morphMesh.rotation.z=Math.PI;
    }
  }else{
    morphMesh.morphTargetInfluences[0]=1-r;
    if(morphMesh.morphTargetInfluences[1]!==undefined)morphMesh.morphTargetInfluences[1]=0;
  }

  let a=cachedWinWidth<768,n=a?2:-2;
  if(window.easterEggActive){
    morphMesh.position.x=n+(0-n)*r*(1-window.easterEggProgress);
  }else{
    morphMesh.position.x=n+(0-n)*r;
  }

  camera.position.y=-.002*t,camera.position.x+=(.5*mouseX-camera.position.x)*.05,camera.position.y+=(-(.5*mouseY)-camera.position.y)*.05,camera.lookAt(scene.position),renderer.render(scene,camera)
}
camera.position.z=5;
animate();

window.addEventListener("resize",()=>{
  cachedWinWidth = window.innerWidth;
  cachedWinHeight = window.innerHeight;
  cachedScrollHeight = document.body.scrollHeight;
  camera.aspect=cachedWinWidth/cachedWinHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(cachedWinWidth,cachedWinHeight);
});
let translations={en:{nav_about:"About",nav_portfolio:"Portfolio",nav_contact:"Contact",hero_greeting:"Hello, I am",hero_cta_portfolio:"View Work",hero_cta_contact:"Contact Me",about_title:"About Me",about_text:"I am a software developer with a passion for creating innovative designs and user-friendly experiences. By combining aesthetics with functionality, I help brands tell their stories in the most impressive way. I closely follow modern web technologies and design trends, aiming to leave a unique touch on every project.",portfolio_title:"Selected Works",project_1_desc:"API & Backend Architecture",project_1_role:"System Architect",project_2_desc:"Mobile App Development",project_2_role:"Dev Team Member",project_3_desc:"Web Platform",project_3_role:"Dev Team Member",contact_title:"Contact",contact_text:"Ready for your next project? <br> Let's create something amazing together.",footer_rights:"All rights reserved.",typed_strings:["Innovative Technology Enthusiast","Solution Architect","Designing Creative Web Interfaces","Building Scalable API Architectures","Developing High-Performance Mobile Apps","Optimizing Database Performance"],code_role:"'Creative Developer'",code_hire:"Let's build something amazing!"},tr:{nav_about:"Hakkımda",nav_portfolio:"Portfolyo",nav_contact:"İletişim",hero_greeting:"Merhaba, ben",hero_cta_portfolio:"\xc7alışmalarımı G\xf6r",hero_cta_contact:"İletişime Ge\xe7",about_title:"Hakkımda",about_text:"Yenilik\xe7i tasarımlar ve kullanıcı dostu deneyimler yaratma tutkusu olan bir yazılım geliştiriciyim. Estetiği fonksiyonellikle birleştirerek, markaların hikayelerini en etkileyici şekilde anlatmalarına yardımcı oluyorum. Modern web teknolojileri ve tasarım trendlerini yakından takip ederek, her projede \xf6zg\xfcn bir dokunuş bırakmayı hedefliyorum.",portfolio_title:"Se\xe7ili İşler",project_1_desc:"API & Backend Mimarisi",project_1_role:"Sistem Mimarı",project_2_desc:"Mobil Uygulama Geliştirme",project_2_role:"Geliştirici Ekip \xdcyesi",project_3_desc:"Web Platformu",project_3_role:"Geliştirici Ekip \xdcyesi",contact_title:"İletişim",contact_text:"Bir sonraki projeniz i\xe7in hazır mısınız? <br> Hadi birlikte harika bir şeyler yaratalım.",footer_rights:"T\xfcm hakları saklıdır.",typed_strings:["Yenilik\xe7i Teknoloji Tutkunu","Yaratıcı Web Aray\xfczleri Tasarlayan","Y\xfcksek Performanslı Mobil Uygulamalar Geliştiren","\xd6l\xe7eklenebilir API Mimarileri Kuran","\xc7\xf6z\xfcm Mimarı","Veri Tabanı Performansını Optimize Eden"],code_role:"'Yaratıcı Geliştirici'",code_hire:"Harika bir şeyler yapalım!"},ru:{nav_about:"Обо мне",nav_portfolio:"Портфолио",nav_contact:"Контакты",hero_greeting:"Привет, я",hero_cta_portfolio:"Мои работы",hero_cta_contact:"Связаться",about_title:"Обо мне",about_text:"Я разработчик программного обеспечения со страстью к созданию инновационного дизайна и удобного пользовательского опыта. Сочетая эстетику с функциональностью, я помогаю брендам рассказывать свои истории наиболее впечатляющим образом.",portfolio_title:"Избранные работы",project_1_desc:"API и Backend-архитектура",project_1_role:"Системный архитектор",project_2_desc:"Разработка мобильных приложений",project_2_role:"Член команды разработчиков",project_3_desc:"Веб-платформа",project_3_role:"Член команды разработчиков",contact_title:"Контакты",contact_text:"Готовы к следующему проекту? <br> Давайте создадим что-то удивительное вместе.",footer_rights:"Все права защищены.",typed_strings:["Энтузиаст инновационных технологий","Дизайн креативных веб-интерфейсов","Разработка высокопроизводительных мобильных приложений","Создание масштабируемых API","Архитектор решений","Оптимизация баз данных"],code_role:"'Креативный разработчик'",code_hire:"Давайте строить!"},it:{nav_about:"Chi Sono",nav_portfolio:"Portfolio",nav_contact:"Contatti",hero_greeting:"Ciao, sono",hero_cta_portfolio:"Vedi Lavori",hero_cta_contact:"Contattami",about_title:"Chi Sono",about_text:"Sono uno sviluppatore software con la passione per la creazione di design innovativi ed esperienze utente intuitive. Unendo estetica e funzionalit\xe0, aiuto i brand a raccontare le loro storie nel modo pi\xf9 impressionante.",portfolio_title:"Lavori Selezionati",project_1_desc:"Architettura API & Backend",project_1_role:"Architetto di Sistema",project_2_desc:"Sviluppo App Mobile",project_2_role:"Membro del Team",project_3_desc:"Piattaforma Web",project_3_role:"Membro del Team",contact_title:"Contatti",contact_text:"Pronto per il tuo prossimo progetto? <br> Creiamo qualcosa di straordinario insieme.",footer_rights:"Tutti i diritti riservati.",typed_strings:["Appassionato di Tecnologia Innovativa","Progettazione Interfacce Web Creative","Sviluppo App Mobile ad Alte Prestazioni","Costruzione Architetture API Scalabili","Architetto di Soluzioni","Ottimizzazione Performance Database"],code_role:"'Sviluppatore Creativo'",code_hire:"Costruiamo qualcosa!"},fr:{nav_about:"\xc0 Propos",nav_portfolio:"Portfolio",nav_contact:"Contact",hero_greeting:"Bonjour, je suis",hero_cta_portfolio:"Voir Travaux",hero_cta_contact:"Contactez-moi",about_title:"\xc0 Propos",about_text:"Je suis un d\xe9veloppeur de logiciels passionn\xe9 par la cr\xe9ation de designs innovants et d'exp\xe9riences utilisateur conviviales. En alliant esth\xe9tique et fonctionnalit\xe9, j'aide les marques \xe0 raconter leur histoire de la mani\xe8re la plus impressionnante.",portfolio_title:"Travaux S\xe9lectionn\xe9s",project_1_desc:"Architecture API & Backend",project_1_role:"Architecte Syst\xe8me",project_2_desc:"D\xe9v. App Mobile",project_2_role:"Membre de l'\xe9quipe",project_3_desc:"Plateforme Web",project_3_role:"Membre de l'\xe9quipe",contact_title:"Contact",contact_text:"Pr\xeat pour votre prochain projet ? <br> Cr\xe9ons quelque chose d'incroyable ensemble.",footer_rights:"Tous droits r\xe9serv\xe9s.",typed_strings:["Passionn\xe9 de Technologies Innovantes","Design d'Interfaces Web Cr\xe9atives","D\xe9v. d'Apps Mobiles Performantes","Architecture API \xc9volutive","Architecte de Solutions","Optimisation de Bases de Donn\xe9es"],code_role:"'D\xe9veloppeur Cr\xe9atif'",code_hire:"Cr\xe9ons ensemble !"},de:{nav_about:"\xdcber Mich",nav_portfolio:"Portfolio",nav_contact:"Kontakt",hero_greeting:"Hallo, ich bin",hero_cta_portfolio:"Arbeiten ansehen",hero_cta_contact:"Kontakt",about_title:"\xdcber Mich",about_text:"Ich bin Softwareentwickler mit einer Leidenschaft f\xfcr innovative Designs und benutzerfreundliche Erlebnisse. Durch die Verbindung von \xc4sthetik und Funktionalit\xe4t helfe ich Marken, ihre Geschichten auf beeindruckende Weise zu erz\xe4hlen.",portfolio_title:"Ausgew\xe4hlte Arbeiten",project_1_desc:"API & Backend Architektur",project_1_role:"Systemarchitekt",project_2_desc:"Mobile App Entwicklung",project_2_role:"Entwicklerteam-Mitglied",project_3_desc:"Web-Plattform",project_3_role:"Entwicklerteam-Mitglied",contact_title:"Kontakt",contact_text:"Bereit f\xfcr Ihr n\xe4chstes Projekt? <br> Lassen Sie uns gemeinsam etwas Gro\xdfartiges schaffen.",footer_rights:"Alle Rechte vorbehalten.",typed_strings:["Enthusiast f\xfcr innovative Technologien","Design kreativer Web-Interfaces","Entwicklung leistungsstarker Apps","Aufbau skalierbarer API-Architekturen","L\xf6sungsarchitekt","Datenbank-Optimierung"],code_role:"'Kreativer Entwickler'",code_hire:"Lass uns bauen!"}},heroTyped=null,codeTyped=null;function setLanguage(e){let t=document.querySelectorAll("[data-i18n]");t.forEach(t=>{let o=t.getAttribute("data-i18n");translations[e]&&translations[e][o]&&(t.innerHTML=translations[e][o])}),heroTyped&&heroTyped.destroy(),heroTyped=new Typed(".typing-text",{strings:translations[e].typed_strings,typeSpeed:50,backSpeed:30,backDelay:2e3,loop:!0,smartBackspace:!0}),codeTyped&&codeTyped.destroy();let o=`<span class="key">const</span> developer = {
  name: <span class="str">'Emre Ekiz'</span>,
  role: <span class="str">${translations[e].code_role}</span>,
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
    <span class="key">return</span> <span class="str">"${translations[e].code_hire}"</span>;
  }
};`;codeTyped=new Typed("#code-typewriter",{strings:[o],typeSpeed:30,backSpeed:0,loop:!1,contentType:"html",showCursor:!0});
const flagClassMap = {
    en: 'fi-gb',
    tr: 'fi-tr',
    ru: 'fi-ru',
    it: 'fi-it',
    fr: 'fi-fr',
    de: 'fi-de'
};
const currentLangBtn = document.querySelector(".current-lang");
if (currentLangBtn) {
    const flagSpan = currentLangBtn.querySelector('.fi');
    const textSpan = currentLangBtn.querySelectorAll('span')[1];
    if (flagSpan) flagSpan.className = `fi ${flagClassMap[e]}`;
    if (textSpan) textSpan.textContent = e.toUpperCase();
}
document.documentElement.lang=e
}

document.querySelectorAll(".lang-dropdown button").forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("data-lang");setLanguage(t)})}),setLanguage("en");

// Language Dropdown Toggle
const langSelector = document.querySelector('.lang-selector');
const currentLangBtn = document.querySelector('.current-lang');

if (langSelector && currentLangBtn) {
    currentLangBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
        const isActive = langSelector.classList.contains('active');
        currentLangBtn.setAttribute('aria-expanded', isActive.toString());
    });

    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('active');
            currentLangBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close dropdown when a language is selected
    const langButtons = document.querySelectorAll('.lang-dropdown button');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langSelector.classList.remove('active');
            currentLangBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

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

window.eggClickCount = 0;
window.eggFirstClickTime = 0;
document.addEventListener('click', (e) => {
  const logoEl = e.target.closest('.logo');
  if (logoEl) {
    if (window.easterEggActive) return;
    const now = Date.now();
    if (window.eggClickCount === 0) {
      window.eggFirstClickTime = now;
      window.eggClickCount = 1;
    } else {
      if (now - window.eggFirstClickTime > 15000) {
        window.eggFirstClickTime = now;
        window.eggClickCount = 1;
      } else {
        window.eggClickCount++;
      }
    }
    if (window.eggClickCount >= 3) {
      window.easterEggActive = true;
      const elementsToHide = document.querySelectorAll('header, .hero-content, section:not(#hero), footer, .about, .portfolio, .contact');
      elementsToHide.forEach(el => {
        el.style.transition = 'opacity 1s ease';
        el.style.opacity = '0';
      });
      const message = document.createElement('div');
      message.textContent = 'Seni çok seviyorum Dilara';
      message.style.position = 'fixed';
      message.style.top = '50%';
      message.style.left = '50%';
      message.style.transform = 'translate(-50%, -50%)';
      message.style.color = '#ff69b4';
      message.style.fontFamily = "'Playfair Display', serif";
      message.style.fontSize = '4rem';
      message.style.fontWeight = '700';
      message.style.textShadow = '0 0 20px rgba(255, 105, 180, 0.8), 0 0 10px rgba(255, 20, 147, 0.6)';
      message.style.opacity = '0';
      message.style.transition = 'opacity 2s ease 1s';
      message.style.zIndex = '9999';
      message.style.textAlign = 'center';
      message.style.width = '100%';
      document.body.appendChild(message);
      setTimeout(() => {
        message.style.opacity = '1';
        elementsToHide.forEach(el => {
          el.style.pointerEvents = 'none';
          el.style.visibility = 'hidden';
        });
      }, 100);
    }
  }
});
