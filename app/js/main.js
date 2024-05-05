$(function () {
    $(document).ready(function () {
        $('.menu-icon').click(function (event) {
            $('.menu-icon, .menu-nav').toggleClass('active');
            $('body').toggleClass('lock');
        })
    });
})
{
    const scrollLinks = document.querySelectorAll('.scroll-link');
    console.log(scrollLinks)
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function (event) {
            event.preventDefault();
            const id = scrollLink.getAttribute('href');
            // console.log(id);
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        })
    }
}