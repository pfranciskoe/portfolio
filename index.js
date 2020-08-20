console.log('hello world')
document.addEventListener('DOMContentLoaded', () => {
    const navArrow = document.getElementById('nav-arrow')
    const page1 = document.getElementById('page-1')
    navArrow.addEventListener("click",()=>{scrollPage(page1.scrollHeight)})
})
function scrollPage(height){
    window.scroll({
        top: window.scrollY+height,
        behavior:"smooth"
    })
}
