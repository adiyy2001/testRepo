// function solution(N) {
//     let binStr = [];
//     do {
//         // check if N is even or odd number
//         if (N % 2 === 0) binStr.push(0);
//         else binStr.push(1);
//         //  divide N by 2
//         N = Math.floor(N / 2);
//     } while (N >= 1);

//     // reverse string to get binary representation
//     const revStr = binStr.reverse();
//     console.log(revStr)
//     // check gap
//     let firstGap = 0;
//     let anotherGap = 0;
//     for (let i = 0; i < revStr.length; i++) {
//         if (revStr[i] == 0) firstGap++;
//         else if (revStr.indexOf(0) != -1) {
//             if (anotherGap < firstGap) anotherGap = firstGap;
//             firstGap = 0;
//         }
//     }
//     console.log(anotherGap)
// }

// for(let i = 0; i <= 647; i++){
//     solution(i);
// }


// function solution(A, K) {
//     for (let i = 0; i <= K; i++) {
//         let elem = A.splice(A.length - 1, 1);
//         A.unshift(...elem);
//     }
//     return A
// }

// // solution([3, 8, 9, 7, 6], 3);
// function solution(X, Y, D) {
//     // let sum = 0;
//     // if(X == Y)return sum = 0;
//     // do {
//     //     X += D;
//     //     sum++;
//     // } while (X < Y);
//     // X+= - (X - Y);
//     let diffr = Math.ceil((Y - X) / D);
//     // console.log(diffr);
//     // if((( (Y - X) / D) % 2  !== 0)  && (D * diffr < Y)) {
//     //     return diffr + 1;
//     // }
//     return diffr;
// }

// no repeated
const A = [2, 2, 3, 3, 8, 4, 5, 5, 6, 6, 7, 7]
function solution(A) {
    // const sorted = A.sort();
    // // loop through to find duplicate
    // for (let i = 0; i < sorted.length; i++) {
    //     if (sorted[i] !== sorted[i + 1]) console.log(sorted[i]);
    // }
    let unique_array = new Set(A);
    unique_array.forEach(elem => {
        for (let i = 0; i < A.length; i++) {
            let exist = 0;
            if(elem == A[i]) {
                exist++;
            }
        }
        if(exist > 1) {
        }
    })
}
solution(A);



