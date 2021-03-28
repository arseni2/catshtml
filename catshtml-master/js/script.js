window.onload = ()=>{
let acardeon_item = document.getElementsByClassName("section__2__item__acardeon")
for(let i=0; i<acardeon_item.length; i++){
    acardeon_item[i].addEventListener('click', function(e){
        if(this.style.color == 'grey'){
            this.style.color = 'white'
        }else {
            this.style.color = 'grey'
        }
        // acardeon
        
    })
}
}