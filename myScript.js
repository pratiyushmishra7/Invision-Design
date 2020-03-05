const slideImage1  = document.getElementsByClassName("slide1");
const slideImage2  = document.getElementsByClassName("slide2");
const slide1  = document.getElementsByClassName("rectangle1");
const slide2  = document.getElementsByClassName("rectangle2");
const slideChange = () => {
    if(slideImage1[0].style.display === "none"){
       
        slideImage1[0].style.display = "block"
        slideImage2[0].style.display = "none"
    }
    else{
     
        slideImage1[0].style.display = "none"
        slideImage2[0].style.display = "block"
    }
    if(slideImage1[0].style.display === "none"){
        slide2[0].style.left = "830px"
        slide1[0].style.left = "850px"
    }
    else{
        slide2[0].style.left = "850px"
        slide1[0].style.left = "830px"
    }
}
