let a=2;

console.log("hello",a);
var n=process.env.name;
var url=process.env.url;

var username=process.env.usernameVar;
var password=process.env.passwordVar;

username=username+"a";
password=password+"a";
console.log("environment variable name",n);
console.log("environment variable url",url);


console.log("username is",username);
console.log("password is",password);