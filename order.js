const navbarToggler= document.querySelector('.navbar-toggler');
const order= document.querySelector('#order');
const formContainer= document.querySelector('.form-container');

navbarToggler.addEventListener('click',function(){
         
          // home.style.height=120+'vh';
          order.classList.toggle('order-extended');
         formContainer.classList.toggle('form-container-open');
  
});



// MODAL JS 
const BASE=3;
const items=['KETCHUP','CHEESE','MAYONNAISE','TOMATO','ONIONS','PICKLES',
               'SALAD', 'REAL HAM','VEGGIE MEAT',
               'WHITE BREAD','RYE BREAD','GRAIN BREAD' ];

const prices=[0.3,0.5,0.4,0.7,0.8,0.2,0.3,1.2,0.8,1,1.2,1.3];   

let TOTAL=0;


// GET ELEMENTS
const modal=document.querySelector('.modal-body');
const ketchup=document.querySelector('#ketchup');
const cheese=document.querySelector('#cheese');
const mayonnaise=document.querySelector('#mayonnaise');
const tomato=document.querySelector('#tomato');
const onions=document.querySelector('#onions');
const pickles=document.querySelector('#pickles');
const salad=document.querySelector('#salad');
const realHam=document.querySelector('#realHam');
const veggieMeat=document.querySelector('#veggieMeat');
const breadType=document.querySelectorAll('#flexRadioDefault2');



const toppings=[tomato,onions,pickles,salad,realHam,veggieMeat];            



createElement(ketchup);
createElement(cheese);
createElement(mayonnaise);

createRegularElement('TOPPINGS');

createTopping(tomato);
createTopping(onions);
createTopping(pickles);
createTopping(salad);
createTopping(realHam);
createTopping(veggieMeat);

createRegularElement('Bread');

createBread(breadType)
createRegularElement('=======================');
displayTOTAL()

// CREATE ELEM
function createElement(item){
      

    let index=getNames(item.previousSibling.previousSibling.textContent);
    let price=getPrices(index);
  
    const myElem=document.createElement('h6');
    myElem.classList.add('modal-js-elements');
    myElem.textContent=`${item.previousSibling.previousSibling.textContent} 
          Quantity: ${item.value} x $${price}
          = $ ${pricerPerItem(item.value,price)}`;
    modal.appendChild(myElem);

    
}

// CREATE TOPPING
function createTopping(item){
      let index=getNames(item.previousSibling.previousSibling.textContent);
      let price=getPrices(index);
      let pricePaid=0;
      let quantity=0;

      if (item.checked===true){
         item.value=1;
         quantity=1;
      }else{
        item.value=0;
        quantity=0;
      }

    const myElem=document.createElement('h6');
      myElem.classList.add('modal-js-elements');
    myElem.textContent=`
        ${item.previousSibling.previousSibling.textContent} 
          Quantity: ${item.value} x $${price}
          = $ ${pricerPerItem(quantity,price)}`;
    modal.appendChild(myElem)
}

//GET BOOLEAN VALUES

function getToppingItems(item){
    if(item.checked){
        return getNames(item.previousSibling.previousSibling.textContent);
    }else{
        return 0;
    }

}

// Create BREAD


function createBread(item){
    let bread=getBread(item);
    let price=getBreadPrice(items);

    const myElem=document.createElement('h6');
      myElem.classList.add('modal-js-elements');
    
    
    myElem.textContent=`${bread} 
          Price:$${price} `;
    modal.appendChild(myElem);
}

//CREATE TOTAL
function displayTOTAL(){
    let total=getTotal();

     const myElem=document.createElement('h6');
     myElem.classList.add('modal-js-total');
    myElem.textContent=` TOTAL: $${total}`;
    modal.appendChild(myElem);
}

// FUNCTIONS
function createRegularElement(value){
    const myElem=document.createElement('h4');
    myElem.classList.add('modal-js-separators');
    myElem.textContent=value;
    modal.appendChild(myElem)
}

// GET NAMES and PRICES and INNERHTML VALUE
function getNames(option){
    return items.indexOf(option.toUpperCase());
}
function getPrices(index){
    let price=prices[index];
    return price;
}
function pricerPerItem(a,b){
   return (parseFloat(a)* parseFloat(b)).toFixed(2);
}

function getBread(item){
   
   for (i=0;i<item.length;i++){
        if(item[i].checked){
            return item[i].nextSibling.nextSibling.textContent;
        }
        
      }
   }



function getBreadPrice(items){
    let BREAD=getBread(breadType);
    
    let total=0;
  
    
     
    if((BREAD.trim()).toUpperCase()==items[9]){
       total=1;
    }else if((BREAD.trim()).toUpperCase()==items[10]){
       total=1.2;
    }else if((BREAD.trim()).toUpperCase()==items[11]){
        total=1.3;
    }
    
    return total;
}

getBreadPrice(items)
// TOTAL

function getTotal(){
    TOTAL+=BASE;
    let quantity=0;
    let breadPrice=getBreadPrice(items);
    
    TOTAL+=parseFloat(cheese.value)*prices[0]; 
    TOTAL+=parseFloat(ketchup.value)*prices[1]; 
    TOTAL+=parseFloat(mayonnaise.value)*prices[2]; 

    for(i=0;i<toppings.length;i++){
        if(toppings[i].checked===true){
            quantity=1;
            TOTAL+=quantity*prices[i+2];
            
        }else{
            TOTAL+=0
        }
        
    }

    TOTAL+=breadPrice;
    console.log(TOTAL)
    return TOTAL.toFixed(2);
}
getTotal()

// REFRESH

const closeBtn=document.querySelector('.close-btn');
closeBtn.addEventListener('click',function(){
    // location.reload();
});

const submitBtn=document.querySelector('.submit-btn');

submitBtn.addEventListener('click',function(e){
    e.preventDefault();
   
   
});

