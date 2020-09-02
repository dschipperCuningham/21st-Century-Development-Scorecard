//////////////////////////////////////////////////////////////////////////////////////
"///////THE CLASS DEFINED BY THIS SCRIPT IS USED TO GENERATE THE 21CD MATRIX WHICH IS USED TO ENTER DATA////////"
//////////////////////////////////////////////////////////////////////////////////////

class LineChart{
    constructor(_model,_div,_width,_height){
        //////////////////////////////////////////////////////////////////////////////////////
        "///////ADDING THE INITIAL PARAMETERS BASED ON USER INPUT////////"
        //////////////////////////////////////////////////////////////////////////////////////
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;
        this.container = _div;

        



        //////////////////////////////////////////////////////////////////////////////////////
        "///////COLLECTING DATA FROM MODEL AND SHAPING IT IF NECESSARY////////"
        //////////////////////////////////////////////////////////////////////////////////////

        this.precedentProjects = _model.precedentData
        console.log('precedent project data')
        console.log(this.precedentProjects)

        this.categoriesData = _model.categoryData
        console.log('categories data')
        console.log(this.categoriesData)
        
        this.matrixData = _model.matrixData
        

        this.projectName = _model.projectName
        console.log('project name')
        console.log(this.projectName)
        
        this.structuredData = this.structureData(this.precedentProjects)
        console.log('structured data')
        console.log(this.structuredData)

        this.svg = d3.select(this.container).append('svg')
            .attr('id','lineChartSvg')
            .attr('class','lineChartClass')
            .attr('width',this.width)
            .attr('height',this.height)
        
        this.linesGroup = this.svg.append('g').attr('id','lineChartGraphics')
        this.xAxis = this.svg.append('g').attr('id','lineChartXAxis')
        this.xAxisText = this.svg.append('g').attr('id','lineChartXAxisText')
        this.yAxis = this.svg.append('g').attr('id','lineChartYAxis')
        this.yAxisText = this.svg.append('g').attr('id','lineChartYAxisText')
        
        //////////////////////////////////////////////////////////////////////////////////////
        "///////GRAPHICS CONTROLS////////"
        //////////////////////////////////////////////////////////////////////////////////////


        this.yBorder = 20
        this.yOffset = 30
        this.yMultiplier = (this.height - this.yBorder * 2 - this.yOffset) / 4

        this.xBorder = 20
        this.xOffset = 50
        this.xMultiplier = (this.width -this.xBorder * 2 - this.xOffset) / (this.matrixData.length - 1)
        for (let index in this.matrixData){
            let datum = this.matrixData[index]
            datum['x'] = index * this.xMultiplier + this.xBorder + this.xOffset
        }
        console.log('matrix data')
        console.log(_model.matrixData)

        return
    }

    structureData(_data){
        let structuredData = []
        for (let key in _data){
            let datum = _data[key]
            structuredData.push(datum)
        }
        return structuredData
    }

    resize(_model,_width,_height){
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;
        this.svg
            .attr('width',this.width)
            .attr('height',this.height)
        this.drawUpdate(_model);
        return
    }

    updateData(_model){
        var updatedData = this.structureData(_model.precedentData)
        this.structuredData = updatedData
        this.drawUpdate(_model)
    }

    drawUpdate(_model){
        //////////////////////////////////////////////////////////////////////////////////////
        "///////THIS FUNCTION DOES THE HEAVY LIFTING FOR CREATING AND UPDATING GRAPHICS////////"
        "///////IT IS DESIGNED TO BE RUN WITHOUT RECREATING ELEMENTS, OPTING INSTEAD TO UPDATE THOSE THAT EXIST////////"
        "///////TO ACHIEVE THIS INTERACTION THE COMPLETE D3 GENERAL UPDATE PATTERN IS USED IN ANY ELEMENT CREATION////////"
        "///////USING THE FULL PATTERN GARAUNTEES STABILITY WHEN THE FUNCTION RUNS MULTIPLE TIMES////////"
        //////////////////////////////////////////////////////////////////////////////////////

        '///////LOCALIZING CLASS VARIABLES AND DOING SOME LIGHT DATA SHAPING////////'
        var _thisClass = this
        var _data = this.structuredData
        var _projectName = this.projectName
        var _precedentProjects = this.precedentProjects
        var _categoriesData = this.categoriesData
        var _matrixData = this.matrixData

        var _height = this.height
        var _width = this.width
        var _centerX = this.centerX
        var _centerY = this.centerY

        let yBorder = this.yBorder
        let yOffset = this.yOffset
        let yMult = this.yMultiplier

        let xBorder = this.xBorder
        let xOffset = this.xOffset


        var _div = d3.select(this.container)
        var _linesGroup = this.linesGroup
        var _xAxis = this.xAxis
        var _xAxisText = this.xAxisText
        var _yAxis = this.yAxis
        var _yAxisText = this.yAxisText

        ////////D3 COMPLETE GENERAL UPDATE PATTERN///////// 
        '///////CONTAINERS TO SEPARATE HEADERS FROM MATRIX////////'

        console.log('updated line chart')
        let updateLines = _linesGroup.selectAll('.chartLine').data(_data)
        let enterLines = updateLines.enter().append('path').attr('class','chartLine')
        let exitLines = updateLines.exit()
        let mergeLines = enterLines.merge(updateLines)
            .style('stroke',function(d){
                if (d['name'] == _projectName){
                    return '#fbec40'
                } else {
                    return 'gray'
                }
            })
            .attr('d',function(d){
                let coords = []
                for (let datum of _matrixData){
                    console.log(d)
                    console.log(datum)
                    let coord = []
                    coord.push(datum['x'])
                    if (datum['tag'] in d['scores']){
                        var scoreVal = d['scores'][datum['tag']]['value']
                    } else {
                        var scoreVal = 0
                    }
                    coord.push((scoreVal * yMult) + yOffset + yBorder)
                    coords.push(coord)
                }
                coords.push([
                    _width -  xBorder,
                    yBorder + yOffset
                ])
                coords.push([
                    xBorder + xOffset,
                    yBorder + yOffset
                ])
                let _line = d3.line().curve(d3.curveMonotoneX)(coords)
                return _line
            })
            .style('fill-opacity',function(d){ return 0.2})
            .style('fill',function(d){
                if (d['name'] == _projectName){
                    return '#fbec40'
                } else {
                    return 'gray'
                }
            })

        let updateLinePtGroups = _linesGroup.selectAll('.circleGroup').data(_data)
        let enterLinePtGroups = updateLinePtGroups.enter().append('g').attr('class','circleGroup')
        let exitLinePtGroups = updateLinePtGroups.exit().remove()
        let mergeLinePtGroups = enterLinePtGroups.merge(updateLinePtGroups)

        let updateLinePts = mergeLinePtGroups.selectAll('.linePt').data(function(d){
            return objToArray(d['scores'])
        })
        let enterLinePts = updateLinePts.enter().append('circle').attr('class','linePt')
        let exitLinePts = updateLinePts.exit().remove()
        let mergeLinePts = enterLinePts.merge(updateLinePts)
            .attr('cx',function(d,i){
                for (let datum of _matrixData){
                    if (datum['tag'] == d['key']){
                        return datum['x']
                    }
                }
                return _matrixData
            })
            .attr('cy',function(d){
                return (d['value'] * yMult) + yOffset + yBorder
            })
            .attr('r',3)
    }
}