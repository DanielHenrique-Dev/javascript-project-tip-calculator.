//parte de javascript 
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
  
    //Verificação de valores
    if (billAmt === "" || serviceQual == 0) {
      alert("Por favor insira valores.");
      return;
    }
    //checando caixa de opcões
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    //parte de calculo
    var total = (billAmt * serviceQual) / numOfPeople;
    //arredondando duas casas decimais
    total = Math.round(total * 100) / 100;
    //obitendo dois digitos após o ponto decimal
    total = total.toFixed(2);
    //parte de display
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  //escondendo o display de valores
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //chamando a função atraves do click
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };