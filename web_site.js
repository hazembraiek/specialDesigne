let color=document.querySelectorAll(".setting ul li")
let root=document.documentElement
let backgroundLocal=window.localStorage.getItem("color")
root.style.setProperty("--color",backgroundLocal)
color.forEach((ele)=>{
    if(getComputedStyle(ele).getPropertyValue("background-color")==backgroundLocal){
        for(let i=0 ; i<color.length;i++){
            color[i].classList.remove("active_color")
        }
        ele.classList.add("active_color")
    }
})
color.forEach((col)=>{
    col.onclick=()=>{
        let background=getComputedStyle(col).getPropertyValue("background-color")
        for(let i=0 ; i<color.length;i++){
            color[i].classList.remove("active_color")
        }
        col.classList.add("active_color")
        root.style.setProperty("--color",background)
        window.localStorage.setItem("color",background)
    }
})





let setting=document.querySelector(".setting")
let icon_cong=document.querySelector(".icon-cong")
icon_cong.onclick=()=>{
    setting.classList.toggle("show")
    icon_cong.querySelector("i").classList.toggle("fa-spin")
}
let header=document.querySelector("header")
i=2;
function random_background (){
        random_back=setInterval(() => {
        header.style.backgroundImage=`url("imgs/0${i}.jpg")`
        if(i==6)
        header.style.backgroundImage=`url("imgs/0${i}.png")`
        i+=1
        if (i>8)
        i=1
    }, 10000);
}
random_background ()
let aside=document.querySelector("aside")
let yes=document.querySelectorAll(".yes")
let no=document.querySelectorAll(".no")
let back=window.localStorage.getItem("index_rand")
let show=window.localStorage.getItem("index_show")
if (back=="yes_rand"){
    no[0].style.opacity="0.5"
    yes[0].style.opacity="1"
}else if(back=="no_rand"){
    no[0].style.opacity="1"
    yes[0].style.opacity="0.5"
    clearInterval(random_back) 
}
if (show=="yes_show"){
    no[1].style.opacity="0.5"
    yes[1].style.opacity="1"
    aside.style.display="block"
}else if(show=="no_show"){
    no[1].style.opacity="1"
    yes[1].style.opacity="0.5"
    aside.style.display="none"
}
    for(let i=0 ; i<yes.length;i++){
    yes[i].onclick=()=>{
        no[i].style.opacity="0.5"
        yes[i].style.opacity="1"
        if(i==0){
        window.localStorage.setItem("index_rand","yes_rand")
        random_background()
        }else{
        window.localStorage.setItem("index_show","yes_show")
        aside.style.display="block"
        }      
    }
    no[i].onclick=()=>{
        yes[i].style.opacity="0.5"
        no[i].style.opacity="1"
        if(i==0){
        window.localStorage.setItem("index_rand","no_rand")
        clearInterval(random_back);
        }else{
        window.localStorage.setItem("index_show","no_show")
        aside.style.display="none"
        }
    }
    }




    let list=document.querySelector("header .nav_bar nav")
    let bar=document.querySelector("header .bar")
    
    bar.onclick=()=>{
        let tri = window.getComputedStyle(bar,'::before').getPropertyValue("display")
        list.classList.toggle("active")
        console.log(tri)
        if (tri=="none"){
            bar.style.setProperty("--display","block")
        }else{
            bar.style.setProperty("--display","none")
        }
    }

    let reset=document.getElementById("reset_value")
    reset.onclick=()=>{
        window.localStorage.clear()
        location.reload()
    }
    
    let skills=document.querySelector(".skills")
    window.onscroll = function () {
        let skillsOffsetTop = skills.offsetTop;
        let skillsOuterHeight = skills.offsetHeight;
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.pageYOffset;
        if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
          let allSkills = document.querySelectorAll(".skills .competence .skill span");
          allSkills.forEach(skill => {
            skill.style.width = skill.getAttribute("dataSet")
          });
        }
    }
    let title=document.querySelector(".popup p")
    let photos=document.querySelectorAll(".gallery .photo .img img")
    let popup=document.querySelector(".popup")
    let close_popup=document.querySelector(".close")
    
    photos.forEach((pho,key)=>{
        pho.onclick=()=>{
            let source=pho.src
            let source_img_popup=document.querySelector(".popup_photo img")
            source_img_popup.setAttribute("src",source)
            popup.classList.add("activePopup")
            title.innerHTML=`Image ${key+1}`
        }
    })


    close_popup.onclick=()=>{
        popup.classList.remove("activePopup")
    }
