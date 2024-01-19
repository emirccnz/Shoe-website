const getShopNowButton = document.getElementById("shopNowButton")
const getShowNowIElements = document.getElementById("shopNowI")
const getWARightSideDiv = document.getElementById("rightSide")
const getWALeftSideDiv = document.getElementById("leftSide")
const otherPicWA = document.getElementsByClassName("divPic")
const getWAPicHuge = document.getElementById("picHuge")
const reviewImg = document.getElementsByClassName("reviewImg")
const reviewImgDiv = document.getElementsByClassName("imgDiv")
const getShoeImgDiv = document.getElementsByClassName("pcsimgDiv")
const getFollowBoxDiv = document.getElementsByClassName("followBox")

const aElements = {
    home:document.getElementById("aHome"),
    products:document.getElementById("aProducts"),
    about:document.getElementById("aAbout"),
    review:document.getElementById("aReview"),
    services:document.getElementById("aServices")
}

const hElements = {
    hProducts:document.getElementById("hProducts"),
    hAbout:document.getElementById("hAbout"),
    hReview:document.getElementById("hReview"),
    hServices:document.getElementById("hServices"),
}



let checker = undefined;

events()

function events(e){
    getShopNowButton.addEventListener("mouseover",()=>{
        moveIEl()
    })
    getShopNowButton.addEventListener("mouseout",()=>{
        moveIElReverse()
    })
    
    window.addEventListener("resize",()=>{
            fixLeftSideHeight()
        })
    window.addEventListener("load",fixLeftSideHeight())

    Array.from(reviewImgDiv).forEach((imgDiv)=>{
        imgDiv.addEventListener("mouseover",()=>{
            imgDiv.style.cursor = "pointer"
            imgDiv.style.transition = "0.3s"
            imgDiv.style.width = "5.5rem"
            imgDiv.style.height = "5.5rem"
        })
        imgDiv.addEventListener("mouseout",()=>{
            imgDiv.style.width = "5rem"
            imgDiv.style.height = "5rem"
        })
    })
    
    Array.from(getShoeImgDiv).forEach((shoeImg)=>{
        shoeImg.addEventListener("mouseover",()=>{
            shoeImg.style.cursor = "pointer"
            shoeImg.style.transition = "0.4s"
            shoeImg.style.width = "90%"
        })
        shoeImg.addEventListener("mouseout",()=>{
            shoeImg.style.width = "80%"
        })
    })

    Array.from(otherPicWA).forEach((pic)=>{
        pic.addEventListener("click",()=>{
            let thisPicSrc = pic.children[0].getAttribute("src")
            getWAPicHuge.setAttribute("src",thisPicSrc)
        })
    })
    
    aElements.home.addEventListener("click",(e)=>{
        window.scrollTo = "0"
        
    })
    
    aElements.products.addEventListener("click",(e)=>{
        hElements.hProducts.scrollIntoView()
        e.preventDefault()
    })
    aElements.about.addEventListener("click",(e)=>{
        hElements.hAbout.scrollIntoView()
        e.preventDefault()
    })
    aElements.review.addEventListener("click",(e)=>{
        hElements.hReview.scrollIntoView()
        e.preventDefault()
    })
    aElements.services.addEventListener("click",(e)=>{
        hElements.hServices.scrollIntoView()
        e.preventDefault()
    })
}


function moveIEl(){
    getShowNowIElements.style.transform = "translateX(5px)"
}
function moveIElReverse(){
    getShowNowIElements.style.transform = "translateX(0px)"
}

function fixLeftSideHeight(){
    let rsClientHeight = getWAPicHuge.clientHeight
    getWALeftSideDiv.style.height = `calc(${rsClientHeight}px)`
    if(window.innerWidth >=800 || document.innerWidth >=800){
    checker = true
    getWALeftSideDiv.style.transform = "translateY(-22.5%)"
    }
    else{
        if(checker==true){
            getWALeftSideDiv.style.transform = "translateY(0px)"
            checker=false
        }
    }
}


