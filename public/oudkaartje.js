const expandButton = document.querySelector('header button')
expandButton.addEventListener('click', expand)

function expand () {
  document.body.classList.toggle('expand')
}

document.body.addEventListener('click', function() {
  this.classList.toggle('rotated');
});