{
    let loader = document.querySelector(".loader-wrapper");
    let main = document.getElementById("main-body")
            
    window.addEventListener('load', function () {
        // loader.classList.toggle('fade');
        loader.style.display = 'none';
        main.classList.toggle('hide');
    });
}