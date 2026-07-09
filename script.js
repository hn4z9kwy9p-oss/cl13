document.querySelectorAll('.chou').forEach(function (el) {
  el.addEventListener('mouseover', function () {
     el.style.left = (Math.random() * 800) + "px";
     el.style.top = (Math.random() * 500) + "px";
  });
});

document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {
     el.style.left = (Math.random() * 450 + 360) + "px";
     el.style.top = (Math.random() * 100 + 200) + "px";
  });
});


