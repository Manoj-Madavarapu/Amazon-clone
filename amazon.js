let inp=document.getElementById("focus");
console.log(inp);
let outer=document.getElementById("focus_change");
console.log(outer);
function change(){
    outer.style.cssText="border:3px solid orange;border-radius:8px"
}
inp.addEventListener('focus',change);

let all=document.getElementById("all");
console.log(all);
let hide=document.getElementById("hide_menu");
console.log(hide);
let mark=document.getElementById("mark");
all.addEventListener('mouseover',function(){
    // alert("hii");
    hide.style.transform="translate(0px)";
})
all.addEventListener('mouseout',function(){
    hide.style.transform="translate(-400px)"
})
hide.addEventListener('mouseover',function(){
    hide.style.transform="translate(0px)";
});
hide.addEventListener('mouseout',function(){
    hide.style.transform="translate(-400px)";

});


let fresh=document.getElementById("fresh");
console.log(fresh);
let fresh_pop=document.getElementById("fresh_pop");
console.log(fresh_pop);
let prime=document.getElementById("prime");
console.log(prime);
let prime_pop=document.getElementById("prime_pop");
console.log(prime_pop)
fresh.addEventListener('mouseover',function(){
    fresh_pop.style.display="inline"
})
fresh.addEventListener('mouseout',function(){
    fresh_pop.style.display="none"
})
fresh_pop.addEventListener('mouseover',function(){
    fresh_pop.style.display="inline"
});
fresh_pop.addEventListener('mouseout',function(){
    fresh_pop.style.display="none"
})

prime.addEventListener('mouseover',function(){
    prime_pop.style.display="inline"
})
prime.addEventListener('mouseout',function(){
    prime_pop.style.display="none"
})

prime_pop.addEventListener('mouseover',function(){
    prime_pop.style.display="inline";
});
prime_pop.addEventListener('mouseout',function(){
    prime_pop.style.display="none";
})