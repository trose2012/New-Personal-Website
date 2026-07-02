fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
    
    let currentPath = window.location.pathname;
    
    if (currentPath === '/' || currentPath === '') {
      currentPath = '/index.html';
    }
    
    const navLinks = document.querySelectorAll('.elements a');

    navLinks.forEach(link => {
      let linkPath = link.pathname;
      
      if (linkPath === '/' || linkPath === '') {
        linkPath = '/index.html';
      }
      
      if (currentPath === linkPath) {
        link.parentElement.classList.add('rows-highlighted');
        link.parentElement.classList.remove('rows');
      } else {
        link.parentElement.classList.add('rows');
        link.parentElement.classList.remove('rows-highlighted');
      }
    });
  })
  .catch(error => console.error('Error loading navbar:', error));

// Load the footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));