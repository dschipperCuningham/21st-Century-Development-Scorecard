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

var responsiveLayout = new ResponsiveLayout(
        window.innerWidth,
        window.innerHeight,
        '#matrixCanvas',
        '#dataVizCanvas'
    )

function layoutRespond(){
    responsiveLayout.resize(
        window.innerWidth,
        window.innerHeight
    )
}

//the data model uses an observer pattern to notify the charts and graphs when changes to the data have been made
//the charts and graphs create event listeners that update the data in the model and notify observers on certain interactions
const dataModel = new MatrixAndPrecedentsDataModel(dataIn,'matrix','developments','This Project')

//the matrix is the primary data entry tool that a user can manipulate to alter their project's attributes
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


//the line chart is a representation that allows users to see their project in direct relationship with
//each of the precedent projects overlaid on top of one another
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

//the opportunities list is a secondary way of selecting additional attributes
//this may be redundant and may be removed or deactivated
// var suggestionListId = 'opportunitiesList'
// var suggestionsContainer = document.getElementById(suggestionListId)
// var suggestionListWidth = suggestionsContainer.clientWidth
// var suggestionListHeight = suggestionsContainer.clientHeight
// var suggestionList = new suggestingOpportunities(dataModel,suggestionsContainer,suggestionListWidth,suggestionListHeight)
// dataModel.addObserver(suggestionList)
// suggestionList.drawUpdate(dataModel)

// function resizeSuggestions(){
//     suggestionList.resize(
//         dataModel,
//         document.getElementById(suggestionListId).clientWidth,
//         document.getElementById(suggestionListId).clientHeight
//     )
// }

//the radar chart allows users to compare their project to averages in the overall categories
//of the matrix.  This allows a simplified and more digestible metric than the line chart
var radarChartId = 'radarChart'
var radarChartContainer = document.getElementById(radarChartId)
var rcWidth = radarChartContainer.clientWidth
var rcHeight = radarChartContainer.clientHeight
var radarChart = new RadarChart(dataModel,radarChartContainer,rcWidth,rcHeight)
dataModel.addObserver(radarChart)
radarChart.drawUpdate(dataModel)

function resizeRadarChart(){
    radarChart.resize(
        dataModel,
        document.getElementById(radarChartId).clientWidth,
        document.getElementById(radarChartId).clientHeight
    )
}


window.onresize = function(){
    layoutRespond()
    resizeMatrix()
    resizeLineChart()
    // resizeSuggestions()
    resizeRadarChart()
    
}