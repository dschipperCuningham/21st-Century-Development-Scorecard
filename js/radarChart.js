//////////////////////////////////////////////////////////////////////////////////////
"///////THE CLASS DEFINED BY THIS SCRIPT IS USED TO GENERATE THE 21CD MATRIX WHICH IS USED TO ENTER DATA////////"

// const { captureRejections } = require("events");

//////////////////////////////////////////////////////////////////////////////////////

class RadarChart{
    constructor(_model,_div,_width,_height){
        //////////////////////////////////////////////////////////////////////////////////////
        "///////ADDING THE INITIAL PARAMETERS BASED ON USER INPUT////////"
        //////////////////////////////////////////////////////////////////////////////////////
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = this.height/2;
        this.container = _div;
        let categoryData = _model.categoryData
        let precedentData = _model.precedentData
        let projectName = _model.projectName
        console.log('troubleshooting radar chart data')
        console.log(categoryData)
        console.log(precedentData)
    
        this.labelPadding = 10
        this.axisLength = 180
        this.minLength = 10
        this.axisScale = d3.scaleLinear().domain([0,4]).range([this.minLength,this.axisLength])

        //////////////////////////////////////////////////////////////////////////////////////
        "///////CREATING AVERAGES FOR CATEGORIES BASED ON US AND INTERNATIONAL PRECEDENTS////////"
        //////////////////////////////////////////////////////////////////////////////////////
        let catAverages = []
        for (let c of categoryData){
            let catData = {}
            catData['category'] = c
            catData['averages'] = []

            let usPrData = {}
            usPrData['totalScore'] = 0
            usPrData['scoreCount'] = 0
            usPrData['tag'] = 'US'
            for (let k in precedentData){
                let precedent = precedentData[k]
                if (precedent['location'] == 'US' && 
                    precedent['name'] != projectName){
                        for (let s in precedent['scores']){
                            let score = precedent['scores'][s]
                            if (score['category'] == c){
                                usPrData['totalScore'] += score['value']
                                usPrData['scoreCount'] += 1
                            }
                        }
                }
            }
            usPrData['average'] = usPrData['totalScore']/usPrData['scoreCount']
            usPrData['scaledAverage'] = this.axisScale(usPrData['average'])
            catData['averages'].push(usPrData)

            let intPrData = {}
            intPrData['totalScore'] = 0
            intPrData['scoreCount'] = 0
            intPrData['tag'] = 'International'
            for (let k in precedentData){
                let precedent = precedentData[k]
                if (precedent['location'] == 'International' && 
                    precedent['name'] != projectName){
                        for (let s in precedent['scores']){
                            let score = precedent['scores'][s]
                            if (score['category'] == c){
                                intPrData['totalScore'] += score['value']
                                intPrData['scoreCount'] += 1
                            }
                        }
                }
            }
            intPrData['average'] = intPrData['totalScore']/intPrData['scoreCount']
            intPrData['scaledAverage'] = this.axisScale(intPrData['average'])
            catData['averages'].push(intPrData)

            catAverages.push(catData)

            
        }

        //////////////////////////////////////////////////////////////////////////////////////
        "///////CALCULATING ANGLES FOR EACH OF THE CATEGORIES////////"
        //////////////////////////////////////////////////////////////////////////////////////

        let catCount = catAverages.length
        // console.log(catCount)
        let axisAngle = (Math.PI*2)/catCount
        // console.log(axisAngle)
        for (let i in catAverages){
            let c = catAverages[i]
            let rotation = i * axisAngle + Math.PI * 0.5
            c['rotation'] = rotation
            c['unitX'] = Math.cos(rotation)
            c['unitY'] = Math.sin(rotation)
            
        }
        this.categoryAverages = catAverages

        this.svgCanvas = d3.select(_div).append('svg').attr('class','radarSvgCanvas')
            .style('height',this.height)
            .style('width',_width)

        
        
        this.lineGroup = this.svgCanvas.append('g').attr('class','radarLineGroup')
        this.axisGroup = this.svgCanvas.append('g').attr('class','radarAxisGroup')
        this.labelGroup = this.svgCanvas.append('g').attr('class','radarLableGroup')
        this.legendGroup = this.svgCanvas.append('g').attr('class','radarLegendGroup')
        this.whiteCircle = this.svgCanvas.append('g').attr('class','radarBlankCircle')
        return
    }

    structureData(_data){
        return _data
    }

    resize(_model,_width,_height){
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = this.height/2;
        this.svgCanvas.style('height',this.height).style('width',_width)
        this.drawUpdate(_model);
        return
    }

    updateData(_model){
        var updatedData = this.structureData(_model.precedentData)
        this.structuredData = updatedData
        this.drawUpdate(_model)
    }

