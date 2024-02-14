
//The function will return a number
const getRamdomNumber = (multiplyBy) => {

    // Check if the parametr is a number
    let ramdomNumber = 0;

    if(typeof multiplyBy === 'number') {
        ramdomNumber =  Math.floor(Math.random() * multiplyBy);
    } else {
        return 'The parameter require a number!';
    }
 
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
    'Sunday',
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

    /* The getRamdomNumber() need to be call only once. NOT in the loop!
    If I will put it into filter it will generate over and over. 
    
    Olso note that the function is requte a number.
    */
    let ramdomNumber = getRamdomNumber(pronouns.length); 
        //console.log(ramdomNumber);

    pronouns.filter((pronoun, index) => {
        newArrayWords.push(pronoun);
    })

    return newArrayWords;
    //console.log(getNumberForPronouns);
}


console.log(getRamdomWord());


