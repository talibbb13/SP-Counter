function incAmt() {
  let amount = document.getElementById("showCase").value++;
}

function decAmt() {
  let amount = document.getElementById("showCase").value--;

}

function reset() {
  let amount = document.getElementById("showCase");
  amount.value = 0;
}

// Gradient bg color