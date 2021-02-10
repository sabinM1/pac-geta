function suchePacman(x, y)
{
    if(istWand(x,y))
    {
        return [-1,-1]
    }
    if(istPacman(x,y))
    {
        return [x,y]
    }

    var rechts = suchePacman(x+1,y)
    if(rechts != [-1,-1])
    {
        return rechts
    }

    var links = suchePacman(x-1,y)
    if(links != [-1,-1])
    {
        return links
    }
    var oben = suchePacman(x, y+1)
    if(oben != [-1,-1])
    {
        return oben
    }
    var unten = suchePacman(x,y-1)
    if(unten != [-1,-1])
    {
        return unten
    }
    return [-1,-1]
}