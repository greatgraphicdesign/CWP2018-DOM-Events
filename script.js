var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allLi = document.getElementsByTagName("li");
var removeBtn = document.getElementsByClassName("remove");



function toggleDone() {
	this.classList.toggle("done");
}
function strikeOut() {
	for(i=0; i < allLi.length; i++) {
		allLi[i].addEventListener("click", toggleDone);
	}
}
strikeOut();



function inputLength() {
	return input.value.length;
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.insertAdjacentHTML('beforeend', ' <button class="remove">Remove</button>');
	ul.appendChild(li);
	input.value = "";
	strikeOut();
	clickRemove();
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);



function removeLi() {
	this.parentNode.remove();
}
function clickRemove() {
	for(i=0; i < removeBtn.length; i++) {
		removeBtn[i].addEventListener("click", removeLi);
	}
}
clickRemove();