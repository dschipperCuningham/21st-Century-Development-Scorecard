//////////////////////////////////////////////////////////////////////////////////
"///////THIS IS MY TEMPLATE FOR CREATING 'QUICK' D3 CLASSES////////"
//////////////////////////////////////////////////////////////////////////////////

class DataEntryMatrix{
    constructor(_data,_div,_width,_height){
        //////////////////////////////////////////////////////////////////////////////////
        "///////ADDING THE INITIAL PARAMETERS BASED ON USER INPUT////////"
        //////////////////////////////////////////////////////////////////////////////////
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;
        this.container = _div;
        
        

        //////////////////////////////////////////////////////////////////////////////////
        "///////ANY ONE TIME DATA SHAPING SHOULD HAPPEN HERE////////"
        //////////////////////////////////////////////////////////////////////////////////

        var categoriesData = []
        for (var d of _data){
            if (categoriesData.includes(d['category']) != true){
                categoriesData.push(d['category'])
            }
        }
        this.categoriesData = categoriesData
        this.data = this.buildChartData(_data);
        console.log(this.data)

        //////////////////////////////////////////////////////////////////////////////////
        "///////BACK END CONTROLS FOR EDITING THE GRAPHIC////////"
        //////////////////////////////////////////////////////////////////////////////////

        this.mainHeaderHeight = 60
        this.categoryHeaderHeight = 40

        //////////////////////////////////////////////////////////////////////////////////
        "///////CREATING AN SVG OBJECT TO DRAW TO////////"
        //////////////////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////////////////////
        "///////ADD GROUPS TO THE SVG FOR ORGANIZING DATA////////"
        //////////////////////////////////////////////////////////////////////////////////
        return
    };

    buildChartData(_data){
        //////////////////////////////////////////////////////////////////////////////////
        "///////ANY GRAPHIC SPECIFIC DATA SHAPING SHOULD HAPPEN HERE////////"
        //////////////////////////////////////////////////////////////////////////////////
        console.log(_data)
        for (var d of _data){
            d['data'].unshift({'score':'Tag','value':-1,'text':d['tag']})
        }
        var structuredData = []
        for (var cat of this.categoriesData){
            var catStructure = {
                'category': cat,
                'rowData': []
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
        //////////////////////////////////////////////////////////////////////////////////
        "///////CALL THIS FUNCTION TO RESIZE THE GRAPHIC////////"
        //////////////////////////////////////////////////////////////////////////////////
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;

        // this.svg.attr("width",_width).attr("height",_height)
        this.drawUpdate()
        return
    };

    updateData(_data,_levelName){
        var updatedData = this.buildChartData(_data)
        this.drawUpdate()
    };

    drawUpdate(){
        //////////////////////////////////////////////////////////////////////////////////
        "///////THIS FUNCTION DOES THE HEAVY LIFTING FOR CREATING GRAPHICS////////"
        //////////////////////////////////////////////////////////////////////////////////
        var _thisClass = this
        var _data = this.data
        var _categoriesData = this.categoriesData
        var _height = this.height
        var _width = this.width
        var _centerX = this.centerX
        var _centerY = this.centerY

        var _div = d3.select(this.container)

        var mainHeaderHeight = this.mainHeaderHeight
        var categoryHeaderHeight = this.categoryHeaderHeight
        var cellWidth = _width/6

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
            .style('display','inline-block')
            .style('width',cellWidth + 'px')
            

        var updateMatrixContainers = d3.selectAll('.matrixBody').selectAll('div').data(_data)
        var enterMatrixContainers = updateMatrixContainers.enter().append('div')
        var exitMatrixContainers = updateMatrixContainers.exit()
        var mergeMatrixContainers = enterMatrixContainers.merge(updateMatrixContainers)
            .attr('class', 'matrixContainer')

        var matrixCategoryHeaders = mergeMatrixContainers.append('div')
            .attr('id',function(d){
                return d['category'] + 'Category'
            })
            .attr('class','categoryHeader')
            .text(function(d){return d['category']})
        
        var matrixCategoryData = mergeMatrixContainers.append('div')
            .attr('id',function(d){
                return d['category'] + 'MatrixData'
            })
            .attr('class','matrixData')
        

        var updateMatrixData = matrixCategoryData.selectAll('div')
            .data(function(d){ return d['rowData'] })
        var enterMatrixData = updateMatrixData.enter().append('div')
        var exitMatrixData = updateMatrixData.exit()
        var mergeMatrixContainers = enterMatrixData.merge(updateMatrixData)
            .attr('id',function(d){
                return d['tag'] + 'RowData'
            })
            .attr('class','matrixRow')
            .text(function(d){ return d['tag'] })
        

        










            // .attr('class', 'categoryCell')
            // .style('display','inline-block')
            // .style('width','100%')
            // .style('height',categoryHeaderHeight + 'px')
            // .text(function(d){
            //     return d['category']
            // })






        // var updateHeaderRow = _svg.selectAll('g').data(_data[0]['data'])
        // var enterHeaderRow = updateHeaderRow.enter().append('g')
        // enterHeaderRow.append('rect')
        // enterHeaderRow.append('text')

        // var exitHeaderRow = updateHeaderRow.exit()
        // var mergeHeaderRow = enterHeaderRow.merge(updateHeaderRow)
        //     .attr('transform',function(d,i){
        //         return 'translate(' + (cellWidth * (i + 1)) + ',0)'
        //     })

        // mergeHeaderRow.select('rect')
        //     .attr('width',cellWidth)
        //     .attr('height',mainHeaderHeight)
        //     .attr('x',0)
        //     .attr('y',0)
        //     .style('fill','gray')
        
        // mergeHeaderRow.select('text')
        //     .text(function(d){
        //         return d['score']
        //     })
        //     .attr('x',0)
        //     .attr('y',mainHeaderHeight-10)




        

        // console.log("drawing and updating")
    };
};