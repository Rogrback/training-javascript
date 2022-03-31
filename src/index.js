import heroes from './data/heroes';

// console.log(heroes);

// console.log(owners);

const getHeroeById= (name)=> heroes.find((heroe)=> heroe.name === name);

const {name} = getHeroeById('Batman')


console.log(name);

const getHeroesByOwner= (owner)=> heroes.filter((heroe)=> heroe.owner === owner);

const [arr] = getHeroesByOwner('Marvel')

const {owner}= arr 

console.log(owner);

// const getHeroesByOwner2= (owner2)=>heroes.filter((heroe)=> heroe.owner === owner2);

// const [owner2] = getHeroesByOwner2('Marvel')

// console.log(owner2);
