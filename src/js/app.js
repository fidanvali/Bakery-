document.addEventListener("DOMContentLoaded", function () {
    var dropbtn = document.querySelector('.dropbtn');

    dropbtn.addEventListener('mouseenter', function () {
        dropbtn.querySelector('.dropdown-content').style.display = 'block';
    });

    dropbtn.addEventListener('mouseleave', function () {
        dropbtn.querySelector('.dropdown-content').style.display = 'none';
    });
});




