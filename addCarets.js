export function addCarets(){
	let caret_up= `<span class="caret-up"></span>`;
	let caret_down= `<span class="caret-down"></span>`;
	//get all the document elements with class .up
	document.querySelectorAll('.up').forEach(function(element) {
		 //for each such element get the parent node.
         const parentDiv = element.parentNode;
		 //create an element of type span.
		 const el = document.createElement('span');
		 // Create a class attribute
		 const att = document.createAttribute("class");
		 //set the newly created class attribute value to 'caret-up'
		 att.value = "caret-up";
		 // Add the class attribute to the created span element
		 el.setAttributeNode(att);
		 //insert this newly created span element before the element with class .up.
		 parentDiv.insertBefore(el,element);
		 
         /*element.innerHTML += caret_up;*/
    });
	document.querySelectorAll('.down').forEach(function(element) {
         const parentDiv = element.parentNode;
		 const el = document.createElement('span');
		 const att = document.createAttribute("class");
		 att.value = "caret-down";
		 el.setAttributeNode(att);
		 parentDiv.insertBefore(el,element);
		 
         /*element.innerHTML += caret_down;*/
    });
}	