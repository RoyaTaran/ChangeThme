let $ = document
const btnElem = $.querySelectorAll('.btn')



console.log(btnElem)
btnElem.forEach(function(BtnColor){
    BtnColor.addEventListener('click' , function(event){
        $.documentElement.style.setProperty('--theme-color',event.target.getAttribute('data-color'))
    })
})