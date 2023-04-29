import {showPictures, resetGame, showBond, earnedBonus} from './helpers.js'


const $picture1 = document.getElementById("picture1")
const $picture2 = document.getElementById("picture2")
const $picture3 = document.getElementById("picture3")

const $btnPlay = document.getElementById("btn-play")
const $btnReset = document.getElementById("btn-reset")
const $total = document.getElementById("total")
const $score = document.getElementById("score")
const $accumulatedScore = document.getElementById("accumulated-score")
const $bondContainer = document.getElementById("bond-container")


$btnPlay.addEventListener("click", ()=>{
    showPictures() //Only on the first click

    $btnPlay.textContent = "Play again"
    const random1 = Math.floor(Math.random() * 5) + 1
    const random2 = Math.floor(Math.random() * 5) + 1
    const random3 = Math.floor(Math.random() * 5) + 1
    $picture1.setAttribute("src", `images/dice_${random1}.png`)
    $picture2.setAttribute("src", `images/dice_${random2}.png`)
    $picture3.setAttribute("src", `images/dice_${random3}.png`)
    let total = random1 + random2 + random3
    let bond = earnedBonus(random1, random2, random3)
    let bondExtra = 0
    
    if(bond){        
        showBond(bond)
        bondExtra = bond.extra
    } else{
        $bondContainer.classList.add("d-none") // make bond container invisible 
    }

    $total.textContent = total
    $score.textContent = total + bondExtra
    $accumulatedScore.textContent = Number($accumulatedScore.textContent) + total + bondExtra
})

$btnReset.addEventListener("click", ()=>{
    resetGame()
})
