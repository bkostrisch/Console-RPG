//Js Anastasia

function mudarImagemAnastasia(img) {
    document.getElementById("personagemanastasia").src = './img/' + img + ".png";
}

function changeHpAnastasia() {
    var hpMax = document.getElementById("hpanastasia").value;
    var hpAtual = document.getElementById("healthanastasia").getAttribute('aria-valuenow');
    if (hpAtual == 0) {
        $('#healthanastasia').attr('aria-valuemax', 180).css('width', 180 + 'px');
        $('#healthanastasia').attr('aria-valuenow', hpMax).css('width', 180 + 'px');
        $('#hpbaranastasia').css('width', 180 + 'px');
        $('#hpnumberanastasia').text(hpMax + '/' + hpMax);
    } else {
        $('#healthanastasia').attr('aria-valuemax', hpMax).css('width', 180 + 'px');
        $('#hpbaranastasia').css('width', 180 + 'px');
        $('#hpnumberanastasia').text(hpAtual + '/' + hpMax);
    }
}


function clickHpPlus1Anastasia() {
    var valor = document.getElementById("healthanastasia").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpanastasia").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healthanastasia').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#healthanastasia').width()) + calc);
    $('#hpnumberanastasia').text(parseFloat(valor) + 1 + '/' + document.getElementById("hpanastasia").value);
}


function clickHpMinus1Anastasia() {
    var valor = document.getElementById("healthanastasia").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpanastasia").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healthanastasia').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#healthanastasia').width()) - calc);
    $('#hpnumberanastasia').text(parseFloat(valor) - 1 + '/' + document.getElementById("hpanastasia").value);

}

function clickHpPlus5Anastasia() {
    var valor = document.getElementById("healthanastasia").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpanastasia").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 5;
    $('#healthanastasia').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#healthanastasia').width()) + calc);
    $('#hpnumberanastasia').text(parseFloat(valor) + 5 + '/' + document.getElementById("hpanastasia").value);
}


function clickHpMinus5Anastasia() {
    var valor = document.getElementById("healthanastasia").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpanastasia").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 5;
    $('#healthanastasia').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#healthanastasia').width()) - calc);
    $('#hpnumberanastasia').text(parseFloat(valor) - 5 + '/' + document.getElementById("hpanastasia").value);

}

function clickHpPlus10Anastasia() {
    var valor = document.getElementById("healthanastasia").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpanastasia").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax) * 10);
    $('#healthanastasia').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#healthanastasia').width()) + calc);
    $('#hpnumberanastasia').text(parseFloat(valor) + 10 + '/' + document.getElementById("hpanastasia").value);
}


function clickHpMinus10Anastasia() {
    var valor = document.getElementById("healthanastasia").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpanastasia").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 10;
    $('#healthanastasia').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#healthanastasia').width()) - calc);
    $('#hpnumberanastasia').text(parseFloat(valor) - 10 + '/' + document.getElementById("hpanastasia").value);

}

function changeSanityAnastasia() {
    var SanityMax = document.getElementById("sntanastasia").value;
    var SanityAtual = document.getElementById("sanityanastasia").getAttribute('aria-valuenow');
    if (SanityAtual == 0) {
        $('#sanityanastasia').attr('aria-valuemax', 180).css('width', 180 + 'px');
        $('#sanityanastasia').attr('aria-valuenow', SanityMax).css('width', 180 + 'px');
        $('#sanitybaranastasia').css('width', 180 + 'px');
        $('#sntnumberanastasia').text(SanityMax + '/' + SanityMax);
    } else {
        $('#sanityanastasia').attr('aria-valuemax', SanityMax).css('width', 180 + 'px');
        $('#sanitybaranastasia').css('width', 180 + 'px');
        $('#sntnumberanastasia').text(SanityAtual + '/' + SanityMax);
    }
}

