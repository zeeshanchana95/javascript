//Objects

const band = {
    vocals : "Robert Plant",
    guitar : "Jimmy Page",
    bass   : "John Paul Jones",
    drums  : "John Bonham"
};

//destructuring objects: 

function sings({vocals}) { return `${vocals} sings!`; }

console.log(sings(band)); //Robert Plant sings!
