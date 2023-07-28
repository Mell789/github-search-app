const themeicon = document.querySelector(".themeicon");

window.addEventListener("DOMContentLoaded",() => {
    themeicon.addEventListener("click",() => {
        let themes = document.querySelectorAll(".theme");
        themes.forEach(
            theme => {
                theme.classList.toggle("dark");
                if (theme.classList.contains("moon") || (theme.classList.contains("sun")))
                {
                    theme.classList.toggle("d-none");
                }
            }
        );
    });
});