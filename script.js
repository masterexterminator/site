let currentPageIndex = 0;
const pages = document.querySelectorAll('.page');

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        currentPageIndex = Math.max(currentPageIndex - 1, 0);
        pages[currentPageIndex].classList.remove('slide-down');
        pages[currentPageIndex].classList.add('slide-up');
    } else if (event.key === 'ArrowDown') {
        currentPageIndex = Math.min(currentPageIndex + 1, pages.length - 1);
        pages[currentPageIndex].classList.remove('slide-up');
        pages[currentPageIndex].classList.add('slide-down');
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        /* ... handle left/right navigation ... */
    }

    updatePageVisibility();
});

    updatePageVisibility();
});

function updatePageVisibility() {
    pages.forEach((page, index) => {
        if (index === currentPageIndex) {
            page.classList.add('visible');
        } else {
            page.classList.remove('visible');
        }
    });
}
