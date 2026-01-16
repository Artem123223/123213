const buttons = document.querySelectorAll("#editContent a")
const alignButtons = document.querySelectorAll('#editContents a')
const editor = document.querySelector(".editor")
const code = document.querySelector("#code")

buttons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); 
    
    switch(index) {
      case 0:
        editor.classList.toggle("bold")
        break
      case 1:
        editor.classList.toggle("italic")
        break
      case 2: 
        editor.classList.toggle("underline")
        break
      case 3:
        editor.classList.toggle("strike")
        break
      case 4:
        editor.classList.remove("bold", "italic", "underline", "strike")
        break
      case 5:
        editor.style.fontSize = 32 + "px"
        break
      case 6:
        editor.style.fontSize = 27 + "px"
        break
      case 7:
        editor.style.fontSize = 22 + "px"
        break
      case 8:
        editor.style.fontSize = 16 + "px"
        break
    }
    // switch(this.getAttribute("data-role")) {
    //   case "switchEditor":
    //     if(getComputedStyle(code).display == "none"){
    //       code.style.display = "block"
    //       editor.style.display = "none"
    //       code.value = editor.innerHTML.trim()
    //     } else {
    //       code.style.display = "none"
    //       editor.style.display = "block"
    //       editor.innerHTML = code.value
    //     }
    //     break
    // }
  });
});

alignButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Отримуємо роль (left, center, right або full) з атрибута кнопки
    const role = btn.getAttribute("data-role");

    switch(role) {
      case "left":
        editor.classList.remove("justify", "center", "right")
        editor.classList.add("left")
        break;
      case "center":
        editor.classList.remove("left", "justify", "right")
        editor.classList.add("center")
        break;
      case "right":
        editor.classList.remove("left", "center", "justify")
        editor.classList.add("right")
        break;
      case "full":
        editor.classList.remove("left", "center", "right")
        editor.classList.add("justify")
        break;
    }
  });
});

