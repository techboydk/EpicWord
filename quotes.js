
  const quotes =[
    {
      'quote':`"The future belongs to those who believe in their dream"`,
    'writer':'Eleavor roosvelt'
    }, 
    {
      'quote':`"How well we communicate is determined not by how well we say things, but how well we are understood."`,
    'writer':'ANDREW GROVE'
    }, 
    {
      'quote':`“What is the most treasured and well-used piece of equipment in your studio?” My head.`,
    'writer':'ALAN FLETCHER'
    }, 
    {
      'quote':`"Do what you love and tomorrow will pay the rent."`,
    'writer':'FELIX SOCKWELL'
    }, 
    {
      'quote':`"The only true happiness comes from squandering ourselves for a purpose."`,
    'writer':'JOHN MASON BROWN'
    }, 
    {
      'quote':`"No matter how cool your interface is, it would be better if there were less of it."`,
    'writer':'ALAN COOPER'
    }, 
    {
      'quote':`"Design is creativity with strategy."`,
    'writer':'ROB CUREDALE'
    }, 
    {
      'quote':`"Early to bed, early to rise, work like hell, and advertise."`,
    'writer':'TED TURNER'
    }, 
    {
      'quote':`"If you dig a hole and it’s in the wrong place, digging it deeper isn’t going to help."`,
    'writer':'SEYMOUR CHWAST'
    }, 
    {
      'quote':`"Colour does not add a pleasant quality to design – it reinforces it."`,
    'writer':'PIERRE BONNARD'
    }, 
];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


let len = quotes.length
let x=i=j=l=0;
function typeWriter(){
  if (i<quotes[x].quote.length) {
    document.getElementById('quote').innerHTML += quotes[x].quote.charAt(i);
    if(l<quotes[x].writer.length){
      document.getElementById('writer').innerHTML += quotes[x].writer.charAt(i);
    }
    setTimeout(typeWriter, 50);
    i++;
  }else{
    i=0;
  }
}

function textAnimation(){
    if(j<quotes.length){
    document.getElementById('quote').innerHTML =''
    document.getElementById('writer').innerHTML =''
    x = Math.floor(Math.random()*len);
    typeWriter();
    setTimeout(textAnimation, 10000);
    j++;
  }else{
    j=0
    textAnimation()
  }
}
textAnimation(quotes);


//////////create quote box///////
function createQuoteBox(q){
  let html = `<div class="quote-box"><p class="quote"><i>${q.quote}</i></p><p class="writer"><i>~ ${q.writer}</i></p></div>`;
  const container = document.querySelector('.quotes-container');
  container.innerHTML += html;
  
}


let a=[];
for(let i =0;i<len;i++){
  a[i]=i;
}
shuffle(a);
console.log(a)
for(let i =0; i<quotes.length;i++){
  let y = a[i]
  createQuoteBox(quotes[y])
}