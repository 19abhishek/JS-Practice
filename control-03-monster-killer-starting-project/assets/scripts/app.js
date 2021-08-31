const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MONSTER_ATTACK_VALUE = 20;


let hasBonusLife = true;
let currentHealth = 100;
let currentPlayerhealth = currentHealth;
let currentMonsterHealth = currentHealth;

adjustHealthBars(currentHealth);

function endRound(){
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerhealth -= playerDamage;

    if(currentPlayerhealth<=0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerhealth += 30;
        setPlayerHealth(currentPlayerhealth);
        alert('Bonus life ne bacha liya broooo!!');
    }

    if(currentMonsterHealth <= 0 && currentPlayerhealth >= 0){
        alert('You won!');
    }else if(currentMonsterHealth >=0 && currentPlayerhealth <= 0){
        alert('You Lost!');
    }else if(currentMonsterHealth <= 0 && currentPlayerhealth <= 0){
        alert('Miracle, it was a draw!');
    }
    //adjustHealthBars(currentMonsterHealth);

    if(currentMonsterHealth <= 0 || currentPlayerhealth <= 0){
        resetHandler();
    }

}

function damageDealt(type){
    let damage;
    if(type === 'ATTACK'){
        damage = ATTACK_VALUE;
    }else if(type === 'STRONG_ATTACK_VALUE'){
        damage = STRONG_ATTACK_VALUE;
    }
    const currentDamage = dealMonsterDamage(damage);
    currentMonsterHealth -= currentDamage;
    endRound();
    //adjustHealthBars(currentPlayerhealth);
}

function attackHandler(){
    damageDealt('ATTACK');
}

function strongAttackHandler(){
    damageDealt('STRONG_ATTACK_VALUE');
}

function healHandler(){
    let healValue;
    if (currentPlayerhealth >= currentHealth - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = currentHealth - currentPlayerhealth;
    } else {
        healValue = HEAL_VALUE;
    }
  increasePlayerHealth(healValue);
  currentPlayerhealth += healValue;
  endRound();
}

function resetHandler(){
    currentPlayerhealth = currentHealth;
    currentMonsterHealth = currentHealth;
    // hasBonusLife = true;
    // bonusLifeEl.parentNode.appendChild(bonusLifeEl);
    resetGame(currentHealth);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
