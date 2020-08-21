//////////////////////////////////////////////////////////////////////////////////////
"///////THIS IS MY TEMPLATE FOR CREATING 'QUICK' D3 CLASSES////////"
//////////////////////////////////////////////////////////////////////////////////////

class DataEntryMatrix{
    constructor(_data,_div,_width,_height){
        //////////////////////////////////////////////////////////////////////////////////////
        "///////ADDING THE INITIAL PARAMETERS BASED ON USER INPUT////////"
        //////////////////////////////////////////////////////////////////////////////////////
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;
        this.container = _div;
        
        //////////////////////////////////////////////////////////////////////////////////////
        "///////ANY ONE TIME DATA SHAPING SHOULD HAPPEN HERE////////"
        //////////////////////////////////////////////////////////////////////////////////////

        var categoriesData = []
        for (var d of _data){
            if (categoriesData.includes(d['category']) != true){
                categoriesData.push(d['category'])
            }
        }
        this.categoriesData = categoriesData
        this.data = this.buildChartData(_data);
        console.log(this.data)

        //////////////////////////////////////////////////////////////////////////////////////
        "///////BACK END CONTROLS FOR EDITING THE GRAPHIC////////"
        //////////////////////////////////////////////////////////////////////////////////////

        this.mainHeaderHeight = 60
        this.mainHeaderTopBottomPadding = 10
        this.categoryHeaderHeight = 40
        this.matrixCellPadding = 10

        //////////////////////////////////////////////////////////////////////////////////////
        "///////CREATING AN SVG OBJECT TO DRAW TO////////"
        //////////////////////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////////////////////////
        "///////ADD GROUPS TO THE SVG FOR ORGANIZING DATA////////"
        //////////////////////////////////////////////////////////////////////////////////////
        return
    };

    buildChartData(_data){
        //////////////////////////////////////////////////////////////////////////////////////
        "///////ANY GRAPHIC SPECIFIC DATA SHAPING SHOULD HAPPEN HERE////////"
        //////////////////////////////////////////////////////////////////////////////////////
        console.log(_data)
        for (var d of _data){
            d['data'].unshift({'score':'Tag','value':-1,'text':d['tag'],'link':d['link']})
        }
        var structuredData = []
        for (var cat of this.categoriesData){
            var catStructure = {
                'category': cat,
                'rowData': [],
                'display':'visible'
            }
            for (var row of _data){
                if (row['category'] == cat){
                    catStructure['rowData'].push(row)
                }
            }
            structuredData.push(catStructure)
        }
        return structuredData

    };

    
    resize(_width,_height){
        //////////////////////////////////////////////////////////////////////////////////////
        "///////CALL THIS FUNCTION TO RESIZE THE GRAPHIC////////"
        //////////////////////////////////////////////////////////////////////////////////////
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;

        this.drawUpdate()
        return
    };

    updateData(_data,_levelName){
        var updatedData = this.buildChartData(_data)
        this.drawUpdate()
    };

