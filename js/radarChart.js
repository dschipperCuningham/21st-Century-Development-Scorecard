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
        
        this.projectName = _model.projectName
        console.log('project name')
        console.log(this.projectName)
        
        this.structuredData = this.structureData(this.precedentProjects)
        console.log('structured data')
        console.log(this.structuredData)

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

        this.drawUpdate(_model);
        return
    }

    updateData(_model){
        var updatedData = this.structureData(_model.precedentData)
        this.structuredData = updatedData
        this.drawUpdate(_model)
    }

    drawUpdate(_model){
        
    }
}