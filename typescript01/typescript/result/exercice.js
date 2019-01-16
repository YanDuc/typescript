"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_eleve_1 = require("./class_eleve");
var nombre_a = 1;
var nombre_b = 2;
var prenom = 'jeanmi';
var age = 42;
var listePrenoms = ['Roger', 'Momo', 'Paule', 'Toto'];
function hello(prenom, age) {
    return "Bonjour, je m'appellle " + prenom + " et j'ai " + age + " ans";
}
function hello_friends(listePrenoms) {
    for (var _i = 0, listePrenoms_1 = listePrenoms; _i < listePrenoms_1.length; _i++) {
        var prenom_1 = listePrenoms_1[_i];
        //console.log(prenom);
    }
}
hello_friends(listePrenoms);
var adresseu = {
    rue: 'stalingrad',
    cp: 31000,
    ville: 'Toulouse',
};
function afficheAdresse(adresseu) {
    //console.log(`J'habite à cette adresse : ${adresseu.rue} ${adresseu.cp} ${adresseu.ville}`)
}
afficheAdresse(adresseu);
var NS_Lang;
(function (NS_Lang) {
    var languages = /** @class */ (function () {
        function languages() {
        }
        languages.prototype.list = function () {
            return ['anglais', 'espagnol', 'belge'];
        };
        return languages;
    }());
    NS_Lang.languages = languages;
})(NS_Lang = exports.NS_Lang || (exports.NS_Lang = {}));
var monAdresse = {};
monAdresse.rue = 'stalingrad';
monAdresse.cp = 31000;
monAdresse.ville = 'Toulouse';
var eleve = new class_eleve_1.Eleve('jeanmi', 12, monAdresse, [15, 20, 30]);
console.log(eleve.notes());
console.log(eleve.eleve_info());
console.log('moyenne ' + eleve.calc_moyenne());
console.log('liste des notes ' + eleve.notes());
console.log(eleve.listeLangues());