function clickSanityPlus1Anastasia() {
    var valor = document.getElementById("sanityanastasia").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntanastasia").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = 180 / parseInt(SanityMax);
    $('#sanityanastasia').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#sanityanastasia').width()) + calc);
    $('#sntnumberanastasia').text(parseFloat(valor) + 1 + '/' + document.getElementById("sntanastasia").value);
}

function clickSanityMinus1Anastasia() {
    var valor = document.getElementById("sanityanastasia").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntanastasia").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = 180 / parseInt(SanityMax);
    $('#sanityanastasia').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#sanityanastasia').width()) - calc);
    $('#sntnumberanastasia').text(parseFloat(valor) - 1 + '/' + document.getElementById("sntanastasia").value);

}

function clickSanityPlus5Anastasia() {
    var valor = document.getElementById("sanityanastasia").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntanastasia").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 5;
    $('#sanityanastasia').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#sanityanastasia').width()) + calc);
    $('#sntnumberanastasia').text(parseFloat(valor) + 5 + '/' + document.getElementById("sntanastasia").value);
}

function clickSanityMinus5Anastasia() {
    var valor = document.getElementById("sanityanastasia").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntanastasia").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 5;
    $('#sanityanastasia').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#sanityanastasia').width()) - calc);
    $('#sntnumberanastasia').text(parseFloat(valor) - 5 + '/' + document.getElementById("sntanastasia").value);

}

function clickSanityPlus10Anastasia() {
    var valor = document.getElementById("sanityanastasia").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntanastasia").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 10;
    $('#sanityanastasia').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#sanityanastasia').width()) + calc);
    $('#sntnumberanastasia').text(parseFloat(valor) + 10 + '/' + document.getElementById("sntanastasia").value);
}

function clickSanityMinus10Anastasia() {
    var valor = document.getElementById("sanityanastasia").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntanastasia").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 10;
    $('#sanityanastasia').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#sanityanastasia').width()) - calc);
    $('#sntnumberanastasia').text(parseFloat(valor) - 10 + '/' + document.getElementById("sntanastasia").value);

}

// Js Arthur

function mudarImagemArthur(img) {
    document.getElementById("personagemarthur").src = './img/' + img + ".png";
}

function changeHpArthur() {
    var hpMax = document.getElementById("hparthur").value;
    var hpAtual = document.getElementById("healtharthur").getAttribute('aria-valuenow');
    if (hpAtual == 0) {
        $('#healtharthur').attr('aria-valuemax', 180).css('width',180 + 'px');
        $('#healtharthur').attr('aria-valuenow', hpMax).css('width', 180 + 'px');
        $('#hpbararthur').css('width', 180 + 'px');
        $('#hpnumberarthur').text(hpMax + '/' + hpMax);
    } else {
        $('#healtharthur').attr('aria-valuemax', hpMax).css('width', 180 + 'px');
        $('#hpbararthur').css('width', 180 + 'px');
        $('#hpnumberarthur').text(hpAtual + '/' + hpMax);
    }
}


function clickHpPlus1Arthur() {
    var valor = document.getElementById("healtharthur").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hparthur").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healtharthur').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#healtharthur').width()) + calc);
    $('#hpnumberarthur').text(parseFloat(valor) + 1 + '/' + document.getElementById("hparthur").value);
}


function clickHpMinus1Arthur() {
    var valor = document.getElementById("healtharthur").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hparthur").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healtharthur').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#healtharthur').width()) - calc);
    $('#hpnumberarthur').text(parseFloat(valor) - 1 + '/' + document.getElementById("hparthur").value);

}

function clickHpPlus5Arthur() {
    var valor = document.getElementById("healtharthur").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hparthur").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 5;
    $('#healtharthur').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#healtharthur').width()) + calc);
    $('#hpnumberarthur').text(parseFloat(valor) + 5 + '/' + document.getElementById("hparthur").value);
}


function clickHpMinus5Arthur() {
    var valor = document.getElementById("healtharthur").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hparthur").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 5;
    $('#healtharthur').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#healtharthur').width()) - calc);
    $('#hpnumberarthur').text(parseFloat(valor) - 5 + '/' + document.getElementById("hparthur").value);

}

