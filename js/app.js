const menuIzquierdo = document.querySelector('.menu-izquierdo');
menuIzquierdo.addEventListener('click', (e) => {
    const claseMenu = e.target.classList;

    //Seleccionar el contenedor
    const contenedor = document.querySelector('.pagina'),
    const fechaIzq = document.querySelector('.fa-arrow-left'),
    const flechaDer = document.querySelector('.fa-arrow-right');

    if(claseMenu.contains('fa-arrow-left')){
        //Cerrar el menu lateral
        contenedor.classList.add('no-menu');
        e.target.style.display = 'none';
        flechaDer.style.display ='block';
    }else  if(claseMenu.contains('fa-arrow-right')){
        contenedor.classList.remove('no-menu');
        e.target.style.display ='none';
        flechaIzq.style.display='block';

    }
});