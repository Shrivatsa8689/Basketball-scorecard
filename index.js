var a=document.getElementById("homescore");
var b=document.getElementById("guestscore");
var c=document.getElementById("homefault");
var d=document.getElementById("guestfault");
var e=document.getElementById("homewins");
var f=document.getElementById("guestwins");
var set=0;
function newgame()
{
    var g=document.getElementById("setno");
    if(parseInt(e.textContent)>parseInt(f.textContent))
    {
        
        g.textContent="Home Team Wins";
        setTimeout(function()
        {
            g.textContent="SET 1";
        },1000)
    }
    if(parseInt(f.textContent)>parseInt(e.textContent))
    {
        g.textContent="Guest Team Wins";
        setTimeout(function()
        {
            g.textContent="SET 1";
        },4000)
    }
    if(parseInt(f.textContent)==parseInt(e.textContent))
    {
        g.textContent="Match Drawn";
        setTimeout(function()
        {
            g.textContent="SET 1";
        },4000)
    }
    a.textContent=0;
    b.textContent=0;
    c.textContent=0;
    d.textContent=0;
    e.textContent=0;
    f.textContent=0;
}

function newset()
{
    var sno=document.getElementById("setno");
    var str=sno.textContent;
    var res = str.charAt(str.length-1);
    res= parseInt(res)+1;
    sno.textContent="SET" + " "+ res;

    // console.log(e.textContent);
    // console.log(f.textContent);
    if(parseInt(a.textContent)>parseInt(b.textContent))
    {
        e.textContent=parseInt(e.textContent)+1;
    }
    if(parseInt(b.textContent)>parseInt(a.textContent))
    {
        f.textContent=parseInt(f.textContent)+1;
    }

    if(parseInt(f.textContent)>parseInt(e.textContent))
    {
        f.classList.add("lead");
        setTimeout(function()
        {
            f.classList.remove("lead");
        },1000)
        e.classList.add("trial");
        setTimeout(function()
        {
            e.classList.remove("trial");
        },1000)
    }
    if(parseInt(e.textContent)>parseInt(f.textContent))
    {
        e.classList.add("lead");
        setTimeout(function()
        {
            e.classList.remove("lead");
        },1000)
        f.classList.add("trial");
        setTimeout(function()
        {
            f.classList.remove("trial");
        },1000)
    }

    a.textContent=0;
    b.textContent=0;
    c.textContent=0;
    d.textContent=0;
}



// function addh1()
// {
//     a.textContent=parseInt(a.textContent)+1;
// }

// function addh2()
// {
//     a.textContent=parseInt(a.textContent)+2;
// }

// function addh3()
// {
//     a.textContent=parseInt(a.textContent)+3;
// }

// function addg1()
// {
//     b.textContent=parseInt(b.textContent)+1;
// }

// function addg2()
// {
//     b.textContent=parseInt(b.textContent)+2;
// }

// function addg3()
// {
//     b.textContent=parseInt(b.textContent)+3;
// }

// function addfault1()
// {
//     c.textContent=parseInt(c.textContent)+1;
// }

// function addfault2()
// {
//     d.textContent=parseInt(d.textContent)+1;
// }

function add(buttonid)
{
    if(buttonid[0]=='h')
    {
        if(buttonid[1]=='f')
            c.textContent=parseInt(c.textContent)+1;
        else
            a.textContent=parseInt(a.textContent)+parseInt(buttonid[1]);
    }
    if(buttonid[0]=='g')
    {
        if(buttonid[1]=='f')
            d.textContent=parseInt(d.textContent)+1;
        else
            b.textContent=parseInt(b.textContent)+parseInt(buttonid[1]);
    }
    check();
}
function check()
{
    if(parseInt(a.textContent)>parseInt(b.textContent))
    {
        a.classList.add("lead");
        setTimeout(function()
        {
            a.classList.remove("lead");
        },1000)
        b.classList.add("trial");
        setTimeout(function()
        {
            b.classList.remove("trial");
        },1000)
    }
    if(parseInt(b.textContent)>parseInt(a.textContent))
    {
        b.classList.add("lead");
        setTimeout(function()
        {
            b.classList.remove("lead");
        },1000)
        a.classList.add("trial");
        setTimeout(function()
        {
            a.classList.remove("trial");
        },1000)
    }

    
}