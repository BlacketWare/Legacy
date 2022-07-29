var x = prompt('Whose elements do you want to view?');
Array.from(document.getElementById('#elementList').children).forEach(a => a.remove())
$.get('/api/elements?name=' + x, function(data) {
	elementList = JSON.parse(data);
});
$.get('/api/user/elements?name=' + x, function(data) {
	if (data === "") {
		document.getElementById("#elementRarity").innerText = "Common";
		document.getElementById("#elementRarity").style.color = "white";
		document.getElementById("#elementRarity").style.textShadow = "0px 0px 25px white";
		document.getElementById("#elementImage").src = "/image/elements/blax.png";
		document.getElementById("#elementName").innerText = "Betastar";
		document.getElementById("#elementPrice").innerText = "Can't be sold.";
		return;
	}
	document.getElementById("#elementRarity").innerText = "Common";
	document.getElementById("#elementRarity").style.color = "white";
	document.getElementById("#elementRarity").style.textShadow = "0px 0px 25px white";
	document.getElementById("#elementImage").src = "/image/elements/blax.png";
	document.getElementById("#elementName").innerText = "Betastar";
	document.getElementById("#elementPrice").innerText = "Can't be sold.";
	userElements = JSON.parse(data);
	if (typeof elementList === 'undefined') {
		reset();
		return;
	}
	Object.entries(userElements).forEach((entry) => {
		const [key, value] = entry;
		if (typeof elementList[key] === 'undefined') {
			$(`<img id="error" src="/image/elements/error.png" onclick="showElementError()" class="bottomElement">`).appendTo(".elementList");
		} else {
			$(`<img id="${key}" src="${elementList[key].imageURL}" onclick="viewElement('${key}')" class="bottomElement">`).appendTo(".elementList");
		}
	});
});
window.currentElement = "blax";
window.currentQuantity = -1;
$(".loadingModal").remove();
