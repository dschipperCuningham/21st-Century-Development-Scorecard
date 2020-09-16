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
        // console.log('precedent project data')
        // console.log(this.precedentProjects)

        this.categoriesData = _model.categoryData
        // console.log('categories data')
        // console.log(this.categoriesData)
        
        this.matrixData = _model.matrixData
        

        this.projectName = _model.projectName
        // console.log('project name')
        // console.log(this.projectName)
        
        this.structuredData = this.structureData(this.precedentProjects)
        // console.log('structured data')
        // console.log(this.structuredData)

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
        this.notes = this.svg.append('g').attr('id','disclaimerNotes')

        this.notes.selectAll('text').data([
            'to the 21CD Matrix after the majority of precedent research had concluded',
            'NOTE: Investment, Just Organizations and Beauty & Spirit have low values as they were added'
        ]).enter().append('text').text(function(d){return d})
        .attr('x',20).attr('y',function(d,i){
            return i * -15 + _height - 20
        })
        //////////////////////////////////////////////////////////////////////////////////////
        "///////GRAPHICS CONTROLS////////"
        //////////////////////////////////////////////////////////////////////////////////////

        this.calculateDimensions();
        let yAxisData = []
        for (let i in this.matrixData[0]['data']){
            let d = this.matrixData[0]['data'][i]
            if (i != 0){
                yAxisData.push(d)
            }
        }
        this.yAxisData = yAxisData
        // console.log('matrix data')
        // console.log(_model.matrixData)

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

    calculateDimensions(){
        this.yBorder = 40
        this.yOffset = 180
        this.yMultiplier = (this.height - this.yBorder * 2 - this.yOffset) / 4

        this.xBorder = 20
        this.xOffset = 200
        this.xMultiplier = (this.width -this.xBorder * 2 - this.xOffset) / (this.matrixData.length - 1)
        for (let index in this.matrixData){
            let datum = this.matrixData[index]
            datum['x'] = index * this.xMultiplier + this.xBorder + this.xOffset
        }
    }

    resize(_model,_width,_height){
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;
        this.svg
            .attr('width',this.width)
            .attr('height',this.height)

        this.calculateDimensions();
        this.drawUpdate(_model);

        
        return
    }

    updateData(_model){
        let updatedData = this.structureData(_model.precedentData)
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
        let _thisClass = this
        let _data = this.structuredData
        let _projectName = this.projectName
        let _precedentProjects = this.precedentProjects
        let _categoriesData = this.categoriesData
        let _matrixData = this.matrixData
        let _yAxisData = this.yAxisData

        let _height = this.height
        let _width = this.width
        let _centerX = this.centerX
        let _centerY = this.centerY

        let yBorder = this.yBorder
        let yOffset = this.yOffset
        let yMult = this.yMultiplier

        let xBorder = this.xBorder
        let xOffset = this.xOffset


        let _div = d3.select(this.container)
        let _linesGroup = this.linesGroup
        let _xAxis = this.xAxis
        let _xAxisText = this.xAxisText
        let _yAxis = this.yAxis
        let _yAxisText = this.yAxisText

        let dataLength = _data.length
        let prIndex = dataLength
        for (let i in _data){
            let d = _data[i]
            if (d['name'] == _projectName){
                prIndex = i
            }
        }
        _data.push(_data.splice(prIndex,1)[0])

        ////////D3 COMPLETE GENERAL UPDATE PATTERN///////// 
        '///////LINES FOR CHART////////'

        // console.log('updated line chart')
        let updateLines = _linesGroup.selectAll('.chartLine').data(_data)
        let enterLines = updateLines.enter().append('path').attr('class',function(d){
                if (d['name'] != _projectName){
                    return 'chartLine'
                } else {
                    return 'chartLine projectChartLine'
                }
                
            })
            .attr('fill-opacity',0)
        
        let exitLines = updateLines.exit()
        let mergeLines = enterLines.merge(updateLines).transition()
            // .style('stroke',function(d){
            //     if (d['name'] == _projectName){
            //         return '#fbec40'
            //     } else {
            //         return 'gray'
            //     }
            // })
            .attr('d',function(d){
                let coords = []
                for (let datum of _matrixData){
                    let coord = []
                    coord.push(datum['x'])
                    if (datum['tag'] in d['scores']){
                        var scoreVal = d['scores'][datum['tag']]['value']
                    } else {
                        var scoreVal = 0
                    }
                    coord.push(_height - ((scoreVal * yMult) + yOffset + yBorder))
                    coords.push(coord)
                }
                if (d['name'] != _projectName){
                    coords.push([
                        _width -  xBorder,
                        _height - (yBorder + yOffset)
                    ])
                    coords.push([
                        xBorder + xOffset,
                        _height - (yBorder + yOffset)
                    ])
                }
                let _line = d3.line().curve(d3.curveMonotoneX)(coords)
                return _line
            })
            .style('fill-opacity',function(d){
                if (d['name'] == _projectName){
                    return 0
                } else {
                    return 0.1
                }
            })
            .style('fill',function(d){
                if (d['name'] == _projectName){
                    return '#fbec40'
                } else if (d['location'] == 'US'){
                    return 'tomato'
                } else {
                    // console.log(d)
                    return 'lightgray'
                }
            })
            .style('stroke-width',function(d){
                if (d['name'] == _projectName){
                    return '6px'
                } else {
                    return 0
                }
            })
            .style('stroke',function(d){
                if (d['name'] == _projectName){
                    return '#fbec40'
                } else {
                    return 'none'
                }
            })
        
        ////////D3 COMPLETE GENERAL UPDATE PATTERN///////// 
        '///////LINE POINTS////////'
        let updateLinePtGroups = _linesGroup.selectAll('.circleGroup').data(_data)
        let enterLinePtGroups = updateLinePtGroups.enter().append('g').attr('class','circleGroup')
        let exitLinePtGroups = updateLinePtGroups.exit().remove()
        let mergeLinePtGroups = enterLinePtGroups.merge(updateLinePtGroups)

        let updateLinePts = mergeLinePtGroups.selectAll('.linePt').data(function(d){
            let scoreArray = objToArray(d['scores'])
            for (let datum of scoreArray){
                datum['name'] = d['name']
            }
            return scoreArray
        })
        let enterLinePts = updateLinePts.enter().append('circle').attr('class','linePt').attr('fill','none')
        let exitLinePts = updateLinePts.exit().remove()
        let mergeLinePts = enterLinePts.merge(updateLinePts).transition()
            .attr('cx',function(d,i){
                for (let datum of _matrixData){
                    if (datum['tag'] == d['key']){
                        return datum['x']
                    }
                }
                return _matrixData
            })
            .attr('cy',function(d){
                return _height - ((d['value'] * yMult) + yOffset + yBorder)
            })
            .attr('r',function(d){
                if (d['name'] == _projectName){
                    return 6
                } else {
                    return 3
                }
            })
            .attr('stroke',function(d){
                if (d['name'] == _projectName){
                    return 'black'
                } else {
                    return 'none'
                }
            })
            .attr('stroke-width',function(d){
                if (d['name'] == _projectName){
                    return '1px'
                } else {
                    return 'none'
                }
            })
            .attr('fill',function(d){
                if (d['name'] == _projectName){
                    return '#fbec40'
                }else{
                    return 'none'
                }
            })
        
        ////////D3 COMPLETE GENERAL UPDATE PATTERN///////// 
        '///////Y AXIS TEXT////////'
        let updateYText = _yAxisText.selectAll('text').data(_yAxisData)
        let enterYText = updateYText.enter().append('text').attr('class','yAxisText')
        let exitYText = enterYText.exit().remove()
        let mergeYText = enterYText.merge(updateYText).transition()
            .text(function(d){
                return d['score']
            })
            .attr('y',function(d){
                return _height - ((d['value'] * yMult) + yOffset + yBorder)
            })
            .attr('x',function(d){
                return xOffset
            })
            .attr('text-anchor','end')
            .style('font-weight',750)
        
        ////////D3 COMPLETE GENERAL UPDATE PATTERN///////// 
        '///////X AXIS DATA////////'
        let updateXText = _xAxisText.selectAll('text').data(_matrixData)
        let enterXText = updateXText.enter().append('text').attr('class','yAxisText')
        let exitXText = enterXText.exit().remove()
        let mergeXText = enterXText.merge(updateXText).transition()
            .text(function(d){
                return d['tag']
            })
            .attr('y',0)
            .attr('x',0)
            .attr('text-anchor','end')
            .attr('transform',function(d){
                let rotation = 320
                let x = d['x']
                let y = _height - yOffset - 15
                return 'translate(' + x + ',' + y +') rotate(' + rotation + ')'
            })
            .style('font-weight',750)
    }
}