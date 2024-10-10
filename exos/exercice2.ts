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

//console.log(print_int(10));

/*b. Écrire une fonction sum_int qui prend un entier n et renvoie la somme de tous les entiers entre
1 et n inclus.*/

function sum_int(n:number):number{
    let res:number = 1
    for(let i = 0 ; i<n; i++){
        res = i+res
    }
    return res;
}

//console.log(sum_int(20));

/*c. Écrire une fonction mult_table qui prend un entier n et qui affiche sa table de multiplication*/
function mult_table(n:number):number{
    
    let count = 0
    for(let i = 1; i<11; i++){
        count = n*i
        console.log(count)
    }
    return count;
}

//console.log(mult_table(5));