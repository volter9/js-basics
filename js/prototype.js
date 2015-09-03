var User = function (username, password) {
    this.username = username;
    this.password = password;
};

User.prototype.info = function () {
    return "Пользователь " 
        + this.username 
        + " с паролем " 
        + this.password;
};

var Admin = function (username, password, priveleges) {
    User.call(this, username, password);
    
    this.priveleges = priveleges;
};

Admin.prototype = Object.create(User.prototype);

Admin.prototype.info = function () {
    return User.prototype.info.call(this) 
        + " с данными привелегиями " 
        + this.priveleges.join(', ');
};

var admin = new Admin('admin', '123456', ['read', 'write']);

console.log(admin, admin.info());

/*

admin.info();
  |
  | X --- | X --- |
  |       |       |
Admin > Users > Object

*/