

function tictactoe(){


        // a= window.addEventListener("click", function(){
        //     document.getElementsByName("").innerHTML = "X"
        //   });
    // const clickedCell = clickedCellEvent.target;
    // const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    var divison_container=document.getElementById('container')
    
     name1 = document.createElement('h1')
    name1.id="one"
    name1.setAttribute("onclick",`myFunction(document.getElementById("one"))`)
     name2 = document.createElement('h1')
    name2.id="two"
    name2.setAttribute("onclick",`myFunction(document.getElementById("two"))`)
     name3 = document.createElement('h1')
    name3.id="three"
    name3.setAttribute("onclick",`myFunction(document.getElementById("three"))`)
     name4 = document.createElement('h1')
    name4.id="four"
    name4.setAttribute("onclick",`myFunction(document.getElementById("four"))`)
     name5 = document.createElement('h1')
    name5.id="five"
    name5.setAttribute("onclick",`myFunction(document.getElementById("five"))`)
     name6 = document.createElement('h1')
    name6.id="six"
    name6.setAttribute("onclick",`myFunction(document.getElementById("six"))`)
     name7 = document.createElement('h1')
    name7.id="seven"
    name7.setAttribute("onclick",`myFunction(document.getElementById("seven"))`)
     name8 = document.createElement('h1')
    name8.id="eight"
    name8.setAttribute("onclick",`myFunction(document.getElementById("eight"))`)
     name9 = document.createElement('h1')
    name9.id="nine"
    name9.setAttribute("onclick",`myFunction(document.getElementById("nine"))`)
    divison_container.appendChild(name1)
    divison_container.appendChild(name2)
    divison_container.appendChild(name3)
    divison_container.appendChild(name4)
    divison_container.appendChild(name5)
    divison_container.appendChild(name6)
    divison_container.appendChild(name7)
    divison_container.appendChild(name8)
    divison_container.appendChild(name9)   
}
 var count = 0;
function myFunction(posi) {
    check();
    if(count==0 || count%2==0)
    {
        posi.innerHTML='X'
    }
    else{
        posi.innerHTML='O'
    }
    count=count+1;
    
}


function check(){
    if(name1.innerHTML=='X' && name2.innerHTML=='X' && name3.innerHTML=='X')
    {
        alert('Player 1 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name1.innerHTML=='X' && name4.innerHTML=='X' && name7.innerHTML=='X')
    {
        alert('Player 1 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name4.innerHTML=='X' && name5.innerHTML=='X' && name6.innerHTML=='X')
    {
        alert('Player 1 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name7.innerHTML=='X' && name8.innerHTML=='X' && name9.innerHTML=='X')
    {
        alert('Player 1 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name1.innerHTML=='X' && name5.innerHTML=='X' && name9.innerHTML=='X')
    {
        alert('Player 1 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name2.innerHTML=='X' && name5.innerHTML=='X' && name8.innerHTML=='X')
    {
        alert('Player 1 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name3.innerHTML=='X' && name5.innerHTML=='X' && name7.innerHTML=='X')
    {
        alert('Player 1 Wins')
        count=0
        h1.innerHTML=""
        return
    }


    if(name1.innerHTML=='O' && name2.innerHTML=='O' && name3.innerHTML=='O')
    {
        alert('Player 2 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name1.innerHTML=='O' && name4.innerHTML=='O' && name7.innerHTML=='O')
    {
        alert('Player 2 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name4.innerHTML=='O' && name5.innerHTML=='O' && name6.innerHTML=='O')
    {
        alert('Player 2 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name7.innerHTML=='O' && name8.innerHTML=='O' && name9.innerHTML=='O')
    {
        alert('Player 2 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name1.innerHTML=='O' && name5.innerHTML=='O' && name9.innerHTML=='O')
    {
        alert('Player 2 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name2.innerHTML=='O' && name5.innerHTML=='O' && name8.innerHTML=='O')
    {
        alert('Player 2 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name3.innerHTML=='O' && name5.innerHTML=='O' && name7.innerHTML=='O')
    {
        alert('Player 2 Wins')
        count=0
        h1.innerHTML=""
        return
    }
    if(name1.innerHTML!='' && name2.innerHTML!='' && name3.innerHTML!='' && name4.innerHTML!='' && name5.innerHTML!='' && name6.innerHTML!='' && name7.innerHTML!='' && name8.innerHTML!='' && name9.innerHTML!='' )
    {
        alert("Match is Draw!! Kindly reset to Play Again.")
    }
}
function reset()
{
    location.reload();
}

tictactoe();