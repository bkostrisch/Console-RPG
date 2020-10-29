function mudarImagem(img) {
    document.getElementById("personagem").src = './img/' + img + ".png";
}

function changeHp() {
    var hpMax = document.getElementById("hp").value;
    var hpAtual = document.getElementById("health").getAttribute('aria-valuenow');
    if (hpAtual == 0) {
        $('#health').attr('aria-valuemax', 210).css('width', 210 + 'px');
        $('#health').attr('aria-valuenow', hpMax).css('width', 210 + 'px');
        $('#hpbar').css('width', 210 + 'px');
        $('#hpnumber').text(hpMax + '/' + hpMax);
    } else {
        $('#health').attr('aria-valuemax', hpMax).css('width', 210 + 'px');
        $('#hpbar').css('width', 210 + 'px');
        $('#hpnumber').text(hpAtual + '/' + hpMax);
    }
}


function clickHpPlus1() {
    var valor = document.getElementById("health").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hp").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = 210 / parseInt(hpMax);
    $('#health').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#health').width()) + calc);
    $('#hpnumber').text(parseFloat(valor) + 1 + '/' + document.getElementById("hp").value);
}


function clickHpMinus1() {
    var valor = document.getElementById("health").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hp").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = 210 / parseInt(hpMax);
    $('#health').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#health').width()) - calc);
    $('#hpnumber').text(parseFloat(valor) - 1 + '/' + document.getElementById("hp").value);

}

function clickHpPlus5() {
    var valor = document.getElementById("health").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hp").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (210 / parseInt(hpMax)) * 5;
    $('#health').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#health').width()) + calc);
    $('#hpnumber').text(parseFloat(valor) + 5 + '/' + document.getElementById("hp").value);
}


function clickHpMinus5() {
    var valor = document.getElementById("health").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hp").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (210 / parseInt(hpMax)) * 5;
    $('#health').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#health').width()) - calc);
    $('#hpnumber').text(parseFloat(valor) - 5 + '/' + document.getElementById("hp").value);

}

function clickHpPlus10() {
    var valor = document.getElementById("health").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hp").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == hpMax) {
        return;
    }
    var calc = (210 / parseInt(hpMax) * 10);
    $('#health').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#health').width()) + calc);
    $('#hpnumber').text(parseFloat(valor) + 10 + '/' + document.getElementById("hp").value);
}


function clickHpMinus10() {
    var valor = document.getElementById("health").getAttribute('aria-valuenow');
    var hpMax = document.getElementById("hp").value;
    if (hpMax == '') {
        alert('HP VAZIO');
        return;
    }
    if (valor == 0) {
        alert('HP VAZIO');
        return;
    }
    var calc = (210 / parseInt(hpMax)) * 10;
    $('#health').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#health').width()) - calc);
    $('#hpnumber').text(parseFloat(valor) - 10 + '/' + document.getElementById("hp").value);

}

function changeSanity() {
    var SanityMax = document.getElementById("snt").value;
    var SanityAtual = document.getElementById("sanity").getAttribute('aria-valuenow');
    if (SanityAtual == 0) {
        $('#sanity').attr('aria-valuemax', 210).css('width', 210 + 'px');
        $('#sanity').attr('aria-valuenow', SanityMax).css('width', 210 + 'px');
        $('#sanitybar').css('width', 210 + 'px');
        $('#sntnumber').text(SanityMax + '/' + SanityMax);
    } else {
        $('#sanity').attr('aria-valuemax', SanityMax).css('width', 210 + 'px');
        $('#sanitybar').css('width', 210 + 'px');
        $('#sntnumber').text(SanityAtual + '/' + SanityMax);
    }
}

function clickSanityPlus1() {
    var valor = document.getElementById("sanity").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("snt").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = 210 / parseInt(SanityMax);
    $('#sanity').attr('aria-valuenow', parseFloat(valor) + 1).css('width', parseFloat($('#sanity').width()) + calc);
    $('#sntnumber').text(parseFloat(valor) + 1 + '/' + document.getElementById("snt").value);
}

function clickSanityMinus1() {
    var valor = document.getElementById("sanity").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("snt").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = 210 / parseInt(SanityMax);
    $('#sanity').attr('aria-valuenow', parseFloat(valor) - 1).css('width', parseFloat($('#sanity').width()) - calc);
    $('#sntnumber').text(parseFloat(valor) - 1 + '/' + document.getElementById("snt").value);

}

function clickSanityPlus5() {
    var valor = document.getElementById("sanity").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("snt").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (210 / parseInt(SanityMax)) * 5;
    $('#sanity').attr('aria-valuenow', parseFloat(valor) + 5).css('width', parseFloat($('#sanity').width()) + calc);
    $('#sntnumber').text(parseFloat(valor) + 5 + '/' + document.getElementById("snt").value);
}

function clickSanityMinus5() {
    var valor = document.getElementById("sanity").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("snt").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (210 / parseInt(SanityMax)) * 5;
    $('#sanity').attr('aria-valuenow', parseFloat(valor) - 5).css('width', parseFloat($('#sanity').width()) - calc);
    $('#sntnumber').text(parseFloat(valor) - 5 + '/' + document.getElementById("snt").value);

}

function clickSanityPlus10() {
    var valor = document.getElementById("sanity").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("snt").value;
    if (SanityMax == '') {
        alert('Sanidade vazia');
        return;
    }
    if (valor == SanityMax) {
        return;
    }
    var calc = (210 / parseInt(SanityMax)) * 10;
    $('#sanity').attr('aria-valuenow', parseFloat(valor) + 10).css('width', parseFloat($('#sanity').width()) + calc);
    $('#sntnumber').text(parseFloat(valor) + 10 + '/' + document.getElementById("snt").value);
}

function clickSanityMinus10() {
    var valor = document.getElementById("sanity").getAttribute('aria-valuenow');
    var SanityMax = document.getElementById("snt").value;
    if (SanityMax == '') {
        alert('Sanidade Vazia');
        return;
    }
    if (valor == 0) {
        alert('Sanidade Vazia');
        return;
    }
    var calc = (210 / parseInt(SanityMax)) * 10;
    $('#sanity').attr('aria-valuenow', parseFloat(valor) - 10).css('width', parseFloat($('#sanity').width()) - calc);
    $('#sntnumber').text(parseFloat(valor) - 10 + '/' + document.getElementById("snt").value);

}