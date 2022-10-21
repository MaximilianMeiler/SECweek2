/*document.getElementById("myTextInput")
.addEventListener("input", (event) => {
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  const input = document.getElementById("myTextInput");
  const phone = input.value;
  const found = regex.test(phone);
  if (!found && phone.length) {
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
  }
});

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("myTextInput");
  const regex = /[()-. ]/g;
  const savedPhoneNum = input.value.replaceAll(regex, "");
  console.log(savedPhoneNum)
})*/

document.getElementById("myForm")
.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("myTextInput");
  const regex = / {2,}/g;
  const newText = input.value.replaceAll(regex, " ")
  .trim();
  console.log(newText)
  const encodedInputText = encodeURI(input.value);
  const encodedCleanText = encodeURI(newText);
  console.log(encodedInputText);
  console.log(encodedCleanText);
})