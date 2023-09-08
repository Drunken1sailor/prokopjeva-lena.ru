"use strict"

document.addEventListener("DOMContentLoaded", function() {
	let reproduction = document.querySelectorAll('.reproduction');
	let a;
	let aChildren;
	let reprodName;
	reproduction.forEach(function(element){
		element.addEventListener('click', function(){
			a = element.children;
			aChildren = a[0].children;
			reprodName = aChildren[1];
			localStorage.setItem("reprodName", reprodName.innerText);
		});
	});

	reproduction = document.querySelectorAll('.reproduction');
	let reprodPicDiv;
	let imageURL;
	reproduction.forEach(function(element){
		element.addEventListener('click', function(){
			a = element.children;
			reprodPicDiv = aChildren[0];
			imageURL = reprodPicDiv.innerHTML;
			localStorage.setItem("reprodPic", imageURL.replace(/\.png/,'_large.png'));
		});
	});
});