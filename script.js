
const sheetID = '1KgWhNlmDAZFruuyjuOXM4Zxk4omVHn7suGTS6LXSvvc';  // Ganti dengan ID Google Spreadsheet-mu
const apiKey = 'AIzaSyAgraP2YhLT8wS7FK6okvIj4sf-FvBEZDc';    // Ganti dengan API Key yang kamu dapat dari Google Cloud Console
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Sheet1?key=${apiKey}`;

// Ambil data dari Google Spreadsheet
fetch(url)
  .then(response => response.json())
  .then(data => {
    const rows = data.values;
    const cardContainer = document.getElementById('card-container');
    // Looping untuk menampilkan data di dalam card
    rows.slice(1).forEach(row => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <div class="container-card card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${row[1]}</h5>
            <a href="${row[2]}" class="btn btn-primary">Lihat</a>
            </div>
          </div>

          `;
      cardContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error:', error));