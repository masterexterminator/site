const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    changePage(Math.max(0, currentPage - 1));
  } else if (event.key === 'ArrowDown') {
    changePage(Math.min(pages.length - 1, currentPage + 1));
  }
});

function changePage(newPage) {
  const currentPageElement = pages[currentPage];
  const newPageElement = pages[newPage];

  currentPageElement.style.opacity = 0; // Fade out the current page
  setTimeout(() => {
    currentPageElement.style.display = 'none';
    newPageElement.style.display = 'flex';
    setTimeout(() => {
      newPageElement.style.opacity = 1; // Fade in the new page
      currentPage = newPage;
    }, 50); // Adjust the timing as needed
  }, 300); // Adjust the timing as needed
}
