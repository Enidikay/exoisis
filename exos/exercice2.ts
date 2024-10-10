//a. Écrire une fonction print_int qui prend un entier n et affiche tous les entiers entre 1 et n inclus.

function print_int(n:number):number{
    let res:number = 1
    let count = 0
    for(let i = 0; i<n; i++){
        count = i+res
        console.log(count)
    }
    return count;
}

console.log(print_int(10));