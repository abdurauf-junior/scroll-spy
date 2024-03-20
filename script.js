let link = document.querySelectorAll('.item');
let block = document.querySelectorAll('.text-item');
let scrollBlock = document.querySelector('.blocks')
let parent1 = document.querySelector('.parent-1')
let parent2 = document.querySelector('.parent-2')



function fnk(n){
    scrollBlock.scrollTo({
        top:n*400,
        behavior:'smooth'
    })
}

scrollBlock.addEventListener('scroll', () => {

    // first
    if(scrollBlock.scrollTop == 0 || scrollBlock.scrollTop <= 399){
        for(let i = 0;i<link.length;i++){
            link[i].classList.remove('active')
        }
        link[0].classList.add('active')
    }
    if(scrollBlock.scrollTop >= 400){
        for(let i = 0;i<link.length;i++){
            link[i].classList.remove('active')
        }
        link[1].classList.add('active')
        parent1.classList.add('active')
    }
    if(scrollBlock.scrollTop >= 800){
        for(let i = 0;i<link.length;i++){
            link[i].classList.remove('active')
        }
        link[2].classList.add('active')
        parent1.classList.add('active')
    }

    // second

    if(scrollBlock.scrollTop >= 1200){
        for(let i = 0;i<link.length;i++){
            link[i].classList.remove('active')
        }
        link[3].classList.add('active')
        parent2.classList.add('active')
    }
    if(scrollBlock.scrollTop >= 1600){
        for(let i = 0;i<link.length;i++){
            link[i].classList.remove('active')
        }
        link[4].classList.add('active')
        parent2.classList.add('active')
    }
    if(scrollBlock.scrollTop >= 2000){
        for(let i = 0;i<link.length;i++){
            link[i].classList.remove('active')
        }
        link[5].classList.add('active')
        parent2.classList.add('active')
    }
})