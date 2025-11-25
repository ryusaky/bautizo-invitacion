document.addEventListener('DOMContentLoaded', ()=>{

  // Countdown to 03 Dec 2025 15:00 local time
  const target = new Date(2025, 11, 3, 15, 0, 0); // Month is 11 = December
  const ids = { days: 'days', hours: 'hours', minutes: 'minutes', seconds: 'seconds' };

  function updateCountdown(){
    const now = new Date();
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff / (1000*60*60*24)); diff -= days*1000*60*60*24;
    const hours = Math.floor(diff / (1000*60*60)); diff -= hours*1000*60*60;
    const minutes = Math.floor(diff / (1000*60)); diff -= minutes*1000*60;
    const seconds = Math.floor(diff / 1000);
    document.getElementById(ids.days).textContent = days;
    document.getElementById(ids.hours).textContent = String(hours).padStart(2,'0');
    document.getElementById(ids.minutes).textContent = String(minutes).padStart(2,'0');
    document.getElementById(ids.seconds).textContent = String(seconds).padStart(2,'0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Slider con drag (mouse y touch)
  const slides = Array.from(document.querySelectorAll('#slider .slide'));
  let currentSlide = 0;
  let isDragging = false;
  let dragStart = 0;
  let dragOffset = 0;
  const sliderStage = document.getElementById('slider');
  const swipeThreshold = 30;

  function showSlide(index){
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((s, i) => {
      s.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
      s.style.transform = 'translateX(0) scale(1)';
      s.style.opacity = '1';
      s.style.display = i === currentSlide ? 'block' : 'none';
    });
  }

  function nextSlide(){
    showSlide(currentSlide + 1);
  }

  function prevSlide(){
    showSlide(currentSlide - 1);
  }

  // Mouse events
  sliderStage.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStart = e.clientX;
    dragOffset = 0;
    sliderStage.style.cursor = 'grabbing';
    slides[currentSlide].style.transition = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if(!isDragging) return;
    dragOffset = e.clientX - dragStart;
    slides[currentSlide].style.transform = `translateX(${dragOffset}px) scale(1)`;
  });

  document.addEventListener('mouseup', () => {
    if(!isDragging) return;
    isDragging = false;
    sliderStage.style.cursor = 'grab';
    
    if(dragOffset > swipeThreshold){
      prevSlide();
    } else if(dragOffset < -swipeThreshold){
      nextSlide();
    } else {
      showSlide(currentSlide);
    }
  });

  // Touch events
  sliderStage.addEventListener('touchstart', (e) => {
    isDragging = true;
    dragStart = e.changedTouches[0].clientX;
    dragOffset = 0;
    slides[currentSlide].style.transition = 'none';
  }, false);

  sliderStage.addEventListener('touchmove', (e) => {
    if(!isDragging) return;
    dragOffset = e.changedTouches[0].clientX - dragStart;
    slides[currentSlide].style.transform = `translateX(${dragOffset}px) scale(1)`;
  }, false);

  sliderStage.addEventListener('touchend', () => {
    if(!isDragging) return;
    isDragging = false;
    
    if(dragOffset > swipeThreshold){
      prevSlide();
    } else if(dragOffset < -swipeThreshold){
      nextSlide();
    } else {
      showSlide(currentSlide);
    }
  }, false);

  // Mostrar primera imagen al iniciar
  if(slides.length) showSlide(0);

  // Attempt to play audio
  const audio = document.getElementById('bg-audio');
  if(audio){
    audio.volume = 0.55;
    const tryPlay = ()=> audio.play().catch(()=>{});
    document.addEventListener('click', tryPlay, {once:true});
    tryPlay();
  }
});