const $pictureContainer = document.getElementById("picture-container")
const $total = document.getElementById("total")
const $score = document.getElementById("score")
const $accumulatedScore = document.getElementById("accumulated-score")
const $bondContainer = document.getElementById("bond-container")

//Show the 3 dices
export function showPictures(){
    $pictureContainer.classList.remove("invisible")
 
}
//Hide the 3 dices
export function hidePictures(){
    $pictureContainer.classList.add("invisible")
}

export function resetGame(){
    hidePictures()
    $total.textContent = 0
    $score.textContent = 0
    $accumulatedScore.textContent = 0
    $bondContainer.classList.add("d-none")
}

//Show the element bond and hide the other bond
export function showBond(bond){
    const $bond = document.getElementById(bond.elementId)
    let $otherBond = null
    $bondContainer.classList.remove("d-none")
    $bond.classList.remove("d-none") // make visible

    //Hide other bond
    if(bond.elementId == "bond1"){
        $otherBond = document.getElementById("bond2")
        $otherBond.classList.add("d-none") // make visible
    }else{
        $otherBond = document.getElementById("bond1")
        $otherBond.classList.add("d-none") // make visible
    }
}

//return id of element bond to make visible
export function earnedBonus(random1, random2, random3){ 
    if(random1 == random2 && random1 == random3) return {elementId:"bond2", extra:10}

    if(random1 == random2) return {elementId:"bond1", extra:5}
    if(random1 == random3) return {elementId:"bond1", extra:5}
    if(random2 == random1) return {elementId:"bond1", extra:5}
    if(random2 == random3) return {elementId:"bond1", extra:5}
    if(random3 == random1) return {elementId:"bond1", extra:5}
    if(random3 == random2) return {elementId:"bond1", extra:5}

    return null
}