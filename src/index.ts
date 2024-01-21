// interfaces

interface User {
    readonly dbid: number,
    email: string,
    user: number,
    googleId?: string
    
    //defining a method within an interface
    startTrail(v: number, a: string): number

}

const jf: User = {dbid: 4, email: 'f@n', user: 3,
startTrail: (user: 4, googleId: 'v') => 4
}

interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

const jfAdmin: Admin = {
    dbid: 45, email: 'vre@', user: 4, 
    startTrail: (v: 3, a: '344') => 5,
    role: 'admin'
}