function clickHpPlus10Arthur() {
    var valor = document.getElementById("healtharthur").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hparthur").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 10;
    $('#healtharthur').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#healtharthur').width()) + calc);
    $('#hpnumberarthur').text(parseFloat(valor) + 10 + '/' + document.getElementById("hparthur").value);
}


function clickHpMinus10Arthur() {
    var valor = document.getElementById("healtharthur").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hparthur").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 10;
    $('#healtharthur').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#healtharthur').width()) - calc);
    $('#hpnumberarthur').text(parseFloat(valor) - 10 + '/' + document.getElementById("hparthur").value);

}

function changeSanityArthur() {
    var SanityMax = document.getElementById("sntarthur").value;
    var SanityAtual = document.getElementById("sanityarthur").getAttribute('aria-valuenow');
    if (SanityAtual == 0) {
        $('#sanityarthur').attr('aria-valuemax', 180).css('width', 180 + 'px');
        $('#sanityarthur').attr('aria-valuenow', SanityMax).css('width', 180 + 'px');
        $('#sanitybararthur').css('width', 180 + 'px');
        $('#sntnumberarthur').text(SanityMax + '/' + SanityMax);
    } else {
        $('#sanityarthur').attr('aria-valuemax', SanityMax).css('width', 180 + 'px');
        $('#sanitybararthur').css('width', 180 + 'px');
        $('#sntnumberarthur').text(SanityAtual + '/' + SanityMax);
    }
}

function clickSanityPlus1Arthur() {
    var valor = document.getElementById("sanityarthur").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntarthur").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = 180 / parseInt(SanityMax);
    $('#sanityarthur').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#sanityarthur').width()) + calc);
    $('#sntnumberarthur').text(parseFloat(valor) + 1 + '/' + document.getElementById("sntarthur").value);
}

function clickSanityMinus1Arthur() {
    var valor = document.getElementById("sanityarthur").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntarthur").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = 180 / parseInt(SanityMax);
    $('#sanityarthur').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#sanityarthur').width()) - calc);
    $('#sntnumberarthur').text(parseFloat(valor) - 1 + '/' + document.getElementById("sntarthur").value);

}

function clickSanityPlus5Arthur() {
    var valor = document.getElementById("sanityarthur").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntarthur").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 5;
    $('#sanityarthur').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#sanityarthur').width()) + calc);
    $('#sntnumberarthur').text(parseFloat(valor) + 5 + '/' + document.getElementById("sntarthur").value);
}

function clickSanityMinus5Arthur() {
    var valor = document.getElementById("sanityarthur").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntarthur").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 5;
    $('#sanityarthur').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#sanityarthur').width()) - calc);
    $('#sntnumberarthur').text(parseFloat(valor) - 5 + '/' + document.getElementById("sntarthur").value);

}

function clickSanityPlus10Arthur() {
    var valor = document.getElementById("sanityarthur").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntarthur").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 10;
    $('#sanityarthur').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#sanityarthur').width()) + calc);
    $('#sntnumberarthur').text(parseFloat(valor) + 10 + '/' + document.getElementById("sntarthur").value);
}

function clickSanityMinus10Arthur() {
    var valor = document.getElementById("sanityarthur").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntarthur").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 10;
    $('#sanityarthur').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#sanityarthur').width()) + calc);
    $('#sntnumberarthur').text(parseFloat(valor) - 10 + '/' + document.getElementById("sntarthur").value);

}

// Js Plínio

function mudarImagemPlinio(img) {
    document.getElementById("personagemplinio").src = './img/' + img + ".png";
}

