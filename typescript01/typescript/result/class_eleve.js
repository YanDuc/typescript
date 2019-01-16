"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exercice_1 = require("./exercice");
var Eleve = /** @class */ (function () {
    function Eleve(prenom, age, adresse, note) {
        this._note = [];
        this.languageList = new exercice_1.NS_Lang.languages();
        this.prenom = prenom;
        this.age = age;
        this.adresse = adresse;
        this.note = note;
    }
    Eleve.prototype.listeLangues = function () {
        return this.languageList.list();
    };
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
        /**
         * [note description]
         * @param  noteList [description]
         * @return          [description]
         */
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
    /**
     * [calc_moyenne calcul de la moyenne]
     * @return [description]
     */
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
exports.Eleve = Eleve;
