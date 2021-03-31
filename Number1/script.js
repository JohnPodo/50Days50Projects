const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click',function(){
        RemoveActiveClasses();
        panel.classList.add('active');
    })
})

function RemoveActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}