"use strict"
//анимация чисел 

$(document).ready(function () {
 
    var show = true;
    var countbox = ".main6";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 2000
            });
             
            show = false;
        }
    });
 
});


//якорные ссылки
$(document).ready(function(){
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $(".section").each((i, el) => {
        
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
});
});

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"})
});




//модальное окно
$(document).ready(function(){
$('.image-link').magnificPopup({type:'image'});    
});

//анимации для фото
let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.element-animation');
elements.each((i,el) => {
    observer.observe(el);
});

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
}

//калькулятор
//палзунок
const tentacles = document.querySelector('#tentacles');
const customRange = document.querySelector('#customRange2');

customRange.addEventListener('input', function(){
    
    tentacles.value = customRange.value;
});

tentacles.addEventListener('input', function(){
    customRange.value = tentacles.value;
});


$('#type, #design, #adaptive, #customRange2, #tentacles').on('change', function(){
    sum();
});
function sum(){
    var type = $('#type').val();
    var design = $('#design').val();
    var adaptive = $('#adaptive').val();
    
    
    var sum = type + design + adaptive;
    //$('.total-price').text(sum);
    
    $({countNum: $('.total-price').text()}).animate({
        countNum: sum
    }
    ,
    {
        duration: 500,
        easing: 'swing',
        step: function(){
         $('.sum').text(Math.floor(this.countNum));   
        },
        complete: function(){
            $('.sum').text(this.countNum);
        }
    }
    )
}




