class Doktor {

    constructor(ime) {
        this.ime = ime;
        this.prezime = 'Prezime';
        this.specijalnost = 'dr';
        this.pacijenti = [];

        writeToFile('Kreiran doktor ' + this.ime);
    }

    zakaziPregled(pacijent, tipPregleda) {

        let pregled = new Pregled(tipPregleda);
        pacijent.pregledi.push(pregled);

        pregled.zakazan = true;

        return pregled;
    }
}

class Pacijent {

    constructor(ime) {
        this.ime = ime;
        this.prezime = 'Prezime';
        this.jmbg = 'jmbg';
        this.brojZdravstvenogKartona = 'BrojZdravstvenogKartona';
        this.doktor = {};
        this.pregledi = [];

        writeToFile('Kreiran pacijent ' + this.ime);
    }

    izaberiDoktora(doktor) {

        doktor.pacijenti.push(
            { ime: this.ime, prezime: this.prezime, jmbg: this.jmbg }
        );
        this.doktor = doktor;

        writeToFile(this.ime + ' bira doktora ' + doktor.ime);

    }

    obaviPregled(pregled) {

        if (this.pregledi.filter(p => p.tip === pregled.tip).length > 0 && pregled.tip === Tip.PRITISAK) {

            pregled.tip.donjaVrednost = Math.floor(Math.random() * 60) + 40;
            pregled.tip.gornjaVrednost = Math.floor(Math.random() * 80) + 80;
            pregled.tip.puls = Math.floor(Math.random() * 50) + 50;
            pregled.zakazan = false;
            pregled.obavljen = true;

            this.pregledi = this.pregledi.filter((p) => p !== pregled);

            writeToFile('Obavljen pregled ' + pregled.tip.naziv);

            console.log('rezultati: donja vrednost: ' +
                pregled.tip.donjaVrednost + ' gornja vrednost: ' + pregled.tip.gornjaVrednost + ' puls: ' + pregled.tip.puls);

            return pregled;
        }
        else if (this.pregledi.filter(p => p.tip === pregled.tip).length > 0 && pregled.tip === Tip.SECER) {

            pregled.tip.vrednost = Math.floor(Math.random() * 30) + 3;
            pregled.tip.vremePoslednjegObroka = new Date('09/05/2022 20:20:10').toTimeString();
            pregled.zakazan = false;
            pregled.obavljen = true;

            this.pregledi = this.pregledi.filter((p) => p !== pregled);

            writeToFile('Obavljen pregled ' + pregled.tip.naziv);

            console.log('rezultati: vreme poslednjeg obroka: ' +
                (pregled.tip.vremePoslednjegObroka) + ' vrednost ' + pregled.tip.vrednost);

            return pregled;
        }
        else if (this.pregledi.filter(p => p.tip === pregled.tip).length > 0 && pregled.tip === Tip.HOLESTEROL) {

            pregled.tip.vrednost = Math.floor(Math.random() * 20) + 2;
            pregled.tip.vremePoslednjegObroka = new Date('09/05/2022 20:20:10').toTimeString();
            pregled.zakazan = false;
            pregled.obavljen = true;

            this.pregledi = this.pregledi.filter((p) => p !== pregled);

            writeToFile('Obavljen pregled ' + pregled.tip.naziv);

            console.log('rezultati: vreme poslednjeg obroka ' +
                (pregled.tip.vremePoslednjegObroka) + ' vrednost: ' + pregled.tip.vrednost);

            return pregled;
        }
        else {

            console.log('nema zakazanog pregleda');
            return null;
        }

    }
}

class Pregled {

    constructor(tip) {

        if (tip || Tip.SECER || tip === Tip.HOLESTEROL || tip === Tip.PRITISAK) {
            this.tip = tip;
            this.datum = new Date();
            this.zakazan = false;
            this.obavljen = false;
        }
        else {
            console.log('ne postoji navedeni tip pregleda')
        }
    }
}

const Tip = Object.freeze({

    PRITISAK: { naziv: "Pritisak", gornjaVrednost: '', donjaVrednost: '', puls: '' },
    SECER: { naziv: "Secer", vrednost: '', vremePoslednjegObroka: '' },
    HOLESTEROL: { naziv: "Holesterol", vrednost: '', vremePoslednjegObroka: '' }

});

function formatDate(date) {

    var dateStr =

        ("00" + (date.getMonth() + 1)).slice(-2) + "." +
        ("00" + date.getDate()).slice(-2) + "." +
        date.getFullYear() + " " +
        ("00" + date.getHours()).slice(-2) + ":" +
        ("00" + date.getMinutes()).slice(-2);

    return '[' + dateStr + ']';
}

function writeToFile(text) {

    let content = formatDate(new Date()) + ' ' + text;
    console.log(content)

}

const doktor = new Doktor('Milan');

const pacijent = new Pacijent('Dragan');

pacijent.izaberiDoktora(doktor);

const zakazan1 = doktor.zakaziPregled(pacijent, Tip.SECER);

const zakazan2 = doktor.zakaziPregled(pacijent, Tip.PRITISAK);

const obavljen1 = pacijent.obaviPregled(zakazan1);

const obavljen2 = pacijent.obaviPregled(zakazan2);
