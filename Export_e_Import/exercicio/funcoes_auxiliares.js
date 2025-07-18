let maiorN = 0;

function gets(n) {
    if( n > maiorN) {
        maiorN = n;
    }
}

function prints() {
    console.log(maiorN);
}

module.exports = { gets, prints };