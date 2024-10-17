/*a. Écrire une fonction h_triangle qui prend en entrée un entier h et qui renvoie un unique string
symbolisant un triangle de hauteur h à l’aide de caractère ascii, par exemple des *. */

function h_triangle(h:number):string{
    let res:string = ""
    let stars = "*";
    
    for(let i = 0; i<h; i++){
        res = res+stars+'\n'
        stars = stars+"*"
    }
    return res;
}

/*b. Écrire une fonction rectangle qui prend deux entiers n et m et qui renvoie un unique string
symbolisant un rectangle n*m.*/

function rectangle(n:number,m:number):string{
    let res:string = ""
    let stars:string = "*";
    for(let i = 0; i<m; i++){
        for(let i = 0; i<n; i++){
            res = res+stars;
        }
        if(i != m-1){
            res = res+"\n"
        }
    }
    return res;
}

//console.log(rectangle(3,2))


/*c. Écrire une fonction reverse_ints qui prend un entier n et qui renvoie un string faisant le
décompte inverse des entiers compris entre 1 et n inclus.*/

function reverse_ints(n:number):string{
    let res = "";
    let compt = n;
    for(let i = 0; i<n; i++){
        res = res+compt  
        compt = compt-1
    }
    return res;
}
console.log(reverse_ints(5))

