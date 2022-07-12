var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 4;
ctx.strokeStyle = "black";

function dibujarAhorcado (vidas) {
    switch (vidas) {
        case 7:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dibujarHorca();
            break;
    
        case 6:
            dibujarCabeza();
            break;
        
        case 5:
            dibujarCuerpo();
            break;
        
        case 4:
            dibujarPiernaIzquierda();
            break;
            
        case 3:
            dibujarPiernaDerecha();
            break;

        case 2:
            dibujarBrazoIzquierda();
            break;

        case 1:
            dibujarBrazoDerecho();
            break;

        case 0:
            dibujarCara();
            alertaPerdiste();
            break;
    
        default:
        break;
    }
}

function dibujarHorca() {
    ctx.beginPath();
    ctx.moveTo(50,350);
    ctx.lineTo(300,350);
    ctx.moveTo(100,350);
    ctx.lineTo(100,50);
    ctx.lineTo(250,50);
    ctx.lineTo(250,100);
    ctx.stroke();
}

function dibujarCabeza() {
    ctx.beginPath();
    ctx.arc(250,125,25,0,2*Math.PI);
    ctx.stroke();
}

function dibujarCuerpo() {
    ctx.beginPath();
    ctx.moveTo(250,150);
    ctx.lineTo(250,250);
    ctx.stroke();
}

function dibujarPiernaIzquierda() {
    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineTo(225,300);
    ctx.stroke();
}

function dibujarPiernaDerecha() {
    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineTo(275,300);
    ctx.stroke();
}

function dibujarBrazoIzquierda() {
    ctx.beginPath();
    ctx.moveTo(250,150);
    ctx.lineTo(225,200);
    ctx.stroke();
}

function dibujarBrazoDerecho() {
    ctx.beginPath();
    ctx.moveTo(250,150);
    ctx.lineTo(275,200);
    ctx.stroke();
}

function dibujarCara() {
    ctx.beginPath();
    ctx.moveTo(236,122);
    ctx.lineTo(247,112);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(253,122);
    ctx.lineTo(264,112);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(247,122);
    ctx.lineTo(236,112);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(264,122);
    ctx.lineTo(253,112);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(242,135);
    ctx.lineTo(258,135);
    ctx.stroke();
}

   

