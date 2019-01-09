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
var Eleve = /** @class */ (function () {
    function Eleve(prenom, age, adresse, note) {
        this._note = [];
        this._prenom = prenom;
        this._age = age;
        this._adresse = adresse;
        this.note = note;
    }
    Object.defineProperty(Eleve.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        set: function (prenom) {
            this._prenom = prenom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "adresse", {
        get: function () {
            return this._adresse;
        },
        set: function (adresse) {
            this._adresse = adresse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "note", {
        get: function () {
            return this._note;
        },
        set: function (noteList) {
            for (var _i = 0, noteList_1 = noteList; _i < noteList_1.length; _i++) {
                var note = noteList_1[_i];
                if (note >= 0 && note <= 20) {
                    this._note.push(note);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Eleve.prototype.eleve_info = function () {
        return "Eleve " + this._prenom + " ag\u00E9 de " + this._age + " ans habite au " + this._adresse.rue + " " + this._adresse.cp + " " + this._adresse.ville + ".";
    };
    Eleve.prototype.calc_moyenne = function () {
        var nbNote = this._note.length;
        var sumNote = 0;
        for (var _i = 0, _a = this._note; _i < _a.length; _i++) {
            var note = _a[_i];
            sumNote += note;
        }
        return sumNote / nbNote;
    };
    Eleve.prototype.notes = function () {
        var listeDesNotes = '';
        for (var _i = 0, _a = this._note; _i < _a.length; _i++) {
            var note = _a[_i];
            listeDesNotes += note + ', ';
        }
        return listeDesNotes;
    };
    return Eleve;
}());
var monAdresse = {};
monAdresse.rue = 'stalingrad';
monAdresse.cp = 31000;
monAdresse.ville = 'Toulouse';
var eleve = new Eleve('jeanmi', 12, monAdresse, [15, 20, 30]);
//console.log(eleve.notes());
console.log(eleve.eleve_info());
//console.log('moyenne ' + eleve.calc_moyenne());
//console.log('liste des notes ' + eleve.notes());
var NS_Lang;
(function (NS_Lang) {
    var languages = /** @class */ (function () {
        function languages(languages) {
            this.languages = languages;
        }
        Object.defineProperty(languages.prototype, "languages", {
            get: function () {
                return this._languages;
            },
            set: function (language) {
                this._languages = language;
            },
            enumerable: true,
            configurable: true
        });
        languages.prototype.list = function () {
            return this._languages;
        };
        return languages;
    }());
})(NS_Lang || (NS_Lang = {}));
