$(document).ready(function (){
    $('.news-page__accordion--active').click(function (event){
        $('.news-page__accordion').toggleClass('active').slideToggle(700);
        $(this).toggleClass('more');
    })
})