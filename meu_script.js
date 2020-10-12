var a = 10;
var b = 20;
var c = null;

c = a;
a = b;
a = c;
c = "<br />";

document.write(a + c);
document.write(b + c);
         