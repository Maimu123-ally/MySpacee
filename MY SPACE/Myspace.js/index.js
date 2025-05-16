
      const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Picture spiral zoom animation
const pic = document.getElementById('profilePic');
if (pic) {
    pic.addEventListener('click', () => {
        pic.classList.add('spiral');
        setTimeout(() => {
          pic.classList.remove('spiral');
        }, 1000);
    });
    }