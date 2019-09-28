function sumMatrixVar(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

function sumMatrixLet(matrix: number[][]) {
    var sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}


function captureVar() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () { console.log(`i in CaptureVar=${i}`); }, 100 * i);
    }
}
// let declarations have drastically different behavior when declared 
//  as part of a loop. 
// Rather than just introducing a new environment to the loop itself, 
//  these declarations sort of **create a new scope per iteration**. 
function captureLet() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () { console.log(`i in CaptureLet=${i}`); }, 100 * i);
    }
}

// ans = 6 (incorrect)
console.log(`sumMatrixVar= ${sumMatrixVar([[1, 2, 3], [4, 5, 6]])}`);


// ans = 21 (correct)
console.log(`sumMatrixLet= ${sumMatrixLet([[1, 2, 3], [4, 5, 6]])}`);

captureVar();
captureLet();