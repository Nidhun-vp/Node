concat=function(x,y){
    return x+y;
}
lower=function(x,y){
    x=x.toLowerCase();
    y=y.toLowerCase();
    return x+y
}
upper=function(x,y){
    x=x.toUpperCase();
    y=y.toUpperCase()
    return x+y
}
reverse=function(x,y){
    x=x.split('').reverse().join('');
    y=y.split('').reverse().join('')
    return x+y
}

module.exports.concat=concat;
module.exports.lower=lower;
module.exports.upper=upper;
module.exports.reverse=reverse;

//call this in Stringoperations.js