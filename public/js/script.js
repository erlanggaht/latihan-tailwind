const ul = document.querySelector("#ul");

ul.classList.add("scale-[0]");

document.querySelector("#btn-nav").addEventListener("click", function () {
  document.querySelector("#btn-nav").classList.toggle("btn-nav-active");
  ul.classList.toggle("scale-[0]");

  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop >= 100) {
      const ul = document.querySelector("#ul");
      document.querySelector("#btn-nav").classList.remove("btn-nav-active");
      ul.classList.add("scale-[0]");
    } else {
      console.log(document.documentElement.scrollTop);
    }
  });
});

window.addEventListener("scroll", () => {
  var scrollVal = document.body.getBoundingClientRect().top;
  var cardDesc = document.getElementById("card-description");
  var cardProfile = document.getElementById("CardProfile");
  if (scrollVal <= -220) {
    cardDesc.classList.add("scale-1");
    cardDesc.classList.remove("scale-0");
  } else {
    cardDesc.classList.add("scale-0");
    cardDesc.classList.remove("scale-1");
  }

  if (scrollVal <= -505) {
    cardProfile.classList.add("opacity-100");
    cardProfile.classList.remove("opacity-5");
  } else {
    cardProfile.classList.add("opacity-5");
    cardProfile.classList.remove("opacity-100");
  }
});

const copyrightHover = () => {  
   const copyterms = document.querySelector('.copyrightTerms')
   copyterms.classList.add('text-dark')
   document.querySelector('#copyright')
   .addEventListener('mouseout',()=>{
    copyterms.classList.add('text-dark')
        copyterms.classList.add('text-slate-400')

    })
   copyterms.classList.toggle('text-slate-400')

} 

function Top (){
    const getTop = document.body.getBoundingClientRect().top
    getTop === 0 ? window.scrollTo(0,document.body.scrollHeight) :  window.scrollTo(0,0)


}