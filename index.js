let result = document.querySelector('.in')
for (let i = 0; i <= 13; i++)
{
    document.querySelectorAll('.clic')[i].addEventListener('click',function(){
        result.value += document.querySelectorAll('.clic')[i].innerText;
    });
}

document.querySelector('.clear').addEventListener('click',function(){
    result.value = "";
})

let inputvalue = document.getElementsByClassName('in').value;
document.querySelector('.back').addEventListener('click',function(){
    result.value = result.value.slice(0,-1);
})
document.querySelector('.signequal').addEventListener('click',function(){
    let x = document.querySelector('.in').value;
    let res = eval(x);
    document.querySelector('.in').value = res;
})

