const mahasiswa = [
  { no: 1, nama: "Chairil Syahrain", domain: "https://chairilsyahrain.tplp4.com/" },
  { no: 2, nama: "Reyon Lau Jiemin", domain: "https://coba.tplp4.com/" },
  { no: 3, nama: "Ghilman Yazid Abdullah", domain: "https://ghilman.tplp4.com/PortofolioIT_Project/index.html" },
  { no: 4, nama: "Andrian", domain: "https://andrian.tplp4.com/" },
  { no: 5, nama: "Rahmah Yunita", domain: "https://rahmahyunita.tplp4.com//" },
  { no: 6, nama: "Novriyansah Ramadhan Alfiqri", domain: "https://novriyansah.tplp4.com/" },
  { no: 7, nama: "Dipa Dwi Atmadja", domain: "https://dipadwi.tplp4.com/" },
  { no: 8, nama: "Satinudi Telaumbanua", domain: "https://satinudin.tplp4.com/" },
  { no: 9, nama: "Bagas Alamsyah Putra", domain: "https://bagasalamsyahp.tplp4.com/" },
  { no: 10, nama: "Eiffeline Melati Octhaviani", domain: "https://eiffeline.tplp4.com/" },
  { no: 11, nama: "Sulisto Fajar Utomo", domain: "https://sulisto.tplp4.com/" },
  { no: 12, nama: "Benedictus Geovanda Sihombing", domain: "https://benedictus.tplp4.com/" },
  { no: 13, nama: "Khairuz Zuhdi", domain: "https://iruzzuhdi.tplp4.com/" },
  { no: 14, nama: "Aldiansyah", domain: "https://aldiansyah.tplp4.com/" },
  { no: 15, nama: "Sabrillah Sabastian", domain: "https://sabrillahhh.tplp4.com/" },
  { no: 16, nama: "Arung Zidane Dwiaji", domain: "https://arungzidanedwiaji.tplp4.com/" },
  { no: 17, nama: "Muhammad Hafidlul Mujib", domain: "https://hafidlul.tplp4.com/" },
  { no: 18, nama: "Rizal Fazri", domain: "https://rizalfazri.tplp4.com/" },
  { no: 19, nama: "Riedo Adriano", domain: "https://riedoadriano.tplp4.com/" },
  { no: 20, nama: "Muhammad Farhan Arotsid", domain: "https://mfarotsid.tplp4.com" },
  { no: 21, nama: "Sufyaan Putra Haswanto", domain: "https://iyan.tplp4.com/" },
  { no: 22, nama: "Fajar Sidiq Wijaya", domain: "https://fajarsidiq.tplp4.com/" },
  { no: 23, nama: "Alfadry Mallato", domain: "https://alfadrymallato.tplp4.com/" },
  { no: 24, nama: "Bagus Gusti Janova", domain: "https://bagusgusti.tplp4.com/" },
  { no: 25, nama: "Bagas Junianto", domain: "https://bagasjuni.tplp4.com/" },
  { no: 26, nama: "Nadzel Ramadania", domain: "https://nadzel.tplp4.com/" },
  { no: 27, nama: "Annisa Salsabila Maharani", domain: "https://annisa.tplp4.com/" },
  { no: 28, nama: "Satria Anggito Abimannyu", domain: "https://satriaanggito.tplp4.com/" },
  { no: 29, nama: "Muhammad Rizki Yusnadi", domain: "https://mrizkiyusnadi.tplp4.com/" },
  { no: 30, nama: "Satrio Panca Nugroho", domain: "https://satriopanca.tplp4.com/home/index.html" },
  { no: 31, nama: "Bintang Syaputra", domain: "https://bintangsyaputra.tplp4.com/" },
  { no: 32, nama: "Fafian Prima Abimanyu", domain: "https://fafianprimaa.github.io/Website-Web1/" },
  { no: 33, nama: "Zakia Dwi hadi Larasati", domain: "zakialaras.tplp4.com" }
];

const numberCount = {};

function getRandomNumber() {
  let num;
  let attempts = 0;
  do {
    num = Math.floor(Math.random() * 15) + 1;
    attempts++;
  } while (numberCount[num] >= 2 && attempts < 30);

  if (numberCount[num]) {
    numberCount[num]++;
  } else {
    numberCount[num] = 1;
  }

  return num;
}

const cardContainer = document.getElementById('card-container');

mahasiswa.forEach(data => {
  const card = document.createElement('div');
  card.classList.add('div-card');
  card.innerHTML = `
    <div style="height:20px;"></div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">${data.nama}</h3>
        </div>
        <a href="${data.domain || '#'}">
          <img src="image/${getRandomNumber()}.jpg" class="card-img-top" alt="${data.nama}">
        </a>
      </div>
    </div>
  `;
  cardContainer.appendChild(card);
});

function filterCards() {
  const searchQuery = document.getElementById('searchBar').value.toLowerCase();
  document.querySelectorAll('#card-container .col-md-4').forEach(card => {
    const name = card.querySelector('.card-title').textContent.toLowerCase();
    if (name.includes(searchQuery)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

const updateDarkMode = () => {
  const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';
  if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
};

darkModeToggle.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
  updateDarkMode();
});

// Apply mode on load
updateDarkMode();