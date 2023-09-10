function myfunc(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=document.getElementById("b1").ariaValueMax;
    b1=document.getElementById("b2").ariaValueMax;
    b1=document.getElementById("b3").ariaValueMax;
    b1=document.getElementById("b4").ariaValueMax;
    b1=document.getElementById("b5").ariaValueMax;
    b1=document.getElementById("b6").ariaValueMax;
    b1=document.getElementById("b7").ariaValueMax;
    b1=document.getElementById("b8").ariaValueMax;
    b1=document.getElementById("b9").ariaValueMax;
    var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn,b8btn, b9btn;
    
    b1btn = document.getElementById("b1");
    b2btn = document.getElementById("b2");
    b3btn = document.getElementById("b3");
    b4btn = document.getElementById("b4");
    b5btn = document.getElementById("b5");
    b6btn = document.getElementById("b6");
    b7btn = document.getElementById("b7");
    b8btn = document.getElementById("b8");
    b9btn = document.getElementById("b9");

    if ((b1=="x"|| b1="X")&&(b2== "x" ||b2=="x")&&(b3=="x||b3=="X"))
        document.getElementById("print")
            .innerHTML ="Player X won";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color ="red";
        b2btn.style.color ="red";
        b3btn.style.color ="red";  
    }  
    else if ((b1=="x"|| b1="X")&&(b4== "x" ||b4=="x")&&(b7=="x||b7=="X"))
             document.getElementById("print")
                .innerHTML ="Player X won";
             b2btn.disabled = true;
             b3btn.disabled = true;
             b5btn.disabled = true;
             b6btn.disabled = true;
             b8btn.disabled = true;
             b9btn.disabled = true;

             b1btn.style.color ="red";
             b4btn.style.color ="red";
             b7btn.style.color ="red";
    }
    esle if ((b7=="x"|| b7="X")&&(b8== "x" ||b8=="x")&&(b9=="x||b9=="X"))
              document.getElementById("print")
                .innerHTML ="Player X won";
             b1btn.disabled = true;
             b2btn.disabled = true;
             b3btn.disabled = true;
             b4btn.disabled = true;
             b5btn.disabled = true;
             b6btn.disabled = true;

             b7btn.style.color ="red";
             b8btn.style.color ="red";
            b9btn.style.color ="red";
    }
    esle if ((b3=="x"|| b3="X")&&(b6== "x" ||b6=="x")&&(b9=="x||b9=="X"))
             document.getElementById("print")
                .innerHTML ="Player X won";
             b1btn.disabled = true;
             b2btn.disabled = true;
             b4btn.disabled = true;
             b5btn.disabled = true;
             b7btn.disabled = true;
             b8btn.disabled = true;

             b3btn.style.color ="red";
             b6btn.style.color ="red";
             b9btn.style.color ="red";
    }
     else if ((b1=="x"|| b1="X")&&(b5== "x" ||b5=="x")&&(b9=="x||b9=="X"))
              document.getElementById("print")
                 .innerHTML ="Player X won";
             b2btn.disabled = true;
             b3btn.disabled = true;
             b4btn.disabled = true;
             b6btn.disabled = true;
             b7btn.disabled = true;
             b8btn.disabled = true;

             b1btn.style.color ="red";
             b5btn.style.color ="red";
             b9btn.style.color ="red";
    }
      else if ((b3=="x"|| b3="X")&&(b5== "x" ||b5=="x")&&(b7=="x||b7=="X"))
               document.getElementById("print")
                 .innerHTML ="Player X won";
       
                 b1btn.disabled = true;
       
                 b2btn.disabled = true;
       
                 b4btn.disabled = true;
       
                 b6btn.disabled = true;
       
                 b8btn.disabled = true;
       
                 b9btn.disabled = true;

       
                 b3btn.style.color ="red";
       
                 b5btn.style.color ="red";
       
                 b7btn.style.color ="red";
    }
     else if ((b2=="x"|| b2="X")&&(b5== "x" ||b5=="x")&&(b8=="x||b8=="X"))
              document.getElementById("print")
                  .innerHTML ="Player X won";
       
                  b1btn.disabled = true;
       
                  b3btn.disabled = true;
       
                  b4btn.disabled = true;
        
                  b6btn.disabled = true;
        
                  b7btn.disabled = true;
        
                  b9btn.disabled = true;

        
                  b2btn.style.color ="red";
        
                  b5btn.style.color ="red";
        
                  b8btn.style.color ="red";
    }
    else if ((b4=="x"|| b4="X")&&(b5== "x" ||b5=="x")&&(b8=="x||b8=="X"))
              document.getElementById("print")
                 .innerHTML ="Player X won";
        
                 b1btn.disabled = true;
        
                 b2btn.disabled = true;
        
                 b3btn.disabled = true;
        
                 b7btn.disabled = true;
        
                 b8btn.disabled = true;
        
                 b9btn.disabled = true;

        
                 b4btn.style.color ="red";
        
                 b5btn.style.color ="red";
        
                 b6btn.style.color ="red";
    }





    else if ((b1=="x"|| b1="X")&&(b2== "x" ||b2=="x")&&(b3=="x||b3=="X"))
              document.getElementById("print")
            .innerHTML ="Player O won";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color ="red";
        b2btn.style.color ="red";
        b3btn.style.color ="red";
}  
else if ((b1=="x"|| b1="X")&&(b4== "x" ||b4=="x")&&(b7=="x||b7=="X"))
        document.getElementById("print")
             .innerHTML ="Player O won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color ="red";
        b4btn.style.color ="red";
        b7btn.style.color ="red";
}
esle if ((b7=="x"|| b7="X")&&(b8== "x" ||b8=="x")&&(b9=="x||b9=="X"))
        document.getElementById("print")
             .innerHTML ="Player O won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color ="red";
        b8btn.style.color ="red";
        b9btn.style.color ="red";
}
esle if ((b3=="x"|| b3="X")&&(b6== "x" ||b6=="x")&&(b9=="x||b9=="X"))
        document.getElementById("print")
            .innerHTML ="Player O won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color ="red";
        b6btn.style.color ="red";
        b9btn.style.color ="red";
}
else if ((b1=="x"|| b1="X")&&(b5== "x" ||b5=="x")&&(b9=="x||b9=="X"))
        document.getElementById("print")
            .innerHTML ="Player O won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color ="red";
        b5btn.style.color ="red";
        b9btn.style.color ="red";
}
else if ((b3=="x"|| b3="X")&&(b5== "x" ||b5=="x")&&(b7=="x||b7=="X"))
        document.getElementById("print")
            .innerHTML ="Player O won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color ="red";
        b5btn.style.color ="red";
        b7btn.style.color ="red";
}
else if ((b2=="x"|| b2="X")&&(b5== "x" ||b5=="x")&&(b8=="x||b8=="X"))
        document.getElementById("print")
            .innerHTML ="Player O won";
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color ="red";
        b5btn.style.color ="red";
        b8btn.style.color ="red";
}
else if ((b4=="x"|| b4="X")&&(b5== "x" ||b5=="x")&&(b8=="x||b8=="X"))
        document.getElementById("print")
            .innerHTML ="Player O won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color ="red";
        b5btn.style.color ="red";
        b6btn.style.color ="red";
}


