let hamMenu = document.querySelector(".ham");

hamMenu.addEventListener("click", () => {
    let navList = document.querySelector(".navlist");
    navList.classList.toggle("show");
    if(navList.classList.contains("show")){
        navList.classList.add("slide-out")
    }
})