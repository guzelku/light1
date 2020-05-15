'use strict'; 


 //popup модальное окно 3

 const togglePopUp = () =>{


    const popup = document.querySelectorAll('.popup'),
    formBtn = document.querySelectorAll('#formbtn');
   
    popup.forEach((item, i) => {

   
    formBtn.forEach((elem) => {
          elem.addEventListener('click', () => {
            popup[i].style.display = 'block';
        let op=0;
        const addOpacity = () =>{
                      
              if(op <1){ 
                  op +=  0.01; 
                  popup[i].style.opacity = op;
            setTimeout(addOpacity, 10);
              }
          };
          addOpacity();
     
 
      });
 
  });
 
  popup.forEach((elem) => {
    elem.addEventListener('click', (event)=>{
    
    
        let target = event.target;
     
     
           if(target.classList.contains('popup-close')){
            popup[i].style.display = 'none'; 
            
             }
             target = target.closest('.popup-dialog');
          if(!target){
            popup[i].style.display = 'none';
          }
           
     
       });



  });
});//forEach popup





 
 };
 togglePopUp();

 //больше



 //аккардеон


const tabs= () =>{
    const  aTab = document.querySelectorAll('.panel-title  a'),
          panelCollapse= document.querySelectorAll('.panel-collapse');
   
          const toggleTabContent =(index)=>{
            
           for(let i=0; i< panelCollapse.length; i++){
             console.log(index);

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
             aTab[i].addEventListener('click', function() {
               
              console.log(aTab[i]);
                toggleTabContent(i);
               } ); });
             } ;
tabs();
       
//больше

const tabs2= () =>{
  const  addSentenceBtn = document.querySelector('.add-sentence-btn'),
        panelhidden= document.querySelectorAll('.hi');
 console.log(panelhidden);
        addSentenceBtn.addEventListener('click',()=>{

          addSentenceBtn.classList.add('hidden');
          panelhidden.forEach((item, i)=>{panelhidden[i].classList.remove('hidden');
          panelhidden[i].classList.remove('visible-sm-block');
        
        });
         // 
        });
       
       
    
           } ;
tabs2();