let currentPageIndex = 0;
const pages = document.querySelectorAll('.page');

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        currentPageIndex = Math.max(currentPageIndex - 1, 0);
    } else if (event.key === 'ArrowDown') {
        currentPageIndex = Math.min(currentPageIndex + 1, pages.length - 1);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        const currentPage = pages[currentPageIndex];
        // Handle left/right navigation within specific pages (e.g., Projects)
    }

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
