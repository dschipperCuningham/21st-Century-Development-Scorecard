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
        this.centerY = _height/2;
        this.container = _div;
        let categoryData = _model.categoryData
        let precedentData = _model.precedentData
        let projectName = _model.projectName
        console.log('troubleshooting radar chart data')
        console.log(categoryData)
        console.log(precedentData)

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
            catData['averages'].push(intPrData)

            catAverages.push(catData)
        }
        this.categoryAverages = catAverages
        //////////////////////////////////////////////////////////////////////////////////////
        "///////COLLECTING DATA FROM MODEL AND SHAPING IT IF NECESSARY////////"
        //////////////////////////////////////////////////////////////////////////////////////


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