    drawUpdate(_model){
        let container = this.container
        let width = this.width
        let height = this.height
        let centerX = this.centerX
        let centerY = this.centerY
        let axisLength = this.axisLength
        let axisScale = this.axisScale
        let minLength = this.minLength
        let labelPadding = this.labelPadding

        let lineGroup = this.lineGroup
        let axisGroup = this.axisGroup
        let labelGroup = this.labelGroup
        let legendGroup = this.legendGroup
        let whiteCircleGroup = this.whiteCircle

        let precedentData = _model.precedentData
        let projectName = _model.projectName
        let projectData = precedentData[projectName]

        //cloning original category data.  This is cloned so each time the script
        //updates a new set of category averages can be pushed to the averages list
        //this is a little clumsy, but it will get the job done
        var categoryAverages = []
        for (let i of this.categoryAverages){
            let newObj = {}
            for (let k in i){
                if(k=='averages'){
                    newObj[k] = Array.from(i[k])
                } else {
                    newObj[k] = i[k]
                }
            }
            categoryAverages.push(newObj)
        }


        //adding average category scores of this project to the dataset
        for (let c of categoryAverages){
            let totalScore = 0
            let numberOfScores = 0
            for (let k in projectData['scores']){
                let score = projectData['scores'][k]
                if (c['category'] == score['category']){
                    totalScore += score['value']
                    numberOfScores += 1
                }
            }
            let averageScore = totalScore/numberOfScores
            let scaledAverage = axisScale(averageScore)
            c['averages'].push({
                'totalScore':totalScore,
                'scoreCount': numberOfScores,
                'tag':projectName,
                'average':averageScore,
                'scaledAverage':scaledAverage
            })
        }
        // console.log(categoryAverages)

        let updateAxes = axisGroup.selectAll('line').data(categoryAverages)
        let enterAxes = updateAxes.enter().append('line').attr('class','radarChartAxes')
        let exitAxes = updateAxes.exit()
        let mergeAxes = enterAxes.merge(updateAxes).transition()
            .attr('x1',function(d){
                return centerX + (d['unitX'] * minLength)
            })
            .attr('y1',function(d){
                return centerY + (d['unitY'] * minLength)
            })
            .attr('x2',function(d){
                return centerX + (d['unitX'] * axisLength)
            })
            .attr('y2',function(d){
                return centerY + (d['unitY'] * axisLength)
            })
        

        let updateLabels = labelGroup.selectAll('text').data(categoryAverages)
        let enterLabels = updateLabels.enter().append('text').attr('class','radarChartLabels')
        let exitLabels = updateLabels.exit()
        let mergeLabels = enterLabels.merge(updateLabels).transition()
            .text(function(d){
                // console.log(d)
                return d['category']
            })
            .attr('x',function(d){
                return centerX + (d['unitX'] * (axisLength + labelPadding))
            })
            .attr('y',function(d){
                return centerY + (d['unitY'] * (axisLength + labelPadding))
            })
            .attr('text-anchor',function(d){
                if (d['unitX'] == 0){
                    return 'middle'
                } else if (d['unitX'] > 0) {
                    return 'start'
                } else {
                    return 'end'
                }
            })

        let updateWhiteCircle = whiteCircleGroup.selectAll('circle').data([{
            'cx': centerX,
            'cy': centerY,
            'r': minLength
        }])
        let enterWhiteCircle = updateWhiteCircle.enter().append('circle').attr('class','whiteCircle')
        let exitWhiteCircle = updateWhiteCircle.exit()
        let mergeWhiteCircle = enterWhiteCircle.merge(updateWhiteCircle).transition()
            .attr('cx',function(d){return d['cx']})
            .attr('cy',function(d){return d['cy']})
            .attr('r',function(d){return d['r']})
            .style('fill','white')



        ///BUILDING DATA FOR DRAWING PATHS AND THEN USING IT TO DRAW PATHS  
        let allTags = []
        for (let c of categoryAverages){
            // console.log(c)
            for (let d of c['averages']){
                allTags.push(d['tag'])
            }
        }

        let uniqueTags = []
        let pathData = []
        for (let t of allTags){
            if (uniqueTags.includes(t) == false){
                uniqueTags.push(t)
                pathData.push({'tag':t,'scores':[]})
            }
        }
        
        for (let c of categoryAverages){
            for (let d of c['averages']){
                for (let p of pathData){
                    if (d['tag'] == p['tag']){
                        p['scores'].push({
                            'category':c['category'],
                            'average':d['average'],
                            'scaledAverage':d['scaledAverage'],
                            'unitX':c['unitX'],
                            'unitY':c['unitY']
                        })
                    }
                }
            }
        }
        
        let updatePaths = lineGroup.selectAll('path').data(pathData)
        let enterPaths = updatePaths.enter().append('path').attr('class','radarChartPaths')
        let exitPaths = enterPaths.exit()
        let mergePaths = enterPaths.merge(updatePaths).transition()
            .attr('d',function(d){
                let coords = []
                for (let datum of d['scores']){
                    let x = centerX + datum['unitX'] * datum['scaledAverage']
                    let y = centerY + datum['unitY'] * datum['scaledAverage']
                    let coord = [x,y]
                    coords.push(coord)
                }
                let pathCurve = d3.line().curve(d3.curveLinearClosed)(coords)
                return pathCurve
            })
            .style('fill-opacity', function(d){
                if (d['tag'] == projectName){
                    return 0.8
                } else {
                    return 0.5
                }
            })
            .style('fill',function(d){
                if (d['tag'] == projectName){
                    return '#fbec40'
                } else if (d['tag'] == 'US'){
                    return 'tomato'
                } else {
                    return 'lightgray'
                }
            })

        
    }
}