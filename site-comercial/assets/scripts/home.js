//Slide Home

const item1 = document.getElementById("1");
const item2 = document.getElementById("2");
const item3 = document.getElementById("3");

function Slide(){
    if(item1.className == "item-slide log")
    {
        item1.classList.remove("log")
        item2.classList.remove("out")
        item2.classList.add("log")
        item3.classList.add("out")

    } else if(item1.className == "item-slide out")
    {
        item1.classList.remove("out")
        item1.classList.add("log")
        item2.classList.add("out")
        item3.classList.remove("log")
    } else
    {
        item2.classList.remove("log")
        item1.classList.add("out")
        item3.classList.remove("out")
        item3.classList.add("log")
    }
}

setInterval(Slide, 7500);