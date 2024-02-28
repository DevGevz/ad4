document.getElementById('menubut').addEventListener('click', function() {
    var menu = document.getElementById('menulist');
    var but = document.getElementById('menubut');
    if (menu.style.left === '-230px') {
      menu.style.left = '0';
      menu.style.boxShadow="20px -10px 15px black";
      but.innerText = "X"
    } else {
      menu.style.left = '-230px';
      menu.style.boxShadow ='none'
      but.innerHTML= "<ion-icon name='menu-outline'></ion-icon>"
    }
  });