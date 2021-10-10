"use strict"

let sum = 0;
let time = 0;

let kindOf = ('.choise1');
console.log(kindOf);

if (kindOf == "1") {
    sum = sum + 5000;
    time = time + 5;
    console.log(time);
    console.log(sum);
    }

    else if (kindOf == "2"){
        sum = sum + "7000";
        time = time + 4;
    console.log(sum);
    }
        
    else if (kindOf == "3"){
      sum = sum + 4000;
      time = time + 5;
      console.log(time);
      console.log(sum);
    }
    
    else {
        sum = sum + 2000;
        time = time + 3;
        console.log(time);
        console.log(sum);
    };



let disign = prompt("Выберите цифру. Дизайн: 1-авторский, 2-индивидуальный");
console.log(disign);

if (disign == "1") {
    sum = sum + 2000;
    time = time + 2;
    console.log(time);
    console.log(sum);
    }
    else {
    sum = sum + 5000;
    time = time + 4;
    console.log(time);
    console.log(sum);
    };



let flexibility = prompt("Выберите цифру. Адаптивность: 1-адаптивный 2-не адаптивный");
console.log(flexibility);

if (flexibility == "1") {
    sum = sum + 5000;
    time = time + 2;
    console.log(time);
    console.log(sum);
    }
    else {
    sum = sum + 2000;
    time = time + 1;
    console.log(time);
    console.log(sum);
    };

alert("Стоимость: " + sum + "Р");
alert("Сроки(в днях): " + time);





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
    $("section").each((i, el) => {
        
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
    $('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"})
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





