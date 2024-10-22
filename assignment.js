const btnDisplayXY =  document.getElementById("btn-display-x-y");
const btnTheme = document.getElementById("btn-theme");
const btnModal = document.getElementById("btn-modal");
const btnSwapImage = document.getElementById("btn-swap-image");

btnDisplayXY.addEventListener("mouseover", function() {
    displayXY()
});
btnDisplayXY.addEventListener("mouseout", function() {
    showDataTable()
});
btnDisplayXY.addEventListener("mousemove", function(event){
    mousePos(event)
})
btnTheme.addEventListener("click", function() {
    themeClick()
});
btnModal.addEventListener("click", function() {
    modal()
});
btnSwapImage.addEventListener("click", function() {
    swapImage()
});


function mousePos(event){
    let posX = event.clientX
    let posY = event.clientY
    document.getElementById("mousePosX").innerText = `mouse X: ${posX}`
    document.getElementById("mousePosY").innerText = `mouse Y: ${posY}`
}

function displayXY(){
    document.getElementById("table").style.display ="none";
    document.getElementById("mousePosY").style.display ="block";
    document.getElementById("mousePosX").style.display ="block";
    console.log('hidden');
}

function showDataTable(){
    document.getElementById("mousePosY").style.display ="none";
    document.getElementById("mousePosX").style.display ="none";
    document.getElementById("table").style.display ="table";
    console.log('shown');
}

function themeClick() {
    let root = document.querySelector(':root');
    let rootStyle = getComputedStyle(root);
    let curentBackground = rootStyle.getPropertyValue('--backgroundColour')
    if (curentBackground == '#428bca'){
        root.style.setProperty('--backgroundColour', '#11C034');
        console.log('green time')
    }
    else{
        if (curentBackground == '#11C034'){
            root.style.setProperty('--backgroundColour', '#428bca');
            console.log('blue time')
        }
    }
}

function modal(){
    if (document.getElementById("modal").style.display == "block"){
        document.getElementById("modal").style.display = "none"
    }
    else{
            document.getElementById("modal").style.display ="block";
    }
}

const imageLocation = document.getElementById("image").src
let imageSource = imageLocation.split("business.jpg")[0]
console.log(imageSource)

function changeImage(object,imageName,altText){
    document.getElementById(object).src = (imageSource+imageName)
}

function swapImage(){
    console.log(document.getElementById("image").src)
    if (document.getElementById("image").src == (imageSource+"people.jpg")){
        changeImage("image","business.jpg")
        changeImage("modal-image","business.jpg")
    }
    else{
        if(document.getElementById("image").src == (imageSource+"business.jpg")){
            changeImage("image","people.jpg")
            changeImage("modal-image","people.jpg")
        }
    }
}


