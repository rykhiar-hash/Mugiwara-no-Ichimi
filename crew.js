// ─────────────────────────────────────────
//  DATA CREW TOPI JERAMI
//  Gambar: lokal dari folder images/
// ─────────────────────────────────────────
const crew = [
  {
    name: "Monkey D. Luffy",
    role: "Kapten",
    badge: "Captain",
    accent: "#f5c842",
    bg: "#2a2410",
    img: "images/luffy.jpg",
    bounty: "3.000.000.000",
    ability: "Gomu Gomu no Mi (Nika)",
    origin: "Foosha Village, East Blue",
    desc: "Kapten Bajak Laut Topi Jerami yang bermimpi menjadi Raja Bajak Laut.",
    imgPos: "center-top",
  },
  {
    name: "Roronoa Zoro",
    role: "Ahli Pedang",
    badge: "Swordsman",
    accent: "#22c55e",
    bg: "#0f2016",
    img: "images/zoro.jpg",
    bounty: "1.111.000.000",
    ability: "Santoryu (Tiga Pedang)",
    origin: "Shimotsuki Village, East Blue",
    desc: "Ahli pedang terkuat yang bertekad menjadi pedang terbaik di dunia.",
    imgPos: "center top",
  },
  {
    name: "Nami",
    role: "Navigator",
    badge: "Navigator",
    accent: "#f97316",
    bg: "#2a1a0a",
    img: "images/nami.jpg",
    bounty: "366.000.000",
    ability: "Clima-Tact (Manipulasi Cuaca)",
    origin: "Cocoyasi Village, East Blue",
    desc: "Navigator jenius yang bisa membaca cuaca dan memetakan seluruh dunia.",
    imgPos: "center top",
  },
  {
    name: "Usopp",
    role: "Juru Tembak",
    badge: "Sniper",
    accent: "#84cc16",
    bg: "#1a2010",
    img: "images/usupp.jpg",
    bounty: "500.000.000",
    ability: "Slingshot & Amunisi Tanaman",
    origin: "Syrup Village, East Blue",
    desc: "Juru tembak berbohong yang punya keberanian sejati di saat genting.",
    imgPos: "center top",
  },
  {
    name: "Sanji",
    role: "Koki",
    badge: "Cook",
    accent: "#fbbf24",
    bg: "#252010",
    img: "images/sanji.jpg",
    bounty: "1.032.000.000",
    ability: "Black Leg Style & Ifrit Jambe",
    origin: "North Blue",
    desc: "Koki tangguh yang hanya bertarung dengan kaki dan pantang menyerah demi nakama.",
    imgPos: "center top",
  },
  {
    name: "Tony Tony Chopper",
    role: "Dokter",
    badge: "Doctor",
    accent: "#ec4899",
    bg: "#25101a",
    img: "images/chopper.jpg",
    bounty: "1.000",
    ability: "Hito Hito no Mi (Tujuh Titik)",
    origin: "Drum Island, Grand Line",
    desc: "Dokter imut yang bermimpi menyembuhkan semua penyakit di dunia.",
    imgPos: "center center",
  },
  {
    name: "Nico Robin",
    role: "Arkeolog",
    badge: "Archaeologist",
    accent: "#a855f7",
    bg: "#1a1025",
    img: "images/robin.jpg",
    imgPos: "center top",
    bounty: "930.000.000",
    ability: "Hana Hana no Mi (Bunga)",
    origin: "Ohara, West Blue",
    desc: "Arkeolog misterius yang satu-satunya bisa membaca Poneglyph." 
  },
  {
    name: "Franky",
    role: "Tukang Kapal",
    badge: "Shipwright",
    accent: "#3b82f6",
    bg: "#101525",
    img: "images/franky.jpg",
    imgPos: "center 20%",
    imgScale: 0.4,
    bounty: "394.000.000",
    ability: "Cyborg & Franky Shogun",
    origin: "South Blue",
    desc: "Tukang kapal cyborg yang membangun Thousand Sunny dengan tangan sendiri."
    
  },
  {
    name: "Brook",
    role: "Musisi",
    badge: "Musician",
    accent: "#94a3b8",
    bg: "#181818",
    img: "images/brook.jpg",
    imgPos: "center top",
    bounty: "383.000.000",
    ability: "Yomi Yomi no Mi (Jiwa)",
    origin: "West Blue",
    desc: "Musisi tengkorak yang bisa memisahkan jiwa dari tubuh dan membekukan lawan."
    
  },

  {
    name: "Jinbe",
    role: "Juru Mudi",
    badge: "Helmsman",
    accent: "#06b6d4",
    bg: "#081a20",
    img: "images/jinbe.jpg",
    imgPos: "center top",
    bounty: "1.100.000.000",
    ability: "Fishman Karate & Judo",
    origin: "Fishman Island",
    desc: "Juru mudi mantan Warlord yang menguasai seni bela diri manusia ikan."
  },
];
 
