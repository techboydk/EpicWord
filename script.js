
// click event listener
document.querySelector('body').addEventListener("click", (event)=>{
  //constant declaration
      const menu_btn = document.querySelector('.nav-btn i')
      const menuList = document.querySelector('.menu')
      const form = document.querySelector('form')
      const formActivater = document.querySelector('.form-active')
      const backBtn = document.querySelector('.back-btn')
      
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
      
/////////activate form section//////
      if(event.target.classList[0]=="form-active"){
        const listItems = document.querySelector('body').children;
        const listArray = Array.from(listItems);
        listArray.forEach((item) => {
          if(item.tagName != 'NAV'){
            item.style.display = 'none'
            form.style.display = 'flex'
          }
          
        });
      }
      
/////////back-btn/////////
      if(event.target.classList[2]=='back-btn'){
        const listItems = document.querySelector('body').children;
        const listArray = Array.from(listItems);
        listArray.forEach((item) => {
          if(item.tagName != 'NAV'){
            console.log(item)
            item.style.display = 'flex'
            form.style.display = 'none'
          }
        });
      }
      

      

},false);
  
//add borderBottom to header

window.addEventListener('scroll',()=>{
  if(window.scrollY>0){
    document.querySelector('.nav').style.borderBottom = '.5px solid  var(--tertiary-color)'
  }else{
    document.querySelector('.nav').style.borderBottom = 'none';
  }
});

///////Intro quote animation///////

