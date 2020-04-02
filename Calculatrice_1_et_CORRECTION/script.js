function ajouter(monChiffre) {
    document.getElementById("result").value += monChiffre;
}


/* Je déclare une fonction égal qui ne prends aucun paramètre
Cette fonction ajouteSymbole sera appellé par le HTML à chaque clic
sur = de la calculatrice
Evidemment chaque boutton appelle la fonctionavec son propre symbole */
function calcResult() {
    var monResult = document.getElementById("result").value;
    //On cherche le symbole /
    if (monResult.indexOf("/") >= 0) {
        // On doit faire une division
        // On prends la partie du début 0 à /
        var ope1 = monResult.substr(0, monResult.indexOf("/")) 
        // On prends la partie de / à la fin
        var ope2 = monResult.substr(monResult.indexOf("/") + 1)
        // On calcule
        document.getElementById("result").value = "" + ((+ope1) / (+ope2))
    }
    else {
        // Il n'y a pas de symbole / je cherche le symbole *
        if (monResult.indexOf("*") >= 0) {
            //On doit faire une multiplication
            // On prends la partie du début 0 à *
            var ope1 = monResult.substr(0, monResult.indexOf("*"))
            // On prends la partie de * à la fin
            var ope2 = monResult.substr(monResult.indexOf("*") + 1)
            // On calcule
            document.getElementById("result").value = "" + ((+ope1) * (+ope2))
        }
        else {
            // Il n'y a pas de symbole / 
            // Il n'y a pas de symbole * je cherche le symbole -
            if (monResult.indexOf("-") >= 0) {
                //On doit faire une soustraction
                // On prends la partie du début 0 à -
                var ope1 = monResult.substr(0, monResult.indexOf("-"))
                // On prends la partie de - à la fin
                var ope2 = monResult.substr(monResult.indexOf("-") + 1)
                // On calcule
                document.getElementById("result").value = "" + ((+ope1) - (+ope2))
            }
            else {
                // Il n'y a pas de symbole / 
                // Il n'y a pas de symbole *
                // Il n'y a pas de symbole - je cherche le symbole +
                if (monResult.indexOf("+") >= 0) {
                    //On doit faire une addition
                    // On prends la partie du début 0 à +
                    var ope1 = monResult.substr(0, monResult.indexOf("+"))
                    // On prends la partie de + à la fin
                    var ope2 = monResult.substr(monResult.indexOf("+") + 1)
                    // On calcule
                    document.getElementById("result").value = "" + ((+ope1) + (+ope2))
                }
                else {
                    // Il n'y a pas de symbole / 
                    // Il n'y a pas de symbole *
                    // Il n'y a pas de symbole -
                    // Il n'y a pas de symbole +
                    // On ne fait rien
                }
            }
        }
    }
}


/*
function ajouteSymbole(monSymbole) {
                    // Il y a un symbole + dans la chaine, 
                    //je ne fais donc rien
                }
                else
                {
                else {
                    // Il n'y a pas de symbole / 
                    // Il n'y a pas de symbole *
                    // Il n'y a pas de symbole -
function ajouteSymbole(monSymbole) {
            }
        }
    }
*/





function fonction_speciale(fonction) {
   if (verification(window.document.index.affiche.value)) {
     if(fonction == "sqrt") {
       var x = 0;
     x = eval(window.document.index.affiche.value);
     window.document.index.affiche.value = Math.sqrt(x);
   }
   if(fonction == "pow") {
     var x = 0;
     x = eval(window.document.index.affiche.value);
     window.document.index.affiche.value = x * x;
   }
   if(fonction == "log") {
     var x = 0;
     x = eval(window.document.index.affiche.value);
     window.document.index.affiche.value = Math.log(x);
   }
  } else window.document.index.affiche.value = 0
}