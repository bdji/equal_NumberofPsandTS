////Write a JavaScript program to check whether a given string contains equal number of p's and t's

function equal_pt (str) {
    let strP = str.replace(/[^p]/g,""); //replace all other words but p with emptiness
    let strT = str.replace(/[^t]/g,""); //replace all other words but t with emptiness

    let P_sum = strP.length;
    let T_sum = strT.length;

    return P_sum === T_sum;// check whether the number of P's is equal to the number of T's

    

}
