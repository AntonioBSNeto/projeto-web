function mudarDestaque(idNome) {

    //Retirando a classe active de todos os elemntos que tem a classe tablink
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // adionando a classe active ao item do menu correspondente ao idNome
    document.querySelectorAll('.tablink')[idNome==='hm'? 0 : idNome==='pj' ? 1:  2].className += ' active'
}