function removeSpaces(_text){
    return _text.split(' ').join('')
}

function objToArray(_obj){
    let newArray = []
    for (let key in _obj){
        let datum = _obj[key]
        datum['key'] = key
        newArray.push(datum)
    }
    return newArray
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

var lineChartId = 'lineChart'
var lineChartCanvas = document.getElementById(lineChartId)
var lineChartWidth = lineChartCanvas.clientWidth
var lineChartHeight = lineChartCanvas.clientHeight
var lineChart = new LineChart(dataModel,lineChartCanvas,lineChartWidth,lineChartHeight)
dataModel.addObserver(lineChart)
lineChart.drawUpdate(dataModel)

function resizeLineChart(){
    // console.log('the matrix was resized')
    lineChart.resize(
        dataModel,
        document.getElementById(lineChartId).clientWidth,
        document.getElementById(lineChartId).clientHeight
    )
}

var suggestionListId = 'opportunitiesList'
var suggestionsContainer = document.getElementById(suggestionListId)
var suggestionListWidth = suggestionsContainer.clientWidth
var suggestionListHeight = suggestionsContainer.clientHeight
var suggestionList = new suggestingOpportunities(dataModel,suggestionsContainer,suggestionListWidth,suggestionListHeight)
dataModel.addObserver(suggestionList)
suggestionList.drawUpdate(dataModel)

function resizeSuggestions(){
    suggestionList.resize(
        dataModel,
        document.getElementById(suggestionListId).clientWidth,
        document.getElementById(suggestionListId).clientHeight
    )
}

var radarChartId = 'radarChart'
var radarChartContainer = document.getElementById(radarChartId)
var rcWidth = radarChartContainer.clientWidth
var rcHeight = radarChartContainer.clientHeight
var radarChart = new RadarChart(dataModel,radarChartContainer,rcWidth,rcHeight)
dataModel.addObserver(radarChart)
radarChart.drawUpdate(dataModel)


window.onresize = function(){
    resizeMatrix()
    resizeLineChart()
    resizeSuggestions()
}