const menuItem=document.querySelectorAll('a');
const loc=location.href;
menuItem.forEach(a=>{
    a.addEventListener('click',function(){
        menuItem.forEach(nn=>nn.classList.remove('active'));
        this.classList.add('active');
    })
})