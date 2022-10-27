$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// set up initial state
let attackPoints = 100;
let hitPoints = 100;
let fungusAlive = true;
let playerAlive = true;


function onReady() {
    
                                    // Make sure you check the index.html file! 
                                    // There are lots of buttons and things ready for you to hook into here!
    


    
                                    // 🧠 Remember
                                    // - Handle events that ->
                                    // - Updates state which is ->
                                    // - Rendered to the DOM
    // render initial state
        // render hitPoints
        renderHitPoints();
        // render attackPoints
        renderAttackPoints();


    // attack event handlers
        // Arcane Scepter
    $('.arcane-sceptre').on('click', attackArcaneScepter);
        //Entangle
    $('.entangle').on('click', attackEntangle);
        //Dragon Blade
    $('.dragon-blade').on('click', attackDragonBlade);
        //Star Fire
    $('.star-fire').on('click', attackStarFire);


}

// event functions
function attackArcaneScepter() {
    let attackCost = 12;
    if(attackPoints>=attackCost){
    attackPoints -= attackCost;
    hitPoints -=14;
    }
    // HP cannot go below 0
    if (hitPoints < 0) {
        hitPoints = 0;
    }
    isItDead();
    renderDeath();
    renderAttackPoints();
    renderHitPoints();
    
}
function attackEntangle() {
    let attackCost = 23;
    if(attackPoints>=attackCost){
    attackPoints -= attackCost;
    hitPoints -=9;
    }
    // HP cannot go below 0
    if (hitPoints < 0) {
        hitPoints = 0;
    }
    isItDead();
    renderDeath();
    renderAttackPoints();
    renderHitPoints();
}

function attackDragonBlade() {
    let attackCost = 38;
    if(attackPoints>=attackCost){
    attackPoints -= attackCost;
    hitPoints -=47;
    }
    // HP cannot go below 0
    if (hitPoints < 0) {
        hitPoints = 0;
    }
    isItDead();
    renderDeath();
    renderAttackPoints();
    renderHitPoints();

}
function attackStarFire() {
    let attackCost = 33;
    if(attackPoints>=attackCost){
    attackPoints -= attackCost;
    hitPoints -=25;
    }
    // HP cannot go below 0
    if (hitPoints < 0) {
        hitPoints = 0;
    }
    isItDead();
    renderDeath();
    renderAttackPoints();
    renderHitPoints();

}

function isItDead() {
    if (hitPoints === 0) {
        fungusAlive = false;
    }

}


// render functions
function renderHitPoints(){
    $('.hp-text').html(`
    ${hitPoints} HP
    `);
}

function renderAttackPoints() {
    $('.ap-text').html(`
    ${attackPoints} AP
    `)
}

// render death to Dom
function renderDeath() {
    if (!fungusAlive){
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
    }
}


// render death
