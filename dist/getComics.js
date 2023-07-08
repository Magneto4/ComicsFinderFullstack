"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const cheerio = require("cheerio");
class Request {
}
async function getCharComics(char, type) {
    let comics = new Set();
    let URL = "https://marvel.fandom.com/wiki/Category:" + char.replace(/ /g, '_') + "/" + type;
    while (1) {
        console.log(URL);
        const html = await axios.get(URL)
            .catch((err) => {
            console.log("Missing data");
            return comics;
        });
        const $ = cheerio.load(html.data);
        const list = $("a.category-page__member-link");
        list.each(function (i, elem) {
            comics.add($(elem).text());
        });
        const next = $("div.category-page__pagination");
        if (next.length == 0)
            break;
        const nextButtons = $("div.category-page__pagination").find('a');
        var isNext = false;
        nextButtons.each(function (i, elem) {
            if ($(elem).text().includes("Next")) {
                URL = $(elem).attr('href');
                isNext = true;
            }
        });
        if (!isNext)
            break;
    }
    return comics;
}
async function splitAndGetComics(names, type) {
    var allSets = [];
    var set;
    var namesArray = names.split(",");
    for (var name of namesArray) {
        set = await getCharComics(name, type);
        if (set.size == 0) {
            return [];
        }
        allSets.push(set);
    }
    return (allSets);
}
function intersect(set1, set2) {
    set1.forEach(function (item) {
        if (!set2.has(item)) {
            set1.delete(item);
        }
    });
}
async function getComics(request) {
    var allSets = [];
    var sets = [];
    if (request.characters != "") {
        sets = await splitAndGetComics(request.characters, "Appearances");
        if (sets.length == 0) {
            return "Data missing";
        }
        allSets = allSets.concat(sets);
    }
    if (request.writers != "") {
        sets = await splitAndGetComics(request.writers, "Writer");
        if (sets.length == 0) {
            return "Data missing";
        }
        allSets = allSets.concat(sets);
    }
    if (request.pencilers != "") {
        sets = await splitAndGetComics(request.pencilers, "Penciler");
        if (sets.length == 0) {
            return "Data missing";
        }
        allSets = allSets.concat(sets);
    }
    if (request.inkers != "") {
        sets = await splitAndGetComics(request.inkers, "Inker");
        if (sets.length == 0) {
            return "Data missing";
        }
        allSets = allSets.concat(sets);
    }
    if (request.colorists != "") {
        sets = await splitAndGetComics(request.colorists, "Colorist");
        if (sets.length == 0) {
            return "Data missing";
        }
        allSets = allSets.concat(sets);
    }
    if (request.letterers != "") {
        sets = await splitAndGetComics(request.letterers, "Letterer");
        if (sets.length == 0) {
            return "Data missing";
        }
        allSets = allSets.concat(sets);
    }
    if (request.editors != "") {
        sets = await splitAndGetComics(request.editors, "Editor");
        if (sets.length == 0) {
            return "Data missing";
        }
        allSets = allSets.concat(sets);
    }
    if (allSets.length == 0)
        return ("");
    var finalSet = allSets[0];
    for (let i = 1; i < allSets.length; i++) {
        intersect(finalSet, allSets[i]);
    }
    var results = "";
    for (var comic of finalSet) {
        results += comic + ",";
    }
    results = results.slice(0, -1);
    return results;
}
exports.default = getComics;
//# sourceMappingURL=getComics.js.map