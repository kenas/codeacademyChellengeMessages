
const getRamdomNumber = () => {

    let ramdomNumber =  Math.floor(Math.random() * 13);

    return ramdomNumber;
}

//A list of verbs
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

//A list of nouns
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

//A list of pronouns
const pronouns = [
    'I',
    'You',
    'He',
    'She',
    'It',
    'We',
    'They'
]

//Get ramdom verb
// const getRamdomVerb = () => {

//     let ramdomNumber = getRamdomNumber();
//     //compare ramdom number with index and if there is much output the verb
//    const NewVerbs =  verbs.filter((verb, index) => index === ramdomNumber);
   
//    return NewVerbs[0];
// }

//Generate ramdom nouns, verbs and pronouns into array
const getRamdomWord = () => {
    let newArrayWords = [];

    const ramdomNumber = getRamdomNumber();


    //I need to do the loop of pronouns till the word is going to be generaterd
    // newArrayWords = pronouns.filter((word, index) => index === ramdomNumber ? newArrayWords.push(word) : '');
    verbs.filter((word, index) => index === ramdomNumber ? newArrayWords.push(word) : '');
    nouns.filter((word, index) => index === ramdomNumber ? newArrayWords.push(word) : '');

    console.log(newArrayWords);
}



//make only one function where I will generate ramdom nouns, verbs and pronouns into array

console.log(getRamdomWord());