function changeHpPlinio() {
    var hpMax = document.getElementById("hplinio").value;
    var hpAtual = document.getElementById("healthplinio").getAttribute('aria-valuenow');
    if (hpAtual == 0) {
        $('#healthplinio').attr('aria-valuemax', 180).css('width', 180 + 'px');
        $('#healthplinio').attr('aria-valuenow', hpMax).css('width', 180 + 'px');
        $('#hpbarplinio').css('width', 180 + 'px');
        $('#hpnumberplinio').text(hpMax + '/' + hpMax);
    } else {
        $('#healthplinio').attr('aria-valuemax', hpMax).css('width', 180 + 'px');
        $('#hpbarplinio').css('width', 180 + 'px');
        $('#hpnumberplinio').text(hpAtual + '/' + hpMax);
    }
}


function clickHpPlus1Plinio() {
    var valor = document.getElementById("healthplinio").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hplinio").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healthplinio').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#healthplinio').width()) + calc);
    $('#hpnumberplinio').text(parseFloat(valor) + 1 + '/' + document.getElementById("hplinio").value);
}


function clickHpMinus1Plinio() {
    var valor = document.getElementById("healthplinio").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hplinio").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healthplinio').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#healthplinio').width()) - calc);
    $('#hpnumberplinio').text(parseFloat(valor) - 1 + '/' + document.getElementById("hplinio").value);

}

function clickHpPlus5Plinio() {
    var valor = document.getElementById("healthplinio").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hplinio").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 5;
    $('#healthplinio').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#healthplinio').width()) + calc);
    $('#hpnumberplinio').text(parseFloat(valor) + 5 + '/' + document.getElementById("hplinio").value);
}


function clickHpMinus5Plinio() {
    var valor = document.getElementById("healthplinio").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hplinio").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 5;
    $('#healthplinio').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#healthplinio').width()) - calc);
    $('#hpnumberplinio').text(parseFloat(valor) - 5 + '/' + document.getElementById("hplinio").value);

}

function clickHpPlus10Plinio() {
    var valor = document.getElementById("healthplinio").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hplinio").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 10;
    $('#healthplinio').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#healthplinio').width()) + calc);
    $('#hpnumberplinio').text(parseFloat(valor) + 10 + '/' + document.getElementById("hplinio").value);
}


function clickHpMinus10Plinio() {
    var valor = document.getElementById("healthplinio").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hplinio").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax)) * 10;
    $('#healthplinio').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#healthplinio').width()) - calc);
    $('#hpnumberplinio').text(parseFloat(valor) - 10 + '/' + document.getElementById("hplinio").value);

}

function changeSanityPlinio() {
    var SanityMax = document.getElementById("sntplinio").value;
    var SanityAtual = document.getElementById("sanityplinio").getAttribute('aria-valuenow');
    if (SanityAtual == 0) {
        $('#sanityplinio').attr('aria-valuemax', 180).css('width', 180 + 'px');
        $('#sanityplinio').attr('aria-valuenow', SanityMax).css('width', 180 + 'px');
        $('#sanitybarplinio').css('width', 180 + 'px');
        $('#sntnumberplinio').text(SanityMax + '/' + SanityMax);
    } else {
        $('#sanityplinio').attr('aria-valuemax', SanityMax).css('width', 180 + 'px');
        $('#sanitybarplinio').css('width', 180 + 'px');
        $('#sntnumberplinio').text(SanityAtual + '/' + SanityMax);
    }
}

function clickSanityPlus1Plinio() {
    var valor = document.getElementById("sanityplinio").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntplinio").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = 180 / parseInt(SanityMax);
    $('#sanityplinio').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#sanityplinio').width()) + calc);
    $('#sntnumberplinio').text(parseFloat(valor) + 1 + '/' + document.getElementById("sntplinio").value);
}

function clickSanityMinus1Plinio() {
    var valor = document.getElementById("sanityplinio").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntplinio").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = 180 / parseInt(SanityMax);
    $('#sanityplinio').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#sanityplinio').width()) - calc);
    $('#sntnumberplinio').text(parseFloat(valor) - 1 + '/' + document.getElementById("sntplinio").value);

}

