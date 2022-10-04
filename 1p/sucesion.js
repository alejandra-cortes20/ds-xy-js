var datos=[7];
    var minimo = 200;
    var maximo = 300;

    var aux = [];

    for (var i = 200; i < maximo; i++) {
  
        var cont = 0;
  
        for (var j = 0; j < datos.length; j++) {		

            if (i%datos[j]==0 && cont==0){
      
                aux.push(i);
      
                console.log(i+",");
            }
        }
    }
