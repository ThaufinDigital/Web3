// Ambil elemen dari HTML
const btnVerifikasi = document.getElementById('btnVerifikasi');
const btnJoinDiscord = document.getElementById('btnJoinDiscord');
const txtStatus = document.getElementById('txtStatus');

let isVerified = false;

// Event ketika tombol verifikasi diklik
btnVerifikasi.addEventListener('click', () => {
    if (!isVerified) {
        // Bikin efek loading pura-pura biar keren
        txtStatus.innerText = 'MEMERIKSA SISTEM...';
        btnVerifikasi.innerText = '[ MEMPROSES... ]';
        
        // Jeda waktu 1.5 detik sebelum selesai loading
        setTimeout(() => {
            isVerified = true;
            
            // Ubah teks setelah sukses
            txtStatus.innerText = 'AKSES DITERIMA. SILAKAN MASUK.';
            txtStatus.style.color = '#3ba55c'; // Warna hijau
            
            btnVerifikasi.innerText = '[ TERVERIFIKASI ]';
            btnVerifikasi.style.background = '#5865F2';
            btnVerifikasi.style.color = 'white';

            // Munculkan tombol masuk Discord
            btnJoinDiscord.style.display = 'block';
            
        }, 1500); // 1500 milidetik = 1.5 detik
    }
});

// Event ketika tombol Discord diklik
btnJoinDiscord.addEventListener('click', () => {
    // Ganti tulisan di dalam tanda kutip dengan link server Discord kamu
    window.open("https://discord.gg/link-server-kamu", "_blank");
});