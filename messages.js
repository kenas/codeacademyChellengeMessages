const getRamdomNumber = () => {

    let ramdomNumber =  Math.floor(Math.random() * 13);

    return ramdomNumber;
}


const verbs = [
    'should', 
    'go', 
    'make', 
    'walk', 
    'stop', 
    'swimming', 
    'pulling', 
    'pushing', 
    'laugh', 
    'mop', 
    'throw',
    'smoke',
    'drink'
]

const getRamdomVerb = () => {

    let ramdomNumber = getRamdomNumber();
    //compare ramdom number with index and if there is much output the verb
   const NewVerbs =  verbs.filter((verb, index) => index === ramdomNumber);
   
   return NewVerbs[0];
}


const nouns = [
    'dog',
    'city',
    'cat',
    'bin',
    'car',
    'kino',
    'house',
    'TV',
    'shop',
    'Monday',
    'SUnday',
    'Juice',
    'News paper',
    'watch'
]


//make only one function where I will generate ramdom nouns and verbs into array

console.log(getRamdomVerb());


