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

function swapImage(){
    console.log(document.getElementById("image").src)
    if (document.getElementById("image").src == (imageSource+"people.jpg")){
        document.getElementById("image").src = (imageSource+"business.jpg")
        document.getElementById("image2").src = (imageSource+"business.jpg")
    }
    else{
        if(document.getElementById("image").src == (imageSource+"business.jpg")){
            document.getElementById("image").src = (imageSource+"people.jpg")
                document.getElementById("image2").src = (imageSource+"people.jpg")
        }
    }
}
