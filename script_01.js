"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Zeilen-Kommentar

// Konsole-Ausgaben
// console.log("Was geht");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung *****/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log(familyName); // Ausgabe
// console.log(firstName + " " + familyName); // Ausgabe

/***** 03 Deklaration + Wertzuweisung II *****/
// Javascript ist eine untypisierte Sprache, wir können hier ohne Probleme Datentypen austauschen

// let firstName,familyName;
// firstName =prompt("Bitte Vornamen eingeben")
// familyName =prompt("Bitte Nachnamen eingeben") // any = untypisierte Sprache, hier kann nachträglich jeglicher Datentypen reingeladen werden
// console.log(firstName + " " + familyName); // Ausgabe


// JS ist eine untypisierte Sprache|untyped|
// wir können hier ohne Probleme Datentypen austauschen

// let test;
// test = "Wazup";
// test = 2; // das 1.test wurde mit dem 2. überschrieben 
// test = true;


// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);


/***** 03a Konstanten *****/

// const test = "Du schon wieder"; //Variable mit KONSTANTEM inhalt
// test = "Wazup"; // Keine neue Zuweisung zur LZ möglich!-> Fehler
// console.log( test);

/***** 04 Beispiel *****/

// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

let date = new Date(); // Date = Klasse (grossgeschrieben)
let year = new Date().getFullYear();
console.log(year);

//Wertzuweisung
ageJohn = 25;
ageMark = 30;

// Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

// Ausgabe
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearMark: " + birthYearMark);
