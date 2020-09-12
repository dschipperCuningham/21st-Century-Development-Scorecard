//////////////////////////////////////////////////////////////////////////////////////
"///////THE CLASS DEFINED BY THIS SCRIPT IS USED TO GENERATE THE 21CD MATRIX WHICH IS USED TO ENTER DATA////////"
//////////////////////////////////////////////////////////////////////////////////////

class suggestingOpportunities{
    constructor(_model,_div,_width,_height){
        //////////////////////////////////////////////////////////////////////////////////////
        "///////ADDING THE INITIAL PARAMETERS BASED ON USER INPUT////////"
        //////////////////////////////////////////////////////////////////////////////////////
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;
        this.container = d3.select(_div);
    
        //////////////////////////////////////////////////////////////////////////////////////
        "///////COLLECTING DATA FROM MODEL AND SHAPING IT IF NECESSARY////////"
        //////////////////////////////////////////////////////////////////////////////////////

        return
    }

    // structureData(_data){
    //     return _data
    // }

    resize(_model,_width,_height){
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;

        this.drawUpdate(_model);
        return
    }

    updateData(_model){
        var updatedData = this.structureData(_model.precedentData)
        this.structuredData = updatedData
        this.drawUpdate(_model)
    }

    drawUpdate(_model){
        let suggestions = _model.suggestions
        let matrixData = _model.matrixData
        let projectScores = _model.projectScores
        let container = this.container
        
        // console.log('current suggestions')
        // console.log(suggestions)
        // console.log('matrix data')
        // console.log(matrixData)
        // console.log(container)
        container.style('display','table')
        let updateRow = container.selectAll('.suggestionRow').data(suggestions)
        let enterRow = updateRow.enter().append('div').attr('class','suggestionRow')
        let exitRow = updateRow.exit().remove()
        let mergeRow = enterRow.merge(updateRow)
        mergeRow.transition()
            .style('display','table-row')
            
        let updateCells = mergeRow.selectAll('.suggestionCell').data(function(d){
            for (let row of matrixData){
                var description = ''
                let key = d['key']
                if (row['tag'] == key){
                    for (let score of row['data']){
                        if (score['value'] == d['value'] + 1){
                            description = {
                                'key':score['text'],
                                'category':d['category'],
                                'value':d['value']+1,
                                'name':d['name']
                            }
                            break
                        }
                    }
                    break
                }
            }
            d['type'] = 'header'
            description['type'] = 'body'
            return [d,description]
        })
        let enterCells = updateCells.enter().append('div').attr('class','suggestionCell')
        let exitCells = updateCells.exit().remove()
        let mergeCells = enterCells.merge(updateCells)
            .text(function(d){
                return d['key']
            })
            .style('display','table-cell')
            .style('font-weight',function(d){
                if (d['type'] == 'header'){
                    return 750
                } else {
                    return 400
                }
            })
            .style('font-size',function(d){
                if (d['type'] == 'header'){
                    return 'medium'
                } else {
                    return 'small'
                }
            })
            .style('text-align',function(d){
                if (d['type'] == 'header'){
                    return 'right'
                } else {
                    return 'left'
                }
            })
            
        mergeRow.on('click',function(d){
            // console.log(d)
            // console.log(projectScores)
            // console.log(matrixData)
            let newData
            // console.log(d['value'])
            let newValue = d['value'] + 2
            // console.log(newValue)
            for (let i of matrixData){
                if (i['tag'] == d['key']){
                    newData = i['data'][newValue]
                }
            }
            // console.log('new data')
            // console.log(newData)
            projectScores[d['key']]['value'] = newData['value']
            projectScores[d['key']]['score'] = newData['score']
            
            _model.setProjectScores(projectScores)
            _model.determineSuggestions()
            _model.notifyObservers()
        })

        // mergeRow.transition().on('hover')

    }
}