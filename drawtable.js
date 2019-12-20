for (var row=0; row<=5; row++) { //Draw game table 
    document.writeln("<tr>");	
                for (var col=0; col<=6; col++) {
                    document.writeln("<td id='square_" + row + "_"+ col +"' class='board_square'></td>");							
                }
                document.writeln("</tr>");	
            }		