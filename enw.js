const faqs = document.querySelectorAll(".faq");
const toggler=document.querySelectorAll(".fa-plus");


/*
faqs.forEach(faq =>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active");
        
        plus.classList.toggle("pluss");
    
    })
})

toggler.forEach(plus =>{
    plus.addEventListener("click", ()=>{
        faq.classList.toggle("active");
        plus.classList.toggle("pluss");
    })
}
)
*/

for(let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function(){
        toggler[i].classList.remove("pluss")

        let ans = document.querySelector(".active")
        for (let j = 0; j < faqs.length; j++) {
            if (faqs[j].classList.contains("active")) {
                ans.classList.remove("active")
                toggler[i].classList.remove("pluss")
            }           
        }
             
        this.classList.add("active")
        toggler[i].classList.add("pluss")
        
    })
   

}
