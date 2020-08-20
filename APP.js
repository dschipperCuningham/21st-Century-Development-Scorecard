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