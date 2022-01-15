function getPilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = 'gajah';
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const info = document.querySelector('.info');
    info.innerHTML = hasil;

    const gambarKomputer = document.querySelector('.img-komputer')
    if (pilihanComputer == 'gajah') return gambarKomputer.setAttribute('src', 'img/gajah.png');
    if (pilihanComputer == 'orang') return gambarKomputer.setAttribute('src', 'img/orang.png');
    if (pilihanComputer == 'semut') return gambarKomputer.setAttribute('src', 'img/semut.png');

})

const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = 'orang';
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const info = document.querySelector('.info');
    info.innerHTML = hasil;

    const gambarKomputer = document.querySelector('.img-komputer')
    if (pilihanComputer == 'gajah') return gambarKomputer.setAttribute('src', 'img/gajah.png');
    if (pilihanComputer == 'orang') return gambarKomputer.setAttribute('src', 'img/orang.png');
    if (pilihanComputer == 'semut') return gambarKomputer.setAttribute('src', 'img/semut.png');

})

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = 'semut';
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const info = document.querySelector('.info');
    info.innerHTML = hasil;

    const gambarKomputer = document.querySelector('.img-komputer')
    if (pilihanComputer == 'gajah') return gambarKomputer.setAttribute('src', 'img/gajah.png');
    if (pilihanComputer == 'orang') return gambarKomputer.setAttribute('src', 'img/orang.png');
    if (pilihanComputer == 'semut') return gambarKomputer.setAttribute('src', 'img/semut.png');


})