const streams =document.getElementsByClassName("stream");

var i;

for(i=0;i<streams.length;i++){
    streams[i].addEventListener("click", function(){
       let j = document.querySelector(".current");
        j.classList.remove("current");

        this.classList.add("current");

    })
}