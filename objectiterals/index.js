let usr = {
    name: "Majdi Mouhssine",
    email : "majdimouhssine7@gmail.com",
    age: 32,
    isOnline : false,
    login: function(){
        return  `Login ${this.email}`;
    },

    logOut: function(){
        return "Logout"
    }
};

console.log(usr.login("majdi"))

/*
console.log(usr.name);
usr.isOnline = true;
console.log(usr.isOnline);
*/

