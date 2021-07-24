const menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('click', (e) => {
    // console.log(e);
    const claseMenu = e.target.classList;
    // console.log(claseMenu);
    const contenedor = document.querySelector('.pagina'),
            flechaIzq = document.querySelector('.izquierda'),
            flechaDer = document.querySelector('.derecha');

    if (claseMenu.contains('izquierda')) {
        // console.log('cierra el menu');

        flechaIzq.style.display = 'none';
        flechaDer.style.display = 'block';
        contenedor.classList.add('no-menu');
        
    } else if (claseMenu.contains('derecha')) {
        // console.log('abre el menu');
        flechaIzq.style.display = 'block';
        flechaDer.style.display = 'none';
        contenedor.classList.remove('no-menu');
    }
});