// ─────────────────────────────────────────
//  FALLBACK SVG AVATAR (jika gambar gagal)
// ─────────────────────────────────────────
const avatarMap = {
  "Monkey D. Luffy":    ["#f5c842", "L"],
  "Roronoa Zoro":       ["#22c55e", "Z"],
  "Nami":               ["#f97316", "N"],
  "Usopp":              ["#84cc16", "U"],
  "Sanji":              ["#fbbf24", "S"],
  "Tony Tony Chopper":  ["#ec4899", "C"],
  "Nico Robin":         ["#a855f7", "R"],
  "Franky":             ["#3b82f6", "F"],
  "Brook":              ["#94a3b8", "B"],
  "Jinbe":              ["#06b6d4", "J"],
};

function fallbackSVG(name) {
  const [color, letter] = avatarMap[name] || ["#888888", "?"];
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='160' height='190'>
      <rect width='160' height='190' fill='${color}22'/>
      <text
        x='80' y='115'
        text-anchor='middle'
        font-family='Georgia,serif'
        font-size='90'
        font-weight='bold'
        fill='${color}'
        opacity='0.7'
      >${letter}</text>
    </svg>
  `;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

// ─────────────────────────────────────────
//  RENDER CARD
// ─────────────────────────────────────────
function makeCard(member) {
  const card = document.createElement('div');
  card.className = 'crew-card';
  card.style.setProperty('--accent', member.accent);
  card.style.setProperty('--bg', member.bg);
  card.style.willChange = 'transform';

  card.innerHTML = `
    <div class="card-img-wrap" style="background:${member.bg}">
      <img
        class="card-img"
        src="${member.img}"
        alt="${member.name}"
        style="object-position: ${member.imgPos || 'center top'}; 
        onerror="this.src='${fallbackSVG(member.name)}'"
      />
    </div>
    <div class="card-body">
      <p class="card-name">${member.name}</p>
      <p class="card-role">${member.role}</p>
      <span class="card-badge">${member.badge}</span>
    </div>
  `;
  card.addEventListener('click', () => window.openModal(member));
  return card;
}

// ─────────────────────────────────────────
//  INIT TRACK (duplikat untuk loop mulus)
// ─────────────────────────────────────────
function initTrack() {
  const track = document.getElementById('track');
  if (!track) return;
  [...crew, ...crew].forEach(member => track.appendChild(makeCard(member)));
}
 
// ─────────────────────────────────────────
//  MODAL LOGIC
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTrack();
 
  const overlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
 
  window.openModal = function(member) {
    document.getElementById('modalImg').src = member.img;
    document.getElementById('modalImg').style.objectPosition = member.imgPos || 'center top';
    document.getElementById('modalImg').style.transform = `scale(${member.imgScale || 1})`;
    document.getElementById('modalImg').style.transformOrigin = member.imgPos || 'center top';
    document.getElementById('modalImg').alt = member.name;
    document.getElementById('modalBadge').textContent = member.badge;
    document.getElementById('modalName').textContent = member.name;
    document.getElementById('modalRole').textContent = member.role;
    document.getElementById('modalDesc').textContent = member.desc;
    document.getElementById('modalBounty').textContent = '🏴‍☠️ ' + member.bounty + ' Berry';
    document.getElementById('modalAbility').textContent = member.ability;
    document.getElementById('modalOrigin').textContent = member.origin;
    overlay.style.setProperty('--modal-accent', member.accent);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
 
  window.closeModal = function() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };
 
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
 
  modalClose.addEventListener('click', closeModal);
 
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});

// ─────────────────────────────────────────
//  PARALLAX HERO
// ─────────────────────────────────────────
window.addEventListener('scroll', () => {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;
  const scrollY = window.scrollY;
  heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.3}px)`;
});