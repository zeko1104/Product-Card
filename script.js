const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
    if (heart.classList.contains('fa-solid')) {
        heart.classList.remove('fa-solid');
        heart.style.color = ''; 
    } else {
        heart.classList.add('fa-solid');
        heart.style.color = 'red';
    }
});






function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  
  document.getElementById("eye").addEventListener('click', openModal);
  
 
  document.getElementsByClassName("close")[0].addEventListener('click', closeModal);
  