document.addEventListener('DOMContentLoaded', function () {

    const TOTAL_PAGES = 52; 
    const FOLDER = 'pages/';
    const bookEl = document.getElementById('book');
    
    // Dimensi Portrait yang seimbang
    const PAGE_WIDTH = 490; 
    const PAGE_HEIGHT = 690;

    // 1. Bina Muka Surat
    let html = '';
    const pad = n => n.toString().padStart(2, '0');

    for (let i = 1; i <= TOTAL_PAGES; i++) {
        const fileName = `BOOK PAGE_-${pad(i)}.png`;
        html += `
            <div class="my-page">
                <img src="${FOLDER}${fileName}" class="book-image" alt="Page ${i}">
            </div>`;
    }
    bookEl.innerHTML = html;

    // 2. Inisialisasi PageFlip
    const pageFlip = new St.PageFlip(bookEl, {
        width: PAGE_WIDTH,
        height: PAGE_HEIGHT,
        size: 'fixed',
        showCover: true,
        usePortrait: false,
        drawShadow: true,
        flippingTime: 1000,
        useMouseEvents: true,
        clickEventForward: true,
        maxShadowOpacity: 0.3 // Bayangan selakan yang lebih lembut untuk tema putih
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

    // 3. Kawalan Navigasi
    document.addEventListener('keydown', (e) => {
        if (['ArrowRight', 'PageDown', ' '].includes(e.key)) {
            pageFlip.flipNext();
        } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
            pageFlip.flipPrev();
        }
    });
});