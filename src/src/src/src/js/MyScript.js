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

//калькулятор1
$('#type, #design, #adaptive').on('change', function(){
    sum();
});
function sum(){
    var type = $('#type').val();
    var design = $('#design').val();
    var adaptive = $('#adaptive').val();

 
    var sum = parseInt(type) + parseInt(design) + parseInt(adaptive);
    console.log(sum);
  
    //$('.total-price').text(sum);
    
    $({countNum: $('.total-price').text()}).animate({
        countNum: sum
    }
    ,
    {
        duration: 500,
        easing: 'swing',
        step: function(){
         $('.total-price').text(Math.floor(this.countNum));   
        },
        complete: function(){
            $('.total-price').text(this.countNum);
        }
    }
    )
};
//калькулятор2

$('#type, #design, #adaptive').on('change', function(){
    sum2();
});
function sum2(){
    var type = $('#type option:selected').attr("data");
    var design = $('#design option:selected').attr("data");
    var adaptive = $('#adaptive option:selected').attr("data");

 
    var sumTime = parseInt(type) + parseInt(design) + parseInt(adaptive);
    console.log(sumTime);
  
    //$('.total-price').text(sum);
    
    $({countNum: $('.total-time').text()}).animate({
        countNum: sumTime
    }
    ,
    {
        duration: 500,
        easing: 'swing',
        step: function(){
         $('.total-time').text(Math.floor(this.countNum));   
        },
        complete: function(){
            $('.total-time').text(this.countNum);
        }
    }
    )
};

//всплывающее окно
$ ( document ).ready(function(){
    showStartModal();
});
function showStartModal(){
    setTimeout (function(){
        $('#exampleModal').modal('show');
         }, 30000);
};



//затяжная анимация wow
new WOW().init();

//Валидация форм

$("#inputTel").mask("+7(999) 999-9999");

$('.mail').submit(function(event){
if ($("#inputTel").val() == "" || $("#exampleFormControlInput1").val == "" ){
    event.preventDefault();
    alert("Введите телефон")
}
});

//анимация после нажатия на кнопку отправить для "обратной связи"
$('.mail').submit(function(event){
    event.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: $(this).serialize()
    }).done(function (){
        $(this).find("input").val("");
        alert("Сообщение успешно отправлено!");
        $("form").trigger("reset");
    });
    return false;
    
});

//анимация после нажатия на кнопку отправить для "Отправьте мне сообщение"
$('.massEmail').submit(function(event){
    event.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "php/mail2.php",
        data: $(this).serialize()
    }).done(function (){
        $(this).find("input").val("");
        alert("Сообщение успешно отправлено!");
        $("form").trigger("reset");
    });
    return false;
    
});

//провека на браузер, изменение разрешения фото
if (navigator.userAgent.includes('Safari')){
    $("#photoRod2").attr("src","../img/%D0%A0%D0%BE%D0%B4%D0%B8%D0%BE%D0%BD2.png");
    $("#photoLaptop").attr("src","../img/%D0%BD%D0%BE%D1%83%D1%82.png");
    $("#photoStaples1").attr("src","../img/%D0%B7%D0%BD%D0%B0%D0%BA.png");
    $("#photoRocket").attr("src","../img/%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%B0.png");
    $("#photoVoise").attr("src","../img/%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BE%D1%84%D0%BE%D0%BD.png");
    $("#photoCase1").attr("src","../img/%D1%81%D0%B0%D0%B9%D1%82.png");
    $("#photoCase2").attr("src","../img/%D1%81%D0%B0%D0%B9%D1%82.png");
    $("#photoCase3").attr("src","../img/%D1%81%D0%B0%D0%B9%D1%82.png");
    $("#photoLine").attr("src","../img/%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%BE%D0%B4%D0%B8%D1%82%D0%BE%D0%B3%D0%B0.png");
    $("#photoSmile").attr("src","../img/%D1%81%D0%BC%D0%B0%D0%B9%D0%BB.png");
    $("#photoStaples2").attr("src","../img/%D1%81%D0%BA%D0%BE%D0%B1%D0%BA%D0%B8.png");
    $("#photoOk").attr("src","../img/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B02.png");
    $("#photoWin").attr("src","../img/%D0%BA%D1%83%D0%B1%D0%BE%D0%BA.png");
    $("#photoReviews1").attr("src","../img/%D1%84%D0%BE%D1%82%D0%BA%D0%B0.png");
    $("#photoReviews2").attr("src","../img/%D1%84%D0%BE%D1%82%D0%BA%D0%B0.png");
    $("#photoReviews3").attr("src","../img/%D1%84%D0%BE%D1%82%D0%BA%D0%B0.png");
    $("#photoLocate").attr("src","../img/%D0%B3%D0%B5%D0%BE.png");
    $("#photoMail").attr("src","../img/%D0%BA%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82.png");
    $("#photoTel").attr("src","../img/%D1%82%D1%80%D1%83%D0%B1%D0%B0.png");
    
    $(".main").css("backgrount","../img/%D0%A0%D0%BE%D0%B4%D0%B8%D0%BE%D0%BD1.png","../img/bg.png");
    $(".main2").css("backgrount","../img/%D0%A7%D0%B5%D1%80%D1%82%D0%B0%20%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0.png","../img/%D0%A4%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%81%D0%BB%D0%BE%D0%B9.png");
    $(".main3").css("backgrount","../img/%D0%A7%D0%B5%D1%80%D1%82%D0%B0%20%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0.png","../img/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20%D1%84%D0%BE%D0%BD%D0%B0%20%D1%81%D1%82%D1%803.png");
    $(".main4").css("backgrount","../img/%D0%A7%D0%B5%D1%80%D1%82%D0%B0%20%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B02.png","../img/%D0%A4%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%81%D0%BB%D0%BE%D0%B9.png");
     $(".main6").css("backgrount","../img/%D0%A7%D0%B5%D1%80%D1%82%D0%B0%20%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0.png","../img/%D1%84%D0%BE%D0%BD.png");
     $(".main7").css("backgrount","../img/%D0%A7%D0%B5%D1%80%D1%82%D0%B0%20%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0.png");
     $(".main8").css("backgrount","../img/%D0%A7%D0%B5%D1%80%D1%82%D0%B0%20%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0.png","../img/%D0%A4%D0%BE%D0%BD2.png");

}




