function clickSanityPlus5Plinio() {
    var valor = document.getElementById("sanityplinio").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntplinio").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 5;
    $('#sanityplinio').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#sanityplinio').width()) + calc);
    $('#sntnumberplinio').text(parseFloat(valor) + 5 + '/' + document.getElementById("sntplinio").value);
}

function clickSanityMinus5Plinio() {
    var valor = document.getElementById("sanityplinio").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntplinio").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 5;
    $('#sanityplinio').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#sanityplinio').width()) - calc);
    $('#sntnumberplinio').text(parseFloat(valor) - 5 + '/' + document.getElementById("sntplinio").value);

}

function clickSanityPlus10Plinio() {
    var valor = document.getElementById("sanityplinio").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntplinio").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 10;
    $('#sanityplinio').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#sanityplinio').width()) + calc);
    $('#sntnumberplinio').text(parseFloat(valor) + 10 + '/' + document.getElementById("sntplinio").value);
}

function clickSanityMinus10Plinio() {
    var valor = document.getElementById("sanityplinio").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntplinio").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (180 / parseInt(SanityMax)) * 10;
    $('#sanityplinio').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#sanityplinio').width()) - calc);
    $('#sntnumberplinio').text(parseFloat(valor) - 10 + '/' + document.getElementById("sntplinio").value);

}

// Flamel JS

function mudarImagemFlamel(img) {
    document.getElementById("flamel").src = './img/' + img + ".png";
}

function changeHpFlamel() {
    var hpMax = document.getElementById("hpflamel").value;
    var hpAtual = document.getElementById("healthflamel").getAttribute('aria-valuenow');
    if (hpAtual == 0) {
        $('#healthflamel').attr('aria-valuemax', 180).css('width', 180 + 'px');
        $('#healthflamel').attr('aria-valuenow', hpMax).css('width', 180 + 'px');
        $('#hpbarflamel').css('width', 180 + 'px');
        $('#hpnumberflamel').text(hpMax + '/' + hpMax);
    } else {
        $('#healthflamel').attr('aria-valuemax', hpMax).css('width', 180 + 'px');
        $('#hpbarflamel').css('width', 180 + 'px');
        $('#hpnumberflamel').text(hpAtual + '/' + hpMax);
    }
}


function clickHpPlus1Flamel() {
    var valor = document.getElementById("healthflamel").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpflamel").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healthflamel').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#healthflamel').width()) + calc);
    $('#hpnumberflamel').text(parseFloat(valor) + 1 + '/' + document.getElementById("hpflamel").value);
}


function clickHpMinus1Flamel() {
    var valor = document.getElementById("healthflamel").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpflamel").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healthflamel').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#healthflamel').width()) - calc);
    $('#hpnumberflamel').text(parseFloat(valor) - 1 + '/' + document.getElementById("hpflamel").value);

}

function clickHpPlus5Flamel() {
    var valor = document.getElementById("healthflamel").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpflamel").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax))*5;
    $('#healthflamel').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#healthflamel').width()) + calc);
    $('#hpnumberflamel').text(parseFloat(valor) + 5 + '/' + document.getElementById("hpflamel").value);
}


function clickHpMinus5Flamel() {
    var valor = document.getElementById("healthflamel").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpflamel").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax))*5;
    $('#healthflamel').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#healthflamel').width()) - calc);
    $('#hpnumberflamel').text(parseFloat(valor) - 5 + '/' + document.getElementById("hpflamel").value);

}

function clickHpPlus10Flamel() {
    var valor = document.getElementById("healthflamel").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpflamel").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax))*10;
    $('#healthflamel').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#healthflamel').width()) + calc);
    $('#hpnumberflamel').text(parseFloat(valor) + 10 + '/' + document.getElementById("hpflamel").value);
}


