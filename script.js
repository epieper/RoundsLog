if (!localStorage) {
  originalL = location;
  console.log(originalL);
  (l = location),
    (p = l.pathname.replace(/(^..)(:)/, "$1$$")),
    (l.href = l.protocol + "//127.0.0.1" + p);
}

getStoredInputs();
function getStoredInputs() {
  var inputs = document.getElementsByClassName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = localStorage.getItem(inputs[i].id);
  }
}

function onInput(input) {
  var group = input.parentElement.parentElement;
  var page = group.parentElement;
  localStorage.setItem(input.id, input.value);
}