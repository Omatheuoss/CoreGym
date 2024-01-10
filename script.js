// Obtenha a referência ao elemento do menu
var menu = document.getElementById("menu");

function clickMenu() {
    // Alterne a propriedade de exibição do menu
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
