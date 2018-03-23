const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');//querySelectorAll returns a node list
const opacity = 0.6;

//set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img =>
  img.addEventListener('click', imgClick));

function imgClick(e){
  //reset opacity of all images
  imgs.forEach(img => (img.style.opacity = 1));

  //change current image to source of clicked image
  current.src = e.target.src;

  //add fadeIn class to current image
  current.classList.add('fade-in');

  //remove fade-in class after .5 seconds
  setTimeout(()=> current.classList.remove('fade-in'),
500);

  //change opacity to opacity var
  e.target.style.opacity = opacity;
}
