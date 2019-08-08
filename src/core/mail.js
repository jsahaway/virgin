document.getElementById('googleMaps').style.width = `100%`;

let mailForm = document.getElementById("mailForm");

mailForm.addEventListener("submit", e => {
  e.preventDefault();
  let obj = {};
  for (let i = 0; i < mailForm.elements.length; i++) {
    let el = mailForm[i];
    if (el.name === "subject") {
      obj[el.name] = el.options[el.selectedIndex].innerText;
    } else {
      obj[el.name] = el.value;
    }
  }

  //   var link =
//   window.location.href = `mailto:jattar@hotmail.fr?cc=${obj.email}&subject=${obj.subject}&body=${obj.content}`;
  window.location.href = `mailto:jattar@hotmail.fr`;
});

export default {};
