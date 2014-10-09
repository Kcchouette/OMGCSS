function toggleMenu(idMenu) {
  var el = document.getElementById(idMenu)
  if (el.style.display == 'none') {
    el.style.display = 'initial';
  }
  else {
    el.style.display = 'none';
  }
}
