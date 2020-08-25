function removeSpaces(_text){
    return _text.split(' ').join('')
}

const dataModel = new MatrixAndPrecedentsDataModel(dataIn,'matrix','developments','This Project')

var matrixId = 'matrixCanvas'
var matrixCanvas = document.getElementById(matrixId)
var matrixWidth = matrixCanvas.clientWidth
var matrixHeight = matrixCanvas.clientHeight
var interactiveMatrix = new DataEntryMatrix(dataModel,matrixCanvas,matrixWidth,matrixHeight);
dataModel.addObserver(interactiveMatrix)
interactiveMatrix.drawUpdate(dataModel)

function resizeMatrix(){
    // console.log('the matrix was resized')
    interactiveMatrix.resize(
        dataModel,
        document.getElementById(matrixId).clientWidth,
        document.getElementById(matrixId).clientHeight
    )
}

window.onresize = function(){
    resizeMatrix()
}

