function displayInput() {
    // Mendapatkan nilai dari setiap input
    var textValue = document.getElementById('text-input').value;
    var numberValue = document.getElementById('number-input').value;
    var dateValue = document.getElementById('date-input').value;
    var checkbox1Value = document.getElementById('checkbox-input1').checked;
    var checkbox2Value = document.getElementById('checkbox-input2').checked;
    var checkbox3Value = document.getElementById('checkbox-input3').checked;
    var jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    var selectValue = document.getElementById('select-input').value;
  
    // Menyiapkan array untuk checkbox yang dipilih
    var selectedCheckboxes = [];
  
    // Memeriksa status setiap checkbox dan menambahkannya ke dalam array selectedCheckboxes jika dipilih
    if (checkbox1Value) selectedCheckboxes.push("Pilihan 1");
    if (checkbox2Value) selectedCheckboxes.push("Pilihan 2");
    if (checkbox3Value) selectedCheckboxes.push("Pilihan 3");
  
    // Menggabungkan array selectedCheckboxes menjadi satu string dengan koma sebagai pemisah
    var selectedCheckboxesStr = selectedCheckboxes.join(", ");
  
    // Menampilkan nilai input
    var output = document.getElementById('output');
    output.innerHTML = `
      <p>Teks: ${textValue}</p>
      <p>Angka: ${numberValue}</p>
      <p>Tanggal: ${dateValue}</p>
      <p>Checkbox: ${selectedCheckboxesStr}</p>
      <p>Jenis Kelamin: ${jenisKelamin}</p>
      <p>Pilihan: ${selectValue}</p>
    `;
  }


  //javascript kalkulator
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculate() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }

  

  //javascript perulangan
  function repeatWord() {
    var word = document.getElementById('word').value;
    var repeat = parseInt(document.getElementById('repeat').value);
    var resultDiv = document.getElementById('result');
    
    // Membersihkan isi output sebelum menambahkan hasil perulangan baru
    resultDiv.innerHTML = '';
  
    // Melakukan perulangan sebanyak yang diminta
    for (var i = 0; i < repeat; i++) {
      // Membuat elemen paragraf baru
      var paragraph = document.createElement('p');
      
      // Memberi teks pada paragraf dengan kata yang diulang
      paragraph.textContent = "Perulangan ke-" + (i + 1) + ": " + word;
      
      // Menambahkan paragraf ke dalam div result
      resultDiv.appendChild(paragraph);
    }
  }

  //javascript kelulusan
  function checkPassingGrade() {
    var nilai = parseFloat(document.getElementById('nilai').value);
    var hasilDiv = document.getElementById('hasil');
    
    // Membersihkan hasil sebelum menambahkan hasil baru
    hasilDiv.innerHTML = '';
  
    // Memeriksa apakah nilai memenuhi syarat kelulusan (misalnya, nilai >= 60)
    if (nilai >= 60) {
      // Jika lulus, tampilkan pesan kelulusan
      var paragraph = document.createElement('p');
      paragraph.textContent = "Selamat, Anda Lulus dengan Nilai: " + nilai;
      hasilDiv.appendChild(paragraph);
    } else {
      // Jika tidak lulus, tampilkan pesan ketidaklulusan
      var paragraph = document.createElement('p');
      paragraph.textContent = "Maaf, Anda Tidak Lulus dengan Nilai: " + nilai;
      hasilDiv.appendChild(paragraph);
    }
  }