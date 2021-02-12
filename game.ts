class Game
{
    teams:Array<Team>=[];
    currentTeam: Team;
    constructor()
    {
        for(let i =0;i<2;i++)
        {
            this.teams.push(new Team(i))
        }
        this.currentTeam = this.teams[0];
    }
}

class Team
{
    id:number;
    players:Array<Player>=[];
    score:number;
    currentPlayer: Player;
    constructor(id)
    {
        this.id = id;
        for(let i =0;i<10;i++)
        {
            this.players.push(new Player(i))
        }
        this.currentPlayer = this.players[0];
    }
}

class Player
{
    id:number;
    score:number=0;
    balls:number=0;
    ballScore:Array<number>=[null,null,null,null,null,null];

    constructor(id:number)
    {
        this.id= id;

    }

    ballhit()
    {
        let randRun = Math.floor(Math.random()*7);
        this.ballScore[this.balls]= randRun;
        this.score = this.score + randRun;
        this.balls++;
    }

}
var title=document.createElement("div")
title.setAttribute("class","container-fluid")
title.innerHTML="cricket10"
title.style.position="relative"

title.style.left="600px"

var r1=document.createElement("div")
r1.setAttribute("class","row")
r1.style.position="relative";
r1.style.left="300px"
var c1=document.createElement("div")
c1.setAttribute("class","col-lg-2")
c1.setAttribute("padding","50px")
c1.setAttribute("margin","50px")
var T1S=document.createElement("div")
T1S.innerHTML="Team1 score"
c1.append(T1S)
var b=document.createElement("button")
b.setAttribute("class","btn btn-primary")
b.type="button"
b.innerHTML="hit"
c1.append(b)
var t1=document.createElement("table")
var h1=document.createElement("th")
h1.innerHTML="TEAM 1"
t1.append(h1)

for(let i=1;i<=6;i++)
{   var header=document.createElement("th")
header.style.border="2px solid black"
    header.setAttribute("id","table_header")
    header.innerHTML="B"+i
    t1.append(header)
}
var t=document.createElement("th")
t.innerHTML="TOTAL"
t1.append(t)
for(let i=1;i<=10;i++)
{
    var tr=document.createElement("tr")
    tr.style.border="2px solid black"
    tr.setAttribute("id","tr")
    var player=document.createElement("td")
    player.setAttribute("class","player")
    player.innerHTML="player"+i
    tr.append(player)
    for(let j=1;j<=6;j++)
    {
        var td=document.createElement("td")
        td.style.border="2px solid black"
        td.setAttribute("id","td")
        tr.append(td)


    }
    var total=document.createElement("td")
    total.setAttribute("id","total")
    tr.append(total)


    t1.append(tr)
}
c1.append(t1)
var c2=document.createElement("div")
c2.setAttribute("class","col-lg-2")
c2.setAttribute("padding","50px")
c2.setAttribute("margin","50px")
c2.innerHTML="TIMER"
var timeR=document.createElement("h1")
timeR.innerHTML="60"
c2.append(timeR)

var b1=document.createElement("button")
b1.setAttribute("id","BTN")
b1.setAttribute("class","btn btn-primary")
b1.type="button"
b1.innerHTML="Generate Result"
c2.append(b1)





var c21=document.createElement("div")
c21.setAttribute("class","col-lg-2")
c21.setAttribute("padding","50px")
c21.setAttribute("margin","50px")
var T2S=document.createElement("div")
T2S.innerHTML="Team2 score"
c21.append(T1S)
var bn=document.createElement("button")
bn.setAttribute("class","btn btn-primary")
bn.type="button"
bn.innerHTML="hit"
c21.append(bn)
var t21=document.createElement("table")
var h21=document.createElement("th")
h21.innerHTML="TEAM 2"
t21.append(h21)

for(let i=1;i<=6;i++)
{   
    var header1=document.createElement("th")

    header1.style.border="2px solid black"
    header1.setAttribute("id","table_header1")
    header1.innerHTML="B"+i
    t21.append(header1)
}
var t0=document.createElement("th")
t0.innerHTML="TOTAL"
t21.append(t0)
for(let i=1;i<=10;i++)
{
    var tr1=document.createElement("tr")
    tr1.style.border="2px solid black"
    tr1.setAttribute("id","tr1")
    var player1=document.createElement("td")
    player1.setAttribute("class","player1")
    player1.innerHTML="player"+i
    tr1.append(player1)
    for(let j=1;j<=6;j++)
    {
        var td1=document.createElement("td")
        td1.style.border="2px solid black"
        td1.setAttribute("id","td")
        tr1.append(td1)


    }
    var total1=document.createElement("td")
    total1.setAttribute("id","total")
    tr1.append(total1)


    t21.append(tr1)
}
c21.append(t21)

r1.append(c1)
r1.append(c2)
r1.append(c21)
document.body.append(title)
document.body.append(r1)

