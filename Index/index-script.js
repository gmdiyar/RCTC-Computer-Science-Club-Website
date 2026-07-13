  const track = document.getElementById('track');
  const photos = Array.from(track.children);
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const dotsContainer = document.getElementById('dots');
 
  let index = 0;
 
  photos.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);
 
  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }
 
  function goTo(i) {
    index = (i + photos.length) % photos.length;
    update();
  }
 
  nextBtn.addEventListener('click', () => goTo(index + 1));
  prevBtn.addEventListener('click', () => goTo(index - 1));
 
  setInterval(() => goTo(index + 1), 5000);
