"use strict"
document.addEventListener("DOMContentLoaded", function() {
	$('.reprod__name').val('Картина ' + '"' + localStorage.getItem("reprodName")+'"');
	let img = document.querySelector('.reprod__pic');

	let imgSource = localStorage.getItem("reprodPic");
	let imgSourceHref = imgSource.split('"')[1];

	let imgInnerHTML = '<a target="_blank" href="' + imgSourceHref + '">' + imgSource + '</a>';
	img.innerHTML = imgInnerHTML;
	console.log(img.innerHTML);
});