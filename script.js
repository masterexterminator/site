const pages = document.querySelectorAll('.page');
let currentPageIndex = 0;

function showPage(index) {
  pages[currentPageIndex].classList.remove('active');
  pages[index].classList.add('active');
  currentPageIndex = index;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' && currentPageIndex > 0) {
    showPage(currentPageIndex - 1);
  } else if (event.key === 'ArrowDown' && currentPageIndex < pages.length - 1) {
    showPage(currentPageIndex + 1);
  }
});

// Show the initial page
showPage(currentPageIndex);
