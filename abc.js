let a=2;

console.log("hello",a);
var n=process.env.name;
var url=process.env.url;

var username=process.env.usernameVar;
var password=process.env.passwordVar;

if(username==="usernameReality") {
    console.log("Equal");  // They are equal so this line will print
  } else {
    console.log("Not equal");
  }

username=username+"a";

password=password+"a";
console.log("environment variable name",n);
console.log("environment variable url",url);


console.log("username is",username);
console.log("password is",password);

console.log("username is",process.env.ARR_USR);
if(process.env.ARR_USR==="usernameReal"){
    console.log("username is usernameReal");
}else{
    console.log("username is not usernameReal");
}

console.log("password is",process.env.ARR_PSW);
if(process.env.ARR_PSW==="passwordReal"){
    console.log("password is passwordReal");
}else{
    console.log("password is not passwordReal");
}
