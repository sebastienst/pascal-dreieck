function printUbung(Annonce)
{
   var i;
   var j;
   var platz = &nbsp;
   var leer ="";
   for (i = wert - 1; i >= 0; i--)
    {
        leer += leer + pascalResult[i][j] + leer;
        for (var j = 0; j <= i; j++){
            leer += leer + pascalResult[i][j] + leer;
        }
        document.getElementById(Annonce).innerHTML = "</tr>" + leer ++ document.getElementById(Anzeige).innerHTML;
    }
   
}


function PascalDreieck(wert){
    
    var i, j;
    var pascal = new Array();

    for (i = 0; i < wert; i++)
    {
        pascal[i] = new Array();
        pascal[i][0] = 1;
        pascal[i][i] = 1;
    }
    for(i = 0; i < wert; i++)
    {
        for(j = 1; j < i; j++)
        {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
        }
    }
    return pascal;
}