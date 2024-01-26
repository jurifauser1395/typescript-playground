"use strict";
// The "in" keyword, very important 
function isAdmin(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
