const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    currentPage = Math.max(0, currentPage - 1);
  } else if (event.key === 'ArrowDown') {
    currentPage = Math.min(pages.length - 1, currentPage + 1);
  }

  pages.forEach((page, index) => {
    if (index === currentPage) {
      page.style.display = 'flex';
    } else {
      page.style.display = 'none';
    }
  });
});
