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

/*d. Écrire une fonction factorial qui prend un entier n et renvoie sa factorielle tel que
n! = n * n-1* n-2 * ... * 2*/

function factorial(n:number):number{
    let res:number = 1
    for(let i = 0; i<n; i++){
        res = res *(i+1)
    }
    return res;
}

//console.log(factorial(10));

function pow(x:number, n:number):number{
    let res:number = 1;

    for(let i = 0; i<n; i++){
        res = res * x
    }
    return res;
}
//console.log(pow(2,2));

function sum_even(n:number):number{
    let res:number = 0;

    for(let i = 0; i<n; i++){
        if ((i+1)%2 == 0){
            res = res + (i+1)
        }
    }
    return res;
}

//console.log(sum_even(10))

function sum_arr (a:number[]):number{
    let res:number = 0

    for(let i = 0; i<a.length; i++){
        res = a[i] + res
    }
    return res
}

//console.log(sum_arr([10,5,2,6]))

function isPrime(n:number):boolean{
    for(let i = 2; i<n; i++){
        if (n%i == 0){
            return false
        }
    }
    return true
}

//console.log(isPrime(12))

function pgcd(x:number, y:number):number{
    let res:number = 0
    let min = Math.min(x,y)
    for(let i = 1;i<min; i++){
        if (x%i == 0 && y%i == 0){
            res = i
        }
    }
    return res;
}

//console.log(PGCD(32,24));

function is_perfect(n:number):boolean{
    let res:number = 0
    for(let i = 1; i<n; i++){
        if (n%i == 0){
            res = res+i
        }
    }
    if(res == n){
        return true
    }
    else{
        return false
    }
}

console.log(is_perfect(28));