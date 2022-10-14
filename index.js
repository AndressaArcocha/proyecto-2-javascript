const useradmin = {
    email : 'admin@admin.com',
    password : 'admin',
    role : 'admin'
}
const users = [ ];

users.push(useradmin);
localStorage.setItem('users', JSON.stringify(users));
