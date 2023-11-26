// Registering Service Worker
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/RoundsLog/service-worker.js', {scope: '/RoundsLog/'})
  }


if (!localStorage) {
  originalL = location;
  console.log(originalL);
  (l = location),
    (p = l.pathname.replace(/(^..)(:)/, "$1$$")),
    (l.href = l.protocol + "//127.0.0.1" + p);
}

getStoredInputs();
function getStoredInputs() {
  var elements = [];
  var inputs = document.getElementsByTagName("input");
  elements.push(...inputs);
  var selects = document.getElementsByTagName("select");
  elements.push(...selects);
  for (var i = 0; i < elements.length; i++) {
    elements[i].value = localStorage.getItem(elements[i].id);
  }
}

function onInput(input) {
  localStorage.setItem(input.id, input.value);
}


var collapsibles = document.getElementsByClassName("collapsible");
for (var i = 0; i < collapsibles.length; i++) {
	if (collapsibles[i].nextElementSibling == null) {
		continue;
	}
	if (collapsibles[i].nextElementSibling.id == null) {
		continue;
	}
	var stored = localStorage.getItem(collapsibles[i].nextElementSibling.id);
	if (stored != null) {
		collapsibles[i].classList = stored;
		var content = collapsibles[i].nextElementSibling;
		if (collapsibles[i].classList.contains("active")) {
			content.style.display = "block";
		} else {
			content.style.display = "none";
		}
	}
	collapsibles[i].addEventListener("click", function () {
		this.classList.toggle("active");
		localStorage.setItem(this.nextElementSibling.id, this.classList);
		var content = this.nextElementSibling;
		if (this.classList.contains("active")) {
			content.style.display = "block";
		} else {
			content.style.display = "none";
		}
	});
}

function ClearPage() {
  localStorage.clear();
  getStoredInputs();
}
