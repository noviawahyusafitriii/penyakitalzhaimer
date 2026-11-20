document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('formKonsultasi');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nama = document.getElementById('nama').value.trim();
      var email = document.getElementById('email').value.trim();
      var telepon = document.getElementById('telepon').value.trim();
      var pesan = document.getElementById('pesan').value.trim();

      document.getElementById('errorNama').textContent = '';
      document.getElementById('errorEmail').textContent = '';
      document.getElementById('errorTelepon').textContent = '';
      document.getElementById('errorPesan').textContent = '';

      var valid = true;

      if (nama.length < 3) {
        document.getElementById('errorNama').textContent = 'Nama wajib diisi minimal 3 huruf.';
        valid = false;
      }
      if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        document.getElementById('errorEmail').textContent = 'Format email tidak valid.';
        valid = false;
      }
      if (!/^[0-9]{10,14}$/.test(telepon)) {
        document.getElementById('errorTelepon').textContent = 'Nomor telepon wajib angka (10-14 digit).';
        valid = false;
      }
      if (pesan.length < 10) {
        document.getElementById('errorPesan').textContent = 'Pesan minimal 10 karakter.';
        valid = false;
      }

      if (valid) {
        var box = document.getElementById('hasilKonsultasi');
        box.innerHTML = '<strong>Berhasil!</strong> Terima kasih ' + nama + ', pesan konsultasi Anda telah terkirim.';
        box.style.display = 'block';
        box.classList.remove('hidden');
        form.reset();
      }
    });
  }
});