    drawUpdate(){
        //////////////////////////////////////////////////////////////////////////////////////
        "///////THIS FUNCTION DOES THE HEAVY LIFTING FOR CREATING GRAPHICS////////"
        //////////////////////////////////////////////////////////////////////////////////////
        var _thisClass = this
        var _data = this.data
        var _categoriesData = this.categoriesData
        var _height = this.height
        var _width = this.width
        var _centerX = this.centerX
        var _centerY = this.centerY

        var _div = d3.select(this.container)

        var mainHeaderHeight = this.mainHeaderHeight
        var mainHeaderTopBottomPadding = this.mainHeaderTopBottomPadding
        var categoryHeaderHeight = this.categoryHeaderHeight
        var cellWidth = (_width-1)/6
        var matrixCellPadding = this.matrixCellPadding


        ////////D3 COMPLETE GENERAL UPDATE PATTERN///////// 
        '///////CONTAINERS TO SEPARATE HEADERS////////'
        var matrixStructure = ['matrixHeader','matrixBody']
        var updateMatrixStructure = _div.selectAll('div').data(matrixStructure)
        var enterMatrixStructure = updateMatrixStructure.enter().append('div')
        var exitMatrixStructure = updateMatrixStructure.exit()
        var mergeMatrixStructure = enterMatrixStructure.merge(updateMatrixStructure)
            .attr('class',function(d){return d})
            .style('height',function(d){
                if (d == 'matrixHeader'){
                    return mainHeaderHeight + 'px'
                }
            })
        ///////////////////////////////////////////////////

        ////////D3 COMPLETE GENERAL UPDATE PATTERN/////////
        '///////HEADERS////////'
        var headerData = _data[0]['rowData'][0]['data']
        var updateMatrixHeader = d3.selectAll('.matrixHeader').selectAll('div').data(headerData)
        var enterMatrixHeader = updateMatrixHeader.enter().append('div')
        var exitMatrixHeader = updateMatrixHeader.exit()
        var mergeMatrixHeader = enterMatrixHeader.merge(updateMatrixHeader)
            .attr('class',function(d){
                if (d['value'] < 0){
                    return 'blankCell'
                } else {
                    return 'headerCell'
                }
            }).text(function(d){
                if (d['value'] < 0){
                    return ''
                } else {
                    return d['score']
                }
            })
            .style('display','table-cell')
            .style('width',function(d,i){
                    return cellWidth + 'px'
            })
            .style('padding-top',function(){
                return mainHeaderTopBottomPadding + 'px'
            })
            .style('height',function(){
                return mainHeaderHeight-mainHeaderTopBottomPadding + 'px'
            })
        ///////////////////////////////////////////////////

        ////////D3 COMPLETE GENERAL UPDATE PATTERN/////////
        '///////SECTION CONTAINERS////////'
        var updateMatrixContainers = d3.selectAll('.matrixBody').selectAll('.matrixContainer').data(_data)
        var enterMatrixContainers = updateMatrixContainers.enter().append('div').attr('class', 'matrixContainer')
        var exitMatrixContainers = updateMatrixContainers.exit()
        var mergeMatrixContainers = enterMatrixContainers.merge(updateMatrixContainers)
        // console.log(mergeMatrixContainers)
        ///////////////////////////////////////////////////

        ////////D3 COMPLETE GENERAL UPDATE PATTERN/////////
        '///////CONTAINER HEADERS////////'
        var updateMatrixCategoryHeaders = mergeMatrixContainers.selectAll('.categoryHeader').data(function(d){
            return [d]
        })
        var enterMatrixCategoryHeaders = updateMatrixCategoryHeaders.enter().append('div').attr('class','categoryHeader')
        var exitMatrixCategoryHeaders = updateMatrixCategoryHeaders.exit()
        var mergeMatrixCategoryHeaders = enterMatrixCategoryHeaders.merge(updateMatrixCategoryHeaders)
            .attr('id',function(d){
                return removeSpaces(d['category']) + 'Category'
            })
            .text(function(d){
                return d['category']
            })
        ///////////////////////////////////////////////////

        ////////D3 COMPLETE GENERAL UPDATE PATTERN/////////
        '///////DATA CONTAINER WITHIN SECTION CONTAINERS////////'
        var updateMatrixDataContainers = mergeMatrixContainers.selectAll('.matrixDataContainers').data(function(d){
            return [d]
        })
        var enterMatrixDataContainers = updateMatrixDataContainers.enter().append('div').attr('class','matrixDataContainers')
        var exitMatrixDataContainers = updateMatrixDataContainers.exit()
        var mergeMatrixDataContainers = enterMatrixDataContainers.merge(updateMatrixDataContainers)
            .attr('id', function(d){
                return removeSpaces(d['category']) + 'DataContainer'
            })
        ///////////////////////////////////////////////////
        
        ////////D3 COMPLETE GENERAL UPDATE PATTERN/////////
        '///////ROW CONTAINERS FOR DATA CONTAINERS////////'
        var updateMatrixRow = mergeMatrixDataContainers.selectAll('.matrixRow').data(function(d){
            return d['rowData']
        })
        var enterMatrixRow = updateMatrixRow.enter().append('div').attr('class','matrixRow')
        var exitMatrixRow = updateMatrixRow.exit()
        var mergeMatrixRow = enterMatrixRow.merge(updateMatrixRow)
            .attr('id',function(d){
                return removeSpaces(d['tag']) + 'Row'
            })
        ///////////////////////////////////////////////////

        ////////D3 COMPLETE GENERAL UPDATE PATTERN/////////
        '///////DATA FOR ROW CONTAINERS////////'
        var updateMatrixData = mergeMatrixRow.selectAll('.matrixData').data(function(d){
            return d['data']
        })
        var enterMatrixData = updateMatrixData.enter().append('div').attr('class',function(d,i){
            if (i==0) {
                return 'matrixData rowHeader'
            } else {
                return 'matrixData'
            }
        })
        var exitMatrixData = updateMatrixData.exit()
        var mergeMatrixData = enterMatrixData.merge(updateMatrixData)
            .text(function(d){
                return d['text']
            })
            .style('display','table-cell')
            .style('width',(cellWidth - 2) - (matrixCellPadding*2) + 'px')
            .style('padding-left',matrixCellPadding+'px')
            .style('padding-right',matrixCellPadding+'px')
            .style('padding-top',matrixCellPadding + 'px')
            .style('padding-bottom',matrixCellPadding + 'px')
        ///////////////////////////////////////////////////
        
        ////////SELECTING AND ADDING EVENTS/////////
        '///////TRANSITIONS AND INTERACTIONS WITH MATRIX////////'

        d3.selectAll('.matrixData').on('mouseover',function(d){
            d3.select(this).transition().duration(180)
                .style('background','#fbec40')
        })
        d3.selectAll('.matrixData').on('mouseout',function(d){
            d3.select(this).transition().duration(180)
                .style('background','white')
        })


        d3.selectAll('.rowHeader').on('mouseover',function(d){
            d3.select(this.parentNode).selectAll('.matrixData').transition().duration(180)
                .style('background',function(d){
                    if (d['value'] >= 0){
                        return 'lightgray'
                    } else {
                        return '#666666'
                    }
                })
                .style('color',function(d){
                    if (d['value'] < 0){
                        return 'white'
                    }
                })
                .style('cursor','pointer')
        })
        d3.selectAll('.rowHeader').on('mouseout',function(d){
            d3.select(this.parentNode).selectAll('.matrixData').transition().duration(180)
                .style('background','white')
                .style('color',function(d){
                    if (d['value'] < 0){
                        return 'black'
                    }
                })
                .style('cursor','default')
        })
        d3.selectAll('.rowHeader').on('click',function(d){
            var linkAddress = d['link']
            window.open(linkAddress)
        })


        d3.selectAll('.categoryHeader').on('mouseover',function(d){
            d3.select(this).transition().duration(350)
                .style('background','#111111')
                .style('cursor','pointer')
        })
        d3.selectAll('.categoryHeader').on('mouseout',function(d){
            d3.select(this).transition().duration(350)
                .style('background','#666666')
                .style('cursor','default')
        })
        d3.selectAll('.categoryHeader').on('click',function(d){
            d3.select(this.parentNode).select('.matrixDataContainers').transition().duration(400)
                .style('display',function(d){
                    if (d['display'] == 'visible'){
                        d['display'] = 'hidden'
                        return 'none'
                    } else {
                        d['display'] = 'visible'
                        return 'block'
                    }
                })
        })
    };
};