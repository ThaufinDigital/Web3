document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('tiltCard');
    
    // Hanya jalankan efek 3D di layar yang cukup besar (bukan HP)
    if (window.innerWidth > 968) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
            
            card.style.transform = rotateY(${xAxis}deg) rotateX(${yAxis}deg);
        });

        document.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = rotateY(0deg) rotateX(0deg);
        });
        
        document.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    }
});
