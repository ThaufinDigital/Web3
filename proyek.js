document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('tiltCard');
    
    // Logika untuk efek 3D Tilt saat mouse bergerak di area layar
    document.addEventListener('mousemove', (e) => {
        // Menghitung kordinat mouse dari tengah layar
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        // Menerapkan rotasi pada kartu
        card.style.transform = rotateY(${xAxis}deg) rotateX(${yAxis}deg);
    });

    // Mengembalikan kartu ke posisi datar saat mouse meninggalkan jendela browser
    document.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = rotateY(0deg) rotateX(0deg);
    });
    
    // Menghapus transisi saat mouse masuk kembali agar pergerakan responsif
    document.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});
