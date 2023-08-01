const themeChanger = document.querySelectorAll(".themeChanger");
const form = document.querySelector("form");

async function submit(e){

    let input = document.querySelector("input.input");
    let originalName = input.value;
    const url = "https://api.github.com/users/" + originalName;
    
    let userdata;
    async function getData(url){
        let response = await fetch(url);
        userdata = response.json();
    }
    

    console.log(userdata);

    e.preventDefault();
}

window.addEventListener("DOMContentLoaded",() => {
    themeChanger.forEach(
        themeChanger => {
            themeChanger.addEventListener("click",() => {
                let themes = document.querySelectorAll(".theme");
                themes.forEach(
                    theme => {
                        // toggle dark class
                        theme.classList.toggle("dark");
                        // toggle display of svgs
                        if (theme.classList.contains("moon") || (theme.classList.contains("sun")))
                        {
                            theme.classList.toggle("d-none");
                        }
                        // update themetext textContent
                        if (theme.classList.contains("themetext"))
                        {
                            if (theme.classList.contains("dark"))
                            {
                                theme.textContent = "Light";
                            }
                            else
                            {
                                theme.textContent = "Dark";
                            }
                        }
                    }
                );
            });
        }
    );
    
    form.addEventListener("submit",submit);
    
});