var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lisitem=document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

// This delete button is for new list items

	var buton=document.createElement("button");
	buton.appendChild(document.createTextNode("Delete !"));
	li.appendChild(buton);
	buton.onclick=removeParent;


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



// function to create toogle for list ie inthis done is from the css class

ul.onclick = function (event)
{
	var target=event.target;
	target.classList.toggle("done");
}


// function to return the length of list

function lengthOfList()
{
	return lisitem.length;
}


// function to create the delete button for the previous lisitem


function deleteButton()
{
	var buton=document.createElement("button");
	buton.appendChild(document.createTextNode("Delete !"));
	lisitem[i].appendChild(buton);
	buton.onclick=removeParent;

}

// iterate the list to call the function to delete

for(var i=0;i<lengthOfList();i++)
{
	deleteButton();
}

 // function to remove the parent item


function removeParent(evnt)
{
     evnt.target.parentNode.remove();
}




