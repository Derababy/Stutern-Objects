//Question 1
function InstagramPost(author, content, image, views, likes){
    this.handleofauthor = author;
    this.content = content;
    this.imagelink = image;
    this.numofviews = views;
    this.numoflikes = likes;
}



//Question 2
const myPost1 = new InstagramPost("@nora_roberts", "cooking", "https//www.nora.com", 5300, 3156);
const myPost2 = new InstagramPost("@danielle_steele", "going hiking", "https//www.dany.com", 9480, 6395);

//console.log(myPost1);
//console.log(myPost2);



//Question 3a
function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location,
    };
}
const person1 = createPerson("Musa", 19, "Lekki");

//console.log(person1);



//Question 3b
function createJambScores(eng, govt, lit, crk){
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    };
}
const musaJambScores = createJambScores(233, 219, 240, 257);

//console.log(musaJambScores)

person1.createJambScores = musaJambScores
console.log(person1)



//Question 4
//1. Use the spread operator
//2. Call the Object.assign() function
//3. Use JSON parsing
//4. Use the structuredClone() function

const data = {name: "Dera", age: 21}

// 1  Use the spread operator
const clone1 = {...data}
// 2  Call the Object.assign() function
const clone2 = Object.assign({}, data)
// 3  Use JSON parsing
const clone3 = JSON.parse(JSON.stringify(data))
// 4  Use the structuredClone() function
const clone4 = structuredClone(data)



//Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for (const party in presidentialCandidates){
    console.log(presidentialCandidates[party] + ' is the presidential candidate of ' + party);
}




