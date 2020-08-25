function removeSpaces(_text){
    return _text.split(' ').join('')
}


var matrixData = dataIn['matrix']
var precedentData = dataIn['developments']

var matrixId = 'matrixCanvas'
var matrixCanvas = document.getElementById(matrixId)
var matrixWidth = matrixCanvas.clientWidth
var matrixHeight = matrixCanvas.clientHeight
var interactiveMatrix = new DataEntryMatrix(matrixData,matrixCanvas,matrixWidth,matrixHeight);
interactiveMatrix.drawUpdate()

function resizeMatrix(){
    // console.log('the matrix was resized')
    interactiveMatrix.resize(
        document.getElementById(matrixId).clientWidth,
        document.getElementById(matrixId).clientHeight
    )
}

window.onresize = function(){
    resizeMatrix()
}

const config = { attributes: true, childList: true, subtree: true }

const callback = function(mutationsList, observer) {
    for (let mutation of mutationsList){
        if (mutation.type === 'childList'){
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes'){
            console.log('The ' + mutation.attributeName + ' attribute was modified');
        }
    }
};

const observer = new MutationObserver(callback)

observer.observe(matrixCanvas, config)

