(function(){
    var slideIndex = 1;
    var App = {
        config:{
            api:{}
        },
        htmlElements:{
            btn_galeria: document.querySelector('#btn-galeria'),
            container_galeria: document.querySelector('#container-galeria'),
            container_titulo_galeria: document.querySelector('#container-galeria-titulo'),
            container_cerrar_galeria: document.querySelector('#container-cerrar-galeria'),
            main_container_labs: document.querySelector('#main-container-labs'),
            dot_container: document.querySelector('#dot-container'),
            btn_close: document.querySelector('#btn-close'),
            h4Titulo: document.querySelector('#h4titulo'),
            a_next:document.querySelector('.next'),
            a_prev:document.querySelector('.prev'),
        },
        init: function(){
            // App.htmlElements.btn_galeria.addEventListener("click",App.moverBtn)
            App.htmlElements.a_prev.addEventListener("click",function(){App.plusSlides(-1)})
            App.htmlElements.a_next.addEventListener("click",function(){App.plusSlides(1)})
        },
        events:{},
        moverBtn:function(){
            App.htmlElements.btn_galeria.style.display = 'none'
            App.mostrarGaleria();
            App.showSlides(slideIndex);
        },
        mostrarGaleria:function(){
            App.htmlElements.container_galeria.classList.add('container-galeria');
            App.htmlElements.container_titulo_galeria.classList.add('container-galeria-titulo');
            App.htmlElements.container_cerrar_galeria.classList.add('container-cerrar-galeria');
            App.htmlElements.main_container_labs.classList.add('main-container-labs');
            App.htmlElements.dot_container.classList.add('dot-container');
            App.htmlElements.main_container_labs.classList.remove('class-hiden');
            App.htmlElements.dot_container.classList.remove('class-hiden');
            App.htmlElements.h4Titulo.classList.remove('class-hiden');
            App.htmlElements.btn_close.classList.remove('class-hiden');
            App.htmlElements.btn_close.classList.add('btn-close');
        },
        plusSlides:function(number){
            App.showSlides(slideIndex += number)
        },
        currentSlide:function(number){
            showSlides(slideIndex = number);
        },
        showSlides:function(n){
            var i;
            var slides = document.getElementsByClassName("main-container-labs");
            var dots = document.getElementsByClassName("dot");
            if(n > slides.length) slideIndex = 1;
            if(n < 1 ) slideIndex = slides.length;
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            console.log(slides)
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active"; 
        },
        utils:{}
    }
    App.init();
})();