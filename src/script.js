const themeChanger = document.querySelectorAll(".themeChanger");
const form = document.querySelector("form");

let login = document.querySelector(".login");
let login_ = document.querySelector(".login_");
let bio = document.querySelectorAll(".bio");
let repos = document.querySelectorAll(".repos");
let followers = document.querySelectorAll(".followers");
let following = document.querySelectorAll(".following");
let locations = document.querySelectorAll(".location");
let companies = document.querySelectorAll(".company");
let blogs = document.querySelectorAll(".blog");
let twitters = document.querySelectorAll(".twitter");
let avatars = document.querySelectorAll(".avatar");
let created_date = document.querySelector(".created_date");
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

async function getData(url){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    let datasegments = data.created_at.split("T").shift().split("-");
    created_date.textContent = `${datasegments[2]} ${months[datasegments[1]-1]} ${datasegments[0]}`;
    console.log(datasegments[1]);

    login.textContent = data.login;
    login_.textContent = "@" + data.login;
    bio.forEach(
        bio => {
            bio.textContent = data.bio;
        }
    );
    repos.forEach(
        repo => {
            repo.textContent = data.public_repos;
        }
    );
    followers.forEach(
        followers => {
            followers.textContent = data.followers;
        }
    );
    following.forEach(
        following => {
            following.textContent = data.following;
        }
    );
    locations.forEach(
        location => {
            if (data.location == null)
            {
                location.textContent = "Not Available";
                let parents = document.querySelectorAll(".icon-container-location");
                parents.forEach(
                    parent => parent.classList.add("notavailable")
                );
            }
            else
            {
                location.textContent = data.location;
                let parents = document.querySelectorAll(".icon-container-location");
                parents.forEach(
                    parent => parent.classList.remove("notavailable")
                );
            }
        }
    );
    companies.forEach(
        company => {
            if (data.company == null)
            {
                company.textContent = "Not Available";
                let parents = document.querySelectorAll(".icon-container-company");
                parents.forEach(
                    parent => {
                        parent.classList.add("notavailable");
                    }
                );
            }
            else
            {
                company.textContent = data.company;
                let parents = document.querySelectorAll(".icon-container-company");
                parents.forEach(
                    parent => {
                        parent.classList.remove("notavailable");
                    }
                );
            }
        }
    );
    blogs.forEach(
        blog => {
            if (data.blog == null || data.blog == "")
            {
                blog.textContent = "Not Available";
                let parents = document.querySelectorAll(".icon-container-blog");
                parents.forEach(
                    parent => {
                        parent.classList.add("notavailable");
                    }
                );
            }
            else
            {
                blog.textContent = data.blog;
                let parents = document.querySelectorAll(".icon-container-blog");
                parents.forEach(
                    parent => {
                        parent.classList.remove("notavailable");
                    }
                );
            }
        }
    );
    twitters.forEach(
        twitter => {
            if (data.twitter_username == null)
            {
                twitter.textContent = "Not Available";
                let parents = document.querySelectorAll(".icon-container-twitter");
                parents.forEach(
                    parent => parent.classList.add("notavailable")
                );
            }
            else
            {
                twitter.textContent = data.twitter_username;
                let parents = document.querySelectorAll(".icon-container-twitter");
                parents.forEach(
                    parent => parent.classList.remove("notavailable")
                );
            }
        }
    );
    avatars.forEach(
        avatar => {
            avatar.setAttribute("src",data.avatar_url);
        }
    );
}

async function submit(e){

    let input = document.querySelector("input.input");
    let originalName = input.value;
    const url = "https://api.github.com/users/" + originalName;


    
    getData(url);

    e.preventDefault();
}

function fixHeight() {
    const viewHeight = window.innerHeight;
    const mainHeight = document.querySelector(".main").clientHeight;
    const html = document.querySelector("html");

    if ( mainHeight > viewHeight )
    {
        html.classList.remove("vh-100");
    }
    else
    {
        html.classList.add("vh-100","d-flex","justify-content-center","align-items-center");
    }

    var heightInfo = {
        mainHeight: mainHeight,
        viewHeight: viewHeight
    }

    console.log(heightInfo);
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

    fixHeight();
    
});