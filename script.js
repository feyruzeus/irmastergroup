$(document).ready(function(){
    $('.image-carousel').slick({
        prevArrow:"<button type='button' class='prev' className='slick-arrow'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='next' className='slick-arrow'><i class='fa-solid fa-angle-right'></i></button>",
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000
    });
    $('.partners-carousel').slick({
        prevArrow:"<button type='button' class='prev' className='slick-arrow'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='next' className='slick-arrow'><i class='fa-solid fa-angle-right'></i></button>",
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: false,
        variableWidth: true
    });
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);

// const allItems = document.querySelectorAll(".item");
var activeTab = document.querySelector(".tab.active");;

gallerryTabs = document.querySelectorAll(".reference .head .tabs .tab");
document.querySelector(".reference .gallery").style.height = `${document.querySelector(".reference .gallery .items.active").offsetHeight + 50}px`;

gallerryTabs.forEach((tab)=>{
     tab.addEventListener("click", ()=>{

         removeActiveTabs(activeTab);
         setActiveTab(tab);
         if(gallerryTabs[0].classList.contains("active")){
             document.querySelector(".reference .gallery").style.borderRadius = "0 15px 15px 15px";
         }
         else if (gallerryTabs[gallerryTabs.length-1].classList.contains("active")){
             document.querySelector(".reference .gallery").style.borderRadius = "15px 0 15px 15px";
         }
         else {
             document.querySelector(".reference .gallery").style.borderRadius = "15px 15px 15px 15px";
         }
         activeTab = document.querySelector(".tab.active")

         removeActiveItems();
         activeItems();
         document.querySelector(".reference .gallery").style.height = `${document.querySelector(".reference .gallery .items.active").offsetHeight + 50}px`;

         // activeItems()

     })
})
function removeActiveTabs(activeTab){
        activeTab.classList.remove("active");

}

function setActiveTab(tab){
  activeTab = document.querySelector(".tab.active");
    tab.classList.add("active");
}
function activeItems(){

    var items = document.querySelector("." + activeTab.classList[activeTab.classList.length - 2] + ".items")
    let childrenItems = [].slice.call(items.children)
    items.classList.add("active")
    items.style
    childrenItems.forEach( (item)=>{
        item.classList.add("active")
    })
    // document.querySelector(".reference .gallery").style.height =  document.querySelector(".reference .gallery .items.active").style.height;
    // console.log(document.querySelector(".reference .gallery").style.height)

}
function removeActiveItems(){
    const gallery = document.querySelector(".gallery")
    var items = document.querySelector("." + activeTab.classList[activeTab.classList.length - 2] + ".items")
    console.log(items)
    let childrenItems = [].slice.call(items.children)
    let gallerychild = [].slice.call(gallery.children)
    // function rem(e){
    //     e.style.display = "none"
    //
    // }
    gallerychild.forEach((e)=>{

        if (e.classList.contains("active")){
            e.classList.remove("active")

        }
        // setTimeout(rem, 1000)
    });
    childrenItems.forEach( (item)=>{
        item.classList.remove("active")
        // setTimeout((items)=>{items.style.display="none"}, 400)
    })
}

