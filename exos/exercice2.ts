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

/*d. Écrire une fonction factorial qui prend un entier n et renvoie sa factorielle tel que
n! = n * n-1* n-2 * ... * 2.*/

function pow(x:number, n:number):number{
    let res:number = 1;

    for(let i = 0; i<n; i++){
        res = res * x
    }
    return res;
}
//console.log(pow(2,2));

/*e. Écrire une fonction power qui prend deux entiers x et n et renvoie x^n */

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

/*f. Écrire une fonction sum_even qui prend un entier n et renvoie la somme de tous les entiers
pairs compris entre 1 et n.*/

function sum_arr (a:number[]):number{
    let res:number = 0

    for(let i = 0; i<a.length; i++){
        res = a[i] + res
    }
    return res
}

//console.log(sum_arr([10,5,2,6]))

/*g. Un nombre premier est un nombre qui n’a pour unique diviseurs 1 et lui-même. Ainsi 13 est un
nombre premier puisqu’il n’existe aucun nombre qui ne soit ni 1 ni 13 qui le divise.
Écrire une fonction is_prime qui prend un entier n et renvoie true s’il est premier, false sinon.*/

function isPrime(n:number):boolean{
    for(let i = 2; i<n; i++){
        if (n%i == 0){
            return false
        }
    }
    return true
}

//console.log(isPrime(12))

/*h. Le PGCD est le Plus Grand Diviseur Commun entre deux nombres. Par exemple 24 et 32 ont
comme PGCD 8, puisqu’il s’agit du plus grand nombre qui divise les deux.
Écrire une fonction pgcd qui prend deux entiers a et b et qui renvoie leur PGCD.*/

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

/*i. Un nombre parfait est un nombre dont la somme de tous ses diviseurs autres que lui-même
est égale au nombre en question. Par exemple, 6 est un nombre parfait parce que la somme
de ses diviseurs 1+2+3 est égale à 6. De même, 28 est parfait puisque 1+2+4+7+14=28.
Écrire une fonction is_perfect qui prend un entier n et renvoie true s’il est parfait, false sinon.*/

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