function clickHpMinus10Flamel() {
    var valor = document.getElementById("healthflamel").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpflamel").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax))*10;
    $('#healthflamel').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#healthflamel').width()) - calc);
    $('#hpnumberflamel').text(parseFloat(valor) - 10 + '/' + document.getElementById("hpflamel").value);

}

// Valerie JS

function mudarImagemValerie(img) {
    document.getElementById("personagemvalerie").src = './img/' + img + ".png";
}

function changeHpValerie() {
    var hpMax = document.getElementById("hpvalerie").value;
    var hpAtual = document.getElementById("healthvalerie").getAttribute('aria-valuenow');
    if (hpAtual == 0) {
        $('#healthvalerie').attr('aria-valuemax', 180).css('width', 180 + 'px');
        $('#healthvalerie').attr('aria-valuenow', hpMax).css('width', 180 + 'px');
        $('#hpbarvalerie').css('width', 180 + 'px');
        $('#hpnumbervalerie').text(hpMax + '/' + hpMax);
    } else {
        $('#healthvalerie').attr('aria-valuemax', hpMax).css('width', 180 + 'px');
        $('#hpbarvalerie').css('width', 180 + 'px');
        $('#hpnumbervalerie').text(hpAtual + '/' + hpMax);
    }
}


function clickHpPlus1Valerie() {
    var valor = document.getElementById("healthvalerie").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpvalerie").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healthvalerie').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#healthvalerie').width()) + calc);
    $('#hpnumbervalerie').text(parseFloat(valor) + 1 + '/' + document.getElementById("hpvalerie").value);
}


function clickHpMinus1Valerie() {
    var valor = document.getElementById("healthvalerie").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpvalerie").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healthvalerie').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#healthvalerie').width()) - calc);
    $('#hpnumbervalerie').text(parseFloat(valor) - 1 + '/' + document.getElementById("hpvalerie").value);

}

function clickHpPlus5Valerie() {
    var valor = document.getElementById("healthvalerie").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpvalerie").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
   var calc = (180 / parseInt(hpMax))*5;
    $('#healthvalerie').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#healthvalerie').width()) + calc);
    $('#hpnumbervalerie').text(parseFloat(valor) + 5 + '/' + document.getElementById("hpvalerie").value);
}


function clickHpMinus5Valerie() {
    var valor = document.getElementById("healthvalerie").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpvalerie").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax))*5;
    $('#healthvalerie').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#healthvalerie').width()) - calc);
    $('#hpnumbervalerie').text(parseFloat(valor) - 5 + '/' + document.getElementById("hpvalerie").value);

}

function clickHpPlus10Valerie() {
    var valor = document.getElementById("healthvalerie").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpvalerie").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax))*10;
    $('#healthvalerie').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#healthvalerie').width()) + calc);
    $('#hpnumbervalerie').text(parseFloat(valor) + 10 + '/' + document.getElementById("hpvalerie").value);
}


function clickHpMinus10Valerie() {
    var valor = document.getElementById("healthvalerie").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpvalerie").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax))*10;
    $('#healthvalerie').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#healthvalerie').width()) - calc);
    $('#hpnumbervalerie').text(parseFloat(valor) - 10 + '/' + document.getElementById("hpvalerie").value);

}

function changeSanityValerie() {
    var SanityMax = document.getElementById("sntvalerie").value;
    var SanityAtual = document.getElementById("sanityvalerie").getAttribute('aria-valuenow');
    if (SanityAtual == 0) {
        $('#sanityvalerie').attr('aria-valuemax', 180).css('width', 180 + 'px');
        $('#sanityvalerie').attr('aria-valuenow', SanityMax).css('width', 180 + 'px');
        $('#sanitybarvalerie').css('width', 180 + 'px');
        $('#sntnumbervalerie').text(SanityMax + '/' + SanityMax);
    } else {
        $('#sanityvalerie').attr('aria-valuemax', SanityMax).css('width', 180 + 'px');
        $('#sanitybarvalerie').css('width', 180 + 'px');
        $('#sntnumbervalerie').text(SanityAtual + '/' + SanityMax);
    }
}

