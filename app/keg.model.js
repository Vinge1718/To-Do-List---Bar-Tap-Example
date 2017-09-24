"use strict";
var Keg = (function () {
    function Keg(name, brand, price, alcohol) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.alcohol = alcohol;
        this.pintsContained = 40;
    }
    return Keg;
}());
exports.Keg = Keg;
//# sourceMappingURL=keg.model.js.map