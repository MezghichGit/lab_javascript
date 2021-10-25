function valider() {
  var name = document.CIN.name.value;
  var cin = document.CIN.cin.value;

  if (name.length > 0 && cin.length > 0) {
    if (!Number(cin)) {
      alert(
        "Votre CIN est incorrect, chaîne contenant un ou plusieurs caractères"
      );
    } else if (cin.length !== 8) {
      alert("Votre CIN est incorrect, 8 chiffres requis");
    } else {
      alert("nom : " + name + "\nCIN : " + cin);
    }
  } else {
    alert("Veuillez saisir tous les champs");
  }
}