function clickSanityPlus1Valerie() {
    var valor = document.getElementById("sanityvalerie").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntvalerie").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = 180 / parseInt(SanityMax);
    $('#sanityvalerie').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#sanityvalerie').width()) + calc);
    $('#sntnumbervalerie').text(parseFloat(valor) + 1 + '/' + document.getElementById("sntvalerie").value);
}

function clickSanityMinus1Valerie() {
    var valor = document.getElementById("sanityvalerie").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntvalerie").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = 180 / parseInt(SanityMax);
    $('#sanityvalerie').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#sanityvalerie').width()) - calc);
    $('#sntnumbervalerie').text(parseFloat(valor) - 1 + '/' + document.getElementById("sntvalerie").value);

}

function clickSanityPlus5Valerie() {
    var valor = document.getElementById("sanityvalerie").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntvalerie").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (180 / parseInt(SanityMax))*5;
    $('#sanityvalerie').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#sanityvalerie').width()) + calc);
    $('#sntnumbervalerie').text(parseFloat(valor) + 5 + '/' + document.getElementById("sntvalerie").value);
}

function clickSanityMinus5Valerie() {
    var valor = document.getElementById("sanityvalerie").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntvalerie").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (180 / parseInt(SanityMax))*5;
    $('#sanityvalerie').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#sanityvalerie').width()) - calc);
    $('#sntnumbervalerie').text(parseFloat(valor) - 5 + '/' + document.getElementById("sntvalerie").value);

}

function clickSanityPlus10Valerie() {
    var valor = document.getElementById("sanityvalerie").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntvalerie").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (180 / parseInt(SanityMax))*10;
    $('#sanityvalerie').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#sanityvalerie').width()) + calc);
    $('#sntnumbervalerie').text(parseFloat(valor) + 10 + '/' + document.getElementById("sntvalerie").value);
}

function clickSanityMinus10Valerie() {
    var valor = document.getElementById("sanityvalerie").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntvalerie").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (180 / parseInt(SanityMax))*10;
    $('#sanityvalerie').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#sanityvalerie').width()) - calc);
    $('#sntnumbervalerie').text(parseFloat(valor) - 10 + '/' + document.getElementById("sntvalerie").value);

}

// Yan Js

function mudarImagemYan(img) {
    document.getElementById("personagemyan").src = './img/' + img + ".png";
}

function changeHpYan() {
    var hpMax = document.getElementById("hpyan").value;
    var hpAtual = document.getElementById("healthyan").getAttribute('aria-valuenow');
    if (hpAtual == 0) {
        $('#healthyan').attr('aria-valuemax', 180).css('width', 180 + 'px');
        $('#healthyan').attr('aria-valuenow', hpMax).css('width', 180 + 'px');
        $('#hpbaryan').css('width', 180 + 'px');
        $('#hpnumberyan').text(hpMax + '/' + hpMax);
    } else {
        $('#healthyan').attr('aria-valuemax', hpMax).css('width', 180 + 'px');
        $('#hpbaryan').css('width', 180 + 'px');
        $('#hpnumberyan').text(hpAtual + '/' + hpMax);
    }
}


function clickHpPlus1Yan() {
    var valor = document.getElementById("healthyan").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpyan").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healthyan').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#healthyan').width()) + calc);
    $('#hpnumberyan').text(parseFloat(valor) + 1 + '/' + document.getElementById("hpyan").value);
}


function clickHpMinus1Yan() {
    var valor = document.getElementById("healthyan").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpyan").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = 180 / parseInt(hpMax);
    $('#healthyan').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#healthyan').width()) - calc);
    $('#hpnumberyan').text(parseFloat(valor) - 1 + '/' + document.getElementById("hpyan").value);

}

function clickHpPlus5Yan() {
    var valor = document.getElementById("healthyan").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpyan").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax))*5;
    $('#healthyan').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#healthyan').width()) + calc);
    $('#hpnumberyan').text(parseFloat(valor) + 5 + '/' + document.getElementById("hpyan").value);
}


