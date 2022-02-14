
let aElement = document.createElement('a');
document.body.prepend(aElement);
aElement.href = "https://google.com/";
aElement.textContent = "Google";

aElement.addEventListener('click', function(event){
  aElement.textContent = "Yandex";
});
aElement.addEventListener('contextmenu', function(event){
  aElement.style.backgroundColor = "red";
});

aElement.addEventListener('dblclick', function(event){
  aElement.remove();
});
