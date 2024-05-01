const p = document.createElement("p");
p.style.textAlign = "center";
p.style.fontSize = "18pt";
p.innerHTML = "p5 test page"

const p5_script = document.createElement("script");
p5_script.src = "./assets/js/p5.min.js";
document.body.append(p5_script);

const p5_code = document.createElement("script");
p5_code.src = "./assets/js/p5_sketches/demo.js";
document.body.append(p5_code);

document.addEventListener("mousemove", e => {
  p.innerHTML = `mouseX: ${e.clientX}, mouseY: ${e.clientY}`;  
});