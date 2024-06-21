const user = {
    username:'abhi',
    login: 8,
    signed: true,

    getUser : function()
    {
        console.log(`username: ${this.username}`);
    }
}

console.log(user.getUser());

function userr(username, loginCount, isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const suerOne = userr('abhigyan', 22, true)
console.log(suerOne);