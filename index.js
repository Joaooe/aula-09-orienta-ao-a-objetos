"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var survivor_1 = require("./survivor");
var newsurvivor = new survivor_1.survivor();
console.log(newsurvivor.getlevel());
newsurvivor.levelUp();
console.log(newsurvivor.getlevel());
