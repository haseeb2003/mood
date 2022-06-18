const closedface=document.querySelector('.closedface')
const openface=document.querySelector('.openface')

// Add Event Listener
closedface.addeventlistener('click', () => {
    if(openface.classlist.cotains('open')){
        openface.classList.add('active');
        closedface.classList.remove('active');
    }
});

openface.addEventListener('click', () =>  {
    if(closedface.classList.contains('closed'))  {
        closedface.classList.add('active');
        openface.classList.remove('active');
  
    }
});