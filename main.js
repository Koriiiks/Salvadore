window.onscroll = function() {fixNav()};

var navbar = document.getElementById("navigation");


var sticky = navbar.offsetTop;


function fixNav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const navEl = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () =>{
    navEl.classList.toggle("nav--open");
    menuIcon.classList.toggle("menu--open");
});

navEl.addEventListener('click', () =>{
    navEl.classList.remove("nav--open");
    menuIcon.classList.remove("menu--open");
});


let gIndex = 0;
let pIndex = 0;
let prIndex = 0;
let bIndex = 0;
showSlide();

    

function showSlide(){
    let granite = document.getElementsByClassName("slide1");
    let parquet = document.getElementsByClassName("slide2");
    let products = document.getElementsByClassName("slide3");
    let bona = document.getElementsByClassName("slide4");

    granite[gIndex].style.display = "none";
    parquet[pIndex].style.display = "none";
    products[prIndex].style.display = "none";
    bona[bIndex].style.display = "none";

    gIndex = (gIndex + 1) % granite.length;
    pIndex = (pIndex + 1) % parquet.length;
    prIndex = (prIndex + 1) % products.length;
    bIndex = (bIndex + 1) % bona.length;

    if (gIndex > granite.length){
        gIndex = 1;
    }
    if (pIndex > parquet.length){
        pIndex = 1;
    }
    if (prIndex > products.length){
        prIndex = 1;
    }
    if (bIndex > bona.length){
        bIndex = 1;
    }


    granite[gIndex].style.display = "block";
    parquet[pIndex].style.display = "block";
    products[prIndex].style.display = "block";
    bona[bIndex].style.display = "block";


    setTimeout(showSlide, 3000);
}

let sendBtn = document.getElementById("button");

sendBtn.addEventListener("click", function(event){

    event.preventDefault();

    const serviceID = "service_vqsr507";
    const templateID = "template_ra96j3n";

    
    emailjs.send(serviceID, templateID, {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value, 
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    })
    .then(
        res => {
            Swal.fire({
                icon: 'success',
                title: 'Sent',
                text: 'Your Email is successfully sent',
              })
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("phone").value = "";
              document.getElementById("message").value = "";
        })
        .catch((err) => console.log(err));
})


