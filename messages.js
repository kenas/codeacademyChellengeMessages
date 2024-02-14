
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
    'swimm', 
    'pull', 
    'push', 
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
    'juice',
    'news paper',
    'watch'
]

//A list of pronouns
const pronouns = [
    'I',
    'I am',
    'You',
    'You are',
    'He',
    'He is',
    'She',
    'She is',
    'It',
    'We',
    'We are',
    'They',
    'They are'
]

//Generate ramdom nouns, verbs and pronouns into array
const getRamdomWords = () => {

    let newArrayWords = [];

    /* The getRamdomNumber() need to be call only once. NOT in the loop!
    If I will put it into filter it will generate over and over. 
    
    Olso note that the function is requte a number.
    */
    let ramdomNumber = getRamdomNumber(pronouns.length);

    const getRamdomSentence = (pronouns, verbs, nouns, newArrayWords, ramdomNumber) => {

        if(pronouns[ramdomNumber])  {
            newArrayWords.push(pronouns[ramdomNumber]);
        } 
    
        if(verbs[ramdomNumber])  {
            newArrayWords.push(verbs[ramdomNumber]);
        } 
    
        if(nouns[ramdomNumber])  {
            newArrayWords.push(nouns[ramdomNumber]);
        }

        return newArrayWords;
    }

    return getRamdomSentence(pronouns, verbs, nouns, newArrayWords, ramdomNumber);

}


const getGramaRight = (getRamdomWords) => {
    let test = [];

    let ramdomPronouns = getRamdomWords();
    const ramdomNumber = getRamdomNumber(pronouns.length);
    
    const makeSureVerbIsRight = verbs[ramdomNumber];
    //console.log(makeSureVerbIsRight);
    //console.log(getTheVerbRight(forTheVerb));
    const getTheVerbRight = (makeSureVerbIsRight) => {
        
        if(makeSureVerbIsRight === 'smoke') {
            return 'smoking';
        }
        
        if(makeSureVerbIsRight === 'make') {
            return 'making';
        }
    }

    console.log(getTheVerbRight(makeSureVerbIsRight))
    //the method includes is case-sensitive so I have to conver it to small letters
    if(ramdomPronouns[0].toLowerCase().includes('you are') 
        || ramdomPronouns[0].toLowerCase().includes('i am') 
        || ramdomPronouns[0].toLowerCase().includes('she is')  
        || ramdomPronouns[0].toLowerCase().includes('he is')
        || ramdomPronouns[0].toLowerCase().includes('we are') 
        || ramdomPronouns[0].toLowerCase().includes('they are') 
        ) {
        
          
        //test.push(ramdomPronouns[0], verbs[ramdomNumber] === 'smoke' ? verbs[ramdomNumber] = 'smoking' : verbs[ramdomNumber] + 'ing' , nouns[ramdomNumber]);
        test.push(ramdomPronouns[0], getTheVerbRight(makeSureVerbIsRight) ? getTheVerbRight(makeSureVerbIsRight) : verbs[ramdomNumber] + 'ing', nouns[ramdomNumber]);
    } else {
        test.push(ramdomPronouns[0], verbs[ramdomNumber], nouns[ramdomNumber]);
    }
        
    
    return `${test[0]} ${test[1]} the ${test[2]}`;
}

console.log(getGramaRight(getRamdomWords));


