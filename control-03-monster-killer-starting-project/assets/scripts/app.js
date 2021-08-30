const ATTACK_VALUE = 10;

let currentHealth = 100;

function damageHandler(){
    const currentDamage = dealMonsterDamage(ATTACK_VALUE);
    currentHealth -= currentDamage;
    adjustHealthBars(currentHealth);
}

attackBtn.addEventListener('click', damageHandler);
