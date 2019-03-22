

document.addEventListener('DOMContentLoaded', function() {
	//=========================================== 1 ex
let x = document.querySelector('#x')
let y = document.querySelector('#y')
let rezultat = document.querySelector('#rezultat')
document.querySelector('#sum').addEventListener('click', function() {
	rezultat.innerHTML = parseFloat(x.value) + parseFloat(y.value)
})

//============================================== 2ex
let schimb =  document.querySelector('#schimb')

schimb.addEventListener("click", function() {
	let aux1 = x.value
	let aux2 = y.value
	x.value = aux2
	y.value = aux1
})
//================================================ 3 ex
let Container = document.querySelector("#Container")
Container.addEventListener("mousemove", function() {
	Container.classList.add("verde")
})

//============================================== 4 ex
let paragr = document.querySelector('#par')
for(let i = 1; i <= 10; i++) {
	if((i%2) == 0) {
		let p = document.createElement('p')
		p.style.background = "blue"
		p.innerHTML = "Paragraful Nr " + i
		paragr.appendChild(p)
	} else {
		let p = document.createElement('p')
		p.style.background = "yellow"
		p.innerHTML = "Paragraful Nr " + i
		paragr.appendChild(p)
	}

}

//============================================= 5 si 6 si 11 ex
let list = document.querySelector('#list')
for(let j = 1; j <= 10; j++){
	if(j == 10){
		
		setTimeout(function(){
			let newLi = document.createElement('li');
			newLi.style.background = "violet"
		 	newLi.innerHTML = 'Element NR ' + j;
			newLi.id = "lista"
			list.appendChild(newLi);
		}, 3000)
	}
	else{
		setTimeout(function(){
			let newLi = document.createElement('li');
		 	newLi.innerHTML = 'Element NR ' + j;
			newLi.id = "lista"
			list.appendChild(newLi);
		}, 3000)
		
	}
}

//============================================== ex 7

let srers = document.querySelector("#sters").addEventListener('click', function() {
	list.removeChild(list.children[4])
	
})
//================================================ ex 8
let cerc = document.querySelector('#cer')
for(let j = 1; j <= 10; j++){
	
		let c = document.createElement('div')
		c.classList.add("cerc")
		cerc.appendChild(c);
	
}
//================================================ ex 9
let arr = [2, 7, 8, 9, 5, 27, 4, 545, 115]
let massiv = document.querySelector('#mas')

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
massiv.innerHTML = arr.sort(compareNumeric)

//================================================ ex 10
	setTimeout(function(){
		document.body.background = "pink"
	}, 3000)

//=============================================== ex 11
	let cont = 0;
	let contor = document.querySelector("#cont").addEventListener('click', function() {
		cont++
		document.querySelector("#r").innerHTML = cont
	
	})

})
