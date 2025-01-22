const scrollToAnchor = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (index == 0 || index == 3) {
      if (entry.isIntersecting) {
        entry.target.classList.add('slideFromLeft');
      } else {
        entry.target.classList.remove('slideFromLeft');
      }
    }

    if (index == 1 || index == 4) {
      if (entry.isIntersecting) {
        entry.target.classList.add('slideFromBelow');
      } else {
        entry.target.classList.remove('slideFromBelow');
      }
    }

    if (index == 2 || index == 5) {
      if (entry.isIntersecting) {
        entry.target.classList.add('slideFromRight');
      } else {
        entry.target.classList.remove('slideFromRight');
      }
    }
  })
});

for (let icon of document.getElementsByClassName('contact-icon')) {
  observer.observe(icon);
}

for (let icon of document.querySelectorAll('#intro-text div a i')) {
  observer.observe(icon);
}

