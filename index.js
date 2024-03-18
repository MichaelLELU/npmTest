const info = require('./information');


console.log(info);

const cowsay = require("cowsay");


console.log(cowsay.say({
    text : `hello, i am ${info.name} from ${info.campus} !`,
    e : "OX",
    T : "V "
}));

