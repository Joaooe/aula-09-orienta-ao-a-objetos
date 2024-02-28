"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.survivor = void 0;
var survivor = /** @class */ (function () {
    function survivor() {
    }
    survivor.prototype.getlevel = function () {
        return this.level;
    };
    survivor.prototype.levelUp = function () {
        this.level++;
    };
    return survivor;
}());
exports.survivor = survivor;
