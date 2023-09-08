"use strict"

document.addEventListener("DOMContentLoaded", function() {
	let reproduction = document.querySelectorAll('.reproduction');
	reproduction.forEach(function(element){
		element.addEventListener('click', function(){
			let a = element.children;
			let aChildren = a[0].children;
			let reprodName = aChildren[1];
			localStorage.setItem("reprodName", reprodName.innerText);
		});
	});
});