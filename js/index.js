  //constant declaration
      const menu_btn = document.querySelector('.nav-btn i'),
      menuList = document.querySelector('.menu'),
      soundbtn = document.querySelector('.sound'),
      copybtn = document.querySelector('.copy'),
      sharebtn = document.querySelector('.share'),
      quotesContainer = document.querySelector('.quotes-container'),
      introQuotesContainer = document.querySelector('.intro-quote'),
      more = document.querySelector('.more');
      
//////randomQuote Api//////
function randomQuote(){
  document.getElementById('loading').innerText ='Loading...'
  return fetch("https://type.fit/api/quotes").then(function(response) { return response.json(); }).then(function(data) {
    return data;
  });r
}

randomQuote().then((quotes) => {
  document.getElementById('loading').innerText =''
  let len = quotes.length;
  setInterval(()=>{
    let x = Math.floor(Math.random()*len);
    document.getElementById('quote').innerHTML ='';
    document.getElementById('writer').innerHTML ='';
    typerwriter(x);
  },15000)
  function typerwriter(x){
    let i=j=0;
    if(i<quotes[x].text.length){
      setInterval(()=>{
        document.getElementById('quote').innerHTML += quotes[x].text.charAt(i);
        i++;
      },50);
    }else{
        i=0;
    }
    if(j<quotes[x].author.length){
      setInterval(()=>{
        document.getElementById('writer').innerHTML += quotes[x].author.charAt(j);
        j++;
      },50);
    }else{
        j=0;
    }
  }
  typerwriter(Math.floor(Math.random()*100));
  readmore(quotes,10);
})
function readmore(q,n){
  document.getElementById('loading').innerText =''
  for(let i=(n-10);i<n;i++){
    createQuoteBox(q[i])
  }
}
//////////create quote box///////
function createQuoteBox(q){
  if (q.author===null) {
    q.author = 'Unknown';
  }
  let html = `<div class="quote-box">
  <p class="quote">
    <i>
      <i class="fa fa-quote-left"></i>
      ${q.text}
      <i class="fa fa-quote-right"></i>
    </i>
  </p>
  <p class="writer"><i> ${q.author}</i></p>
  <div class="icons">
    <div class="sound icon">
      <i class="uil uil-volume"></i>
    </div>
    <div class="copy icon">
      <i class="uil uil-copy"></i>
    </div>
    <div class="share icon">
      <i class="uil uil-share"></i>
    </div>
  </div>
  </div>`;
  quotesContainer.innerHTML += html;
}


// click event listener
let count = 1
document.querySelector('body').addEventListener("click", (event)=>{

 ///////////////////////
 
 //////Toggle menuList//////
      if(event.target.classList[1]=='uil-bars' || event.target.classList[1]=='uil-times'){
        menu_btn.classList.toggle('uil-bars')
        menu_btn.classList.toggle('uil-times')
        menuList.classList.toggle('active')
      }
    
////////Toggle dark mode/////////  
      if(event.target.classList[1]=='uil-moon' || event.target.classList[1]=='uil-sun'){
        document.body.classList.toggle('dark-theme');
        event.target.classList.toggle('uil-sun')
        event.target.classList.toggle('uil-moon')
      }
      
/////sound btn/////
      if(event.target.classList[0]=='sound'||event.target.classList[1]=='uil-volume'){
        const quoteBox= event.target.closest('div').parentNode.parentNode;
        const quote = quoteBox.getElementsByTagName('p')[0].innerText,
        author = quoteBox.getElementsByTagName('p')[1].innerText;
        let utterance = new SpeechSynthesisUtterance(`${quote} by ${author}`);
        speechSynthesis.speak(utterance);
      }
      
      ////////copy btn/////
      if(event.target.classList[0]=='copy'||event.target.classList[1]=='uil-copy'){
        const quoteBox= event.target.closest('div').parentNode.parentNode;
        const quote = quoteBox.getElementsByTagName('p')[0].innerText;
        navigator.clipboard.writeText(quote);
      }
      //////share btn
      if(event.target.classList[0]=='share'||event.target.classList[1]=='uil-share'){
        const quoteBox= event.target.closest('div').parentNode.parentNode;
        const quote = quoteBox.getElementsByTagName('p')[0].innerText;
        if(navigator.share){
          navigator.share({
            text:`${quote}`
          })
        }
      }
      
      ////Read more
      if(event.target.classList.contains('more')){
        count++;
        let n = count*10;
        randomQuote().then((q) => {
          readmore(q,n);
        });
      }
},false);
  
//add borderBottom to header

document.addEventListener('scroll',()=>{
  if(window.scrollY>0){
    document.querySelector('.nav').style.borderBottom = '.5px solid  var(--tertiary-color)'
  }else{
    document.querySelector('.nav').style.borderBottom = 'none';
  }
  if (window.scrollY>300){
    introQuotesContainer.style.transitionTimingFunction ='ease-in'
    introQuotesContainer.style.transition ='1s'
    introQuotesContainer.style.transitionProperty ='opacity'
    introQuotesContainer.style.opacity ='0'
  }else{
    introQuotesContainer.style.opacity ='1'
  }
});
console.log(quotesContainer)