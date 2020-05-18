const increButton = document.querySelector('#button3')
const decreButton = document.querySelector('#button1')
const reset = document.querySelector('#button2')
const span = document.querySelector('span');
//-----------------------------------------------------------------------------------------------
//_++++++++++++++++++++++++ METHOD 1++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  



//increase function
// const counter = ()=>{
//  let counter = 1;
//    increment = ()=>{
//      const newNum = counter++;
//      return newNum;
//   }
//   return increment;
// }
// const counterNum = counter();

// //decrease function
// const counterOppo= ()=>{
//   let counter = -1;
//     decrement = ()=>{
//       const newNum = counter--;
//       return newNum;
//    }
//    return decrement;
//  }
//  const decreNum = counterOppo();

// //increment functionality

//     //generate template
// const template = (num)=>{
//   span.textContent = `${num}`
//   if(num<0){
//     span.style.color = 'red'

//   }else if(num>0){
//     span.style.color = 'green'

//   } 
//   else{
//     span.style.color = 'black'

//   }


// }   

// increButton.addEventListener('click',e=>{
//   e.preventDefault()
//   template(counterNum())
// })
// decreButton.addEventListener('click',e=>{
//   e.preventDefault()
//   template(decreNum())
// })


// reset.addEventListener('click',(e)=>{
//   template('0')
// })


class Counter {
  constructor(){
    this.initial = 0
    

  }
  increment(){
   let nuewNum = this.initial+=1;
   return nuewNum
  }
  decrement(){
    return this.initial-=1;
    
  }
  reset(){
    if(this.initial<0){
     return this.initial = 0;
    }
    else{
     return this.initial = 0;
    }
    
  }
}
const counter = new Counter()

generateTemplate= (num)=> {
  
  span.textContent = `${num}`
  if(num<0){
    span.style.color = 'red'

  }else if(num>0){
    span.style.color = 'green'

  } 
  else{
    span.style.color = 'black'

  }

}
increButton.addEventListener('click',e=>{
  e.preventDefault;
  generateTemplate(counter.increment())

})
decreButton.addEventListener('click',e=>{
  e.preventDefault;
  generateTemplate(counter.decrement())

})
reset.addEventListener('click',e=>{
  generateTemplate(counter.reset())
})


