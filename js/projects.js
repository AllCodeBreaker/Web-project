const projects = {
    "project": [
        {
            "image": "<img src=\"projects/1call.png\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/3agilan-tm.jpg\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/4burger-ad.jpg\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/5remo-pst.png\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/6badassT.jpg\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/7cocunut.jpg\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/8rest 2.png\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/9love-today.png\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/10fuel-s.png\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/11tourism jpg.jpg\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/12.4382358.jpg\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/13engls.png\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/14fnl 2.jpg\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/15neo thumb.jpg\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        },
        {
            "image": "<img src=\"projects/16.png\" alt=\"project image\" class=\"project-image\"></img>",
            "name": "<p class=\"project-name\"></p>",
            "desc": "<p class=\"project-description\"></p>"
        }
    ]
};



/*

        <div class="project-container">
          <img src="projects/2call.png" alt="" class="project-image">
          <p class="project-name">Call Of Duty Design</p>
          <p class="project-description">
            Recreation of Call Of Duty
          </p>
        </div>



*/

function displayProjects(){
    const preTemp = "<div class=\"project-container\">";
    const postTemp = "</div>"
    let wholeTemp = "";
    const projectElement = document.getElementById("more");
    for(let i = 0;i<projects.project.length; i++){
        let iND = projects.project[i].image +  projects.project[i].name +projects.project[i].desc ;
        wholeTemp = wholeTemp + preTemp + iND + postTemp;
    }
    projectElement.innerHTML = wholeTemp;

    document.getElementById("show-btn").className = "hide" ;
}
