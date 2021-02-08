function bewegeHoch(x, y, geschwindigkeit){
    var neuesY = y - geschwindigkeit;
    return neuesY;
}

function bewegeRunter(x, y, geschwindigkeit){
    var neuesY = y + geschwindigkeit;
    return neuesY;
}

function bewegeRechts(x, y, geschwindigkeit){
    var neuesX = x + geschwindigkeit;
    return neuesX;
}

function bewegeLinks(x, y, geschwindigkeit){
    var neuesX = x - geschwindigkeit;
    return neuesX;
}
