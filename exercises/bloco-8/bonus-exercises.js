const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
const battleMembers = { mage, warrior, dragon };

// exercício 1

const dragonDamage = () => {
  const strengthDragon = battleMembers.dragon.strength;
  return Math.floor(Math.random() * (strengthDragon - 16)) + 15;
};
/* console.log(dragonDamage()); */

const warriorDamage = () => {
  const min = battleMembers.warrior.strength;
  const max = battleMembers.warrior.weaponDmg * min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//console.log(warriorDamage());

const mageResults = () => {
    result = {
      damage: 'Não possui mana suficiente',
      manaSpent: 0
    };
  return result;
}

const mageStatus = () => {
  const min = battleMembers.mage.intelligence;
  const max = min * 2;
  const manaPoints = battleMembers.mage.mana;
  const result = {
    damage: Math.floor(Math.random() * (max - min + 1)) + min,
    manaSpent: 15
  };
  if (manaPoints < 15) {
    return mageResults();
  }
  return result;
};
console.log(mageStatus());