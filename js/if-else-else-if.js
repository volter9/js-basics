var isUserRegistered = true,
    isUserAdmin = true;

if (isUserRegistered && isUserAdmin) {
    console.log('Добро пожаловать, админ! Панель управления:\n1. ...');
}
else if (isUserRegistered) {
    console.log('Привет, user!');
}
else {
    console.log('Привет!');
}
