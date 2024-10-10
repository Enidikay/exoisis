//a. Écrire une fonction hello qui renvoie un string “Hello World!”

function hello(h:string):string{
    h = "Hello World";
    return h;
}

console.log(hello("oui"));

//b. Écrire une fonction add qui prend deux entiers a et b et renvoie leur somme.

function add(a:number, b:number):number{
    let count = a+b;
    return count;
}

console.log(add(5,3));

//c. Écrire une fonction mult qui prend deux entiers a et b et renvoie leur multiplication.

function mult(a:number, b:number):number{
    let count = a*b;
    return count;
}

console.log(mult(5,3));

//d. Écrire une fonction max_nb qui prend deux entiers a et b et renvoie le plus grand des deux.

function max_nb(a:number, b:number):number{
    if (a>b) {
        return a;
    }
    else{
        return b;
    }
}

console.log(max_nb(10,5));

//e. Écrire une fonction min_nb qui prend deux entiers a et b et renvoie le plus petit des deux
function min_nb(a:number, b:number):number{
    if (a<b) {
        return a;
    }
    else{
        return b;
    }
}

console.log(min_nb(10,5));

//f. Écrire une fonction is_even qui prend un entier et renvoie true s’il est pair, false sinon.

function is_even(a:number):boolean{
    if (a%2 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(is_even(11));

/*g. Écrire une fonction is_div qui prend deux entiers a et b et qui renvoie true si b est un diviseur
de a, false sinon.*/

function is_div(a:number, b:number):boolean{
    if(a%b == 0){
        return true
    }
    else{
        return false
    }
}

console.log(is_div(10,7));

/*h. Écrire une fonction is_leap qui prend en entrée un entier year et qui renvoie true s’il s’agit
d’une année bissextile, false sinon.*/

function is_leap(year:number):boolean{
    if (year%4 == 0){
        if (year%100 != 0){
            if (year%400 != 0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

console.log(is_leap(2020));


/*i. Écrire une fonction delta qui prend trois coefficients a, b et c et qui calcul le coefficient delta
du polynôme ax²+bx+c tel que delta = b² - 4ac.*/

function delta(a:number, b:number, c:number):number{
    let calcul = Math.pow(b,2) - (4+a)*c;
    return calcul;
}

console.log(delta(5,10,3));

/*j. Écrire une fonction root qui prend trois coefficients a, b et c et qui, en utilisant la fonction
delta détermine s’il existe une racine au polynôme associé.*/

function root (a:number, b:number, c:number):number[]{
    let del:number = delta(a,b,c);
    let tab:number[] = [];
    
    if (del < 0){
        tab = []
    }
    if (del == 0){
        tab = [-b/2+a]
    }
    if (del > 0){
        tab = [-b-Math.sqrt(del)/2+a , -b+Math.sqrt(del)/2+a]
    }

    return tab;
}
console.log(root(10,2,5))
