interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

// The "in" keyword, very important 
function isAdmin(account: User | Admin) {
    if ('isAdmin' in account) {
        return account.isAdmin
    }
}