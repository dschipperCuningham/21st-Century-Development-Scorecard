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
        
        
        return
    }

    structureData(_data){
        return _data
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

        var _height = this.height
        var _width = this.width
        var _centerX = this.centerX
        var _centerY = this.centerY

        var _div = d3.select(this.container)

        ////////D3 COMPLETE GENERAL UPDATE PATTERN///////// 
        '///////CONTAINERS TO SEPARATE HEADERS FROM MATRIX////////'

    }
}