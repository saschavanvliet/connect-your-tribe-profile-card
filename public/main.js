
document.body.addEventListener('click', function() {
  this.classList.toggle('rotated');
});

document.addEventListener('click', function(event) {
    // Selecteer het element waar je de tekst wilt tonen
    const tekst = document.querySelector('.hidden-text');
    
    // Als de gebruiker ergens anders klikt dan de tekst, zorg ervoor dat de tekst zichtbaar wordt
    if (!tekst.contains(event.target) && event.target.className !== 'clickable-element') {
      tekst.style.display = (tekst.style.display === 'none' || tekst.style.display === '') ? 'block' : 'none';
    }
  });

  document.addEventListener('click', function(event) {
    // Selecteer het element waar je de tekst wilt tonen
    const tekst = document.querySelector('.hidden-text2');
    
    // Als de gebruiker ergens anders klikt dan de tekst, zorg ervoor dat de tekst zichtbaar wordt
    if (!tekst.contains(event.target) && event.target.className !== 'clickable-element') {
      tekst.style.display = (tekst.style.display === 'none' || tekst.style.display === '') ? 'block' : 'none';
    }
  });

  document.addEventListener('click', function(event) {
    const hartje = document.createElement('div');
    hartje.classList.add('hartje');
    hartje.innerHTML = '❤️';
  
    // Zet het hartje op de klikpositie
    hartje.style.left = `${event.clientX}px`;
    hartje.style.top = `${event.clientY}px`;
  
    document.body.appendChild(hartje);
  
    // Verwijder het hartje na 1 seconde (na de animatie)
    setTimeout(() => {
      hartje.remove();
    }, 1000);
  });
      