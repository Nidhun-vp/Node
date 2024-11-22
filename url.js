var url=require('url');
var adr='https://www.google.com/search?q=oneteam+solutions&rlz=1C1CHBD_en-GBIN1027IN1027&oq=one&gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTIMCAAQRRg5GLEDGIAEMgwIARAjGCcYgAQYigUyCggCEAAYsQMYgAQyCggDEAAYsQMYgAQyDQgEEC4Y1AIYsQMYgAQyDQgFEC4Y1AIYsQMYgAQyDQgGEC4Y1AIYsQMYgAQyDQgHEAAYgwEYsQMYgAQyCggIEAAYsQMYgAQyDQgJEAAYsQMYgAQYigXSAQkzNDk1ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8';
var q=url.parse(adr,true);

console.log(q.host);//returns hostname

console.log(q.pathname); //return index.html
console.log(q.search);

var qdata=q.query;
console.log(qdata.sourceid);//