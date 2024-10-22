
const sheetID = '1KgWhNlmDAZFruuyjuOXM4Zxk4omVHn7suGTS6LXSvvc';  // Ganti dengan ID Google Spreadsheet-mu
const apiKey = 'AIzaSyAgraP2YhLT8wS7FK6okvIj4sf-FvBEZDc';    // Ganti dengan API Key yang kamu dapat dari Google Cloud Console
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Sheet1?key=${apiKey}`;




function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Ambil data dari Google Spreadsheet
fetch(url)
  .then(response => response.json())
  .then(data => {
    const rows = data.values;
    const cardContainer = document.getElementById('card-container');
    // Looping untuk menampilkan data di dalam card
    rows.slice(1).forEach(row => {
      const card = document.createElement('div');
      card.classList.add('div-card');
      card.innerHTML = `
        <div class="col-md-4">
                <div class="card" style="width: 10rem;">
                    <div class="card-body">
                      <h3 class="card-title">${row[1]}</h3>
                      <a href="${row[2]}" class="btn  tombol-lihat ">Lihat</a>
                    </div>
                    <img src="image/${getRandomNumber()}.jpg" class="card-img-top" alt="...">
                  </div>
        </div>
            `;
      cardContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error:', error));