 'use strict'; 


 //popup модальное окно 3


 const togglePopUp3 = () =>{

  const popup = document.querySelectorAll('.popup'),
  formBtn1 = document.querySelectorAll('.formbtn');


//открытие окна
formBtn1.forEach((item, i) => {
  //console.log(formBtn1[i]);
  formBtn1[i].addEventListener('click', event=> {
      //evetn.preventDefault();
      
      var target = event.target;
      
      let eBtn=target.getAttribute('data-id')
      
document.getElementById(eBtn).style.display='block';
    })

  })

  popup.forEach((item, i) => {
    popup[i].addEventListener('click', (event)=>{
        
        let target = event.target;
        console.log(target);
        
           if(target.classList.contains('popup-close')){
            popup[i].style.display = 'none'; 
            
             }
             target = target.closest('.popup-dialog');
          if(!target){
            popup[i].style.display = 'none';
          }
           
     
       });



  });



};
togglePopUp3();

 //больше



 //аккордеон


const tabs= () =>{
    const  aTab = document.querySelectorAll('.panel-title  a'),
          panelCollapse= document.querySelectorAll('.panel-collapse');
   
          const toggleTabContent =(index)=>{
            
           for(let i=0; i< panelCollapse.length; i++){
           

               if(index === i){
                 
                  panelCollapse[i].classList.remove('collapse');
                  panelCollapse[i].classList.remove('in');
                }else{
                  
                  panelCollapse[i].classList.add('collapse');
                  panelCollapse[i].classList.remove('in');
                }
            }
                       };

          aTab.forEach((item, i) => {
             aTab[i].addEventListener('click', (evetn) =>{
              evetn.preventDefault();
      
            
                toggleTabContent(i);
               } ); });
             } ;
tabs();
       
//больше

const tabs2= () =>{
  const  addSentenceBtn = document.querySelector('.add-sentence-btn'),
        panelhidden= document.querySelectorAll('.hi');

        addSentenceBtn.addEventListener('click',()=>{

          addSentenceBtn.classList.add('hidden');
          panelhidden.forEach((item, i)=>{panelhidden[i].classList.remove('hidden');
          panelhidden[i].classList.remove('visible-sm-block');
        
        });
         // 
        });
       
       
    
           } ;
tabs2();


const tabs3= () =>{
  const  aTab3 = document.querySelectorAll('.construct-btn'),
        panelCollapse= document.querySelectorAll('.panel-collapse');
 
        const toggleTabContent3 =(index)=>{
          
         for(let i=0; i< panelCollapse.length; i++){
         

             if(index === (i-1)){
               
                panelCollapse[i].classList.remove('collapse');
                panelCollapse[i].classList.remove('in');
              }else{
                
                panelCollapse[i].classList.add('collapse');
                panelCollapse[i].classList.remove('in');
              }
          }
                     };

        aTab3.forEach((item, i) => {
           aTab3[i].addEventListener('click', function() {
             
          
              toggleTabContent3(i);
             } ); });
           } ;
tabs3();















const sendForm = () =>{

  const loadMessage = 'загрузка',
      errorMessage = 'Ошибка, Ваши данные некорректны',
      successMessage = 'ваше сообщение отправлено';
 
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size:2rem;color:#000;';
 
 
  const form = document.querySelectorAll('form');
 
 //валидация
  const validate = body => {
    const invalidFields = [];
     const rules = {
      user_name: {
         pattern: new RegExp('(^[а-яё -]{0,50})$', 'igm'), 
         message: 'Invalid fullname'
       },
       user_email: {
         pattern: new RegExp('[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}', 'igm'),
         message: 'Invalid email address!'
       },
       user_quest: {
         pattern: new RegExp('^[а-яё !:;.-]{3,500}$', 'igm'),
         message: 'Invalid message'
       },
  
       user_phone:{
            // pattern: new RegExp('(\\+?7|8)[0-9]{10,18}', 'g'),
       pattern: new RegExp('[0-9]', 'g'),
        message: 'Invalid message'
       }
     };
    
    body.forEach((key, val) => {
       if(!key.match(rules[val].pattern)) {
         invalidFields.push(val);
       }
    });
    
    return invalidFields;
  };
 
 
 //перебирем массив форм и вешаем событие
 
  form.forEach((item, i)=> {
    form[i].addEventListener('input', e => {
      const target = e.target;
   
      if (target.name === 'user_quest' || target.name === 'user_name') {
        e.target.value = e.target.value.replace(/[^а-яё ]/ig, '');
      } else if (target.name === 'user_phone') {
       
        e.target.value = e.target.value.replace(/\D/g, '');
      }
    });



    form[i].addEventListener('submit', (event) =>{
      event.preventDefault();
  
      form[i].appendChild(statusMessage);
      const inputs = form[i].querySelectorAll('input');


  
 //очистка формы 
      const clear =  () =>{inputs.forEach((item, i) => {
        inputs[i].value='';});
         };
  // получаем данные с формы
      const formData = new FormData(form[i]);
      
      let body = {};
  
      formData.forEach((val, key) =>{
        body[key]=val;
       
        formData[key]=val;
 
      
       });
      
    statusMessage.textContent = loadMessage;
 
 
    const invalidFields = validate(formData);
    if(invalidFields.length !== 0) {
      console.log(invalidFields);
      console.log('error');
      statusMessage.textContent = errorMessage;
      clear();
 
      }else{
      //вызываем функцию передачи данных  на сервер (она ниже)
     postData(body)
      .then((response) =>{
        if(response.status !==200){
          throw new Error('status network not 200');
        }
       statusMessage.textContent = successMessage; })
 
      .catch((error)=> {statusMessage.textContent = errorMessage;console.log('error');});
      clear();
       }
 
    });
    
  //сама функция
 const postData =(body) =>{
 
   return fetch('./server.php', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(body)
   });
 };
  
  }//end forEach
 
  );//end forEach
 
    
 
 };
 sendForm(); 
 
 
 


//калькулятор