function clickHpMinus5Yan() {
    var valor = document.getElementById("healthyan").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpyan").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax))*5;
    $('#healthyan').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#healthyan').width()) - calc);
    $('#hpnumberyan').text(parseFloat(valor) - 5 + '/' + document.getElementById("hpyan").value);

}

function clickHpPlus10Yan() {
    var valor = document.getElementById("healthyan").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpyan").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (180 / parseInt(hpMax))*10;
    $('#healthyan').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#healthyan').width()) + calc);
    $('#hpnumberyan').text(parseFloat(valor) + 10 + '/' + document.getElementById("hpyan").value);
}


function clickHpMinus10Yan() {
    var valor = document.getElementById("healthyan").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hpyan").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (180 / parseInt(hpMax))*10;
    $('#healthyan').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#healthyan').width()) - calc);
    $('#hpnumberyan').text(parseFloat(valor) - 10 + '/' + document.getElementById("hpyan").value);

}

function changeSanityYan() {
    var SanityMax = document.getElementById("sntyan").value;
    var SanityAtual = document.getElementById("sanityyan").getAttribute('aria-valuenow');
    if (SanityAtual == 0) {
        $('#sanityyan').attr('aria-valuemax', 180).css('width', 180 + 'px');
        $('#sanityyan').attr('aria-valuenow', SanityMax).css('width', 180 + 'px');
        $('#sanitybaryan').css('width', 180 + 'px');
        $('#sntnumberyan').text(SanityMax + '/' + SanityMax);
    } else {
        $('#sanityyan').attr('aria-valuemax', SanityMax).css('width', 180 + 'px');
        $('#sanitybaryan').css('width', 180 + 'px');
        $('#sntnumberyan').text(SanityAtual + '/' + SanityMax);
    }
}

function clickSanityPlus1Yan() {
    var valor = document.getElementById("sanityyan").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntyan").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = 180 / parseInt(SanityMax);
    $('#sanityyan').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#sanityyan').width()) + calc);
    $('#sntnumberyan').text(parseFloat(valor) + 1 + '/' + document.getElementById("sntyan").value);
}

function clickSanityMinus1Yan() {
    var valor = document.getElementById("sanityyan").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntyan").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = 180 / parseInt(SanityMax);
    $('#sanityyan').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#sanityyan').width()) - calc);
    $('#sntnumberyan').text(parseFloat(valor) - 1 + '/' + document.getElementById("sntyan").value);

}

function clickSanityPlus5Yan() {
    var valor = document.getElementById("sanityyan").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntyan").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (180 / parseInt(SanityMax))*5;
    $('#sanityyan').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#sanityyan').width()) + calc);
    $('#sntnumberyan').text(parseFloat(valor) + 5 + '/' + document.getElementById("sntyan").value);
}

function clickSanityMinus5Yan() {
    var valor = document.getElementById("sanityyan").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntyan").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (180 / parseInt(SanityMax))*5;
    $('#sanityyan').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#sanityyan').width()) - calc);
    $('#sntnumberyan').text(parseFloat(valor) - 5 + '/' + document.getElementById("sntyan").value);

}

function clickSanityPlus10Yan() {
    var valor = document.getElementById("sanityyan").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntyan").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (180 / parseInt(SanityMax))*10;
    $('#sanityyan').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#sanityyan').width()) + calc);
    $('#sntnumberyan').text(parseFloat(valor) + 10 + '/' + document.getElementById("sntyan").value);
}

function clickSanityMinus10Yan() {
    var valor = document.getElementById("sanityyan").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("sntyan").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (180 / parseInt(SanityMax))*10;
    $('#sanityyan').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#sanityyan').width()) - calc);
    $('#sntnumberyan').text(parseFloat(valor) - 10 + '/' + document.getElementById("sntyan").value);

}

