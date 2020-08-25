class MatrixAndPrecedentsDataModel {
    constructor(_rawData,_matrixDataKey,_precedentDataKey,_activeProjectName) {
        this.matrixData = _rawData[_matrixDataKey];
        this.precedentData = _rawData[_precedentDataKey];
        this.projectName = _activeProjectName;
        this.categoryData = this.buildCategories(this.matrixData)
        
        this.observers = [];
    }

    addObserver(o) {
        this.observers.push(o);
    }

    notifyObservers() {
        for (let o of this.observers) {
            o.drawUpdate(this)
        }
    }

    buildCategories(_matrixData){
        var categoriesData = []
        for (var d of _matrixData){
            if (categoriesData.includes(d['category']) != true){
                categoriesData.push(d['category'])
            }
        }
        return categoriesData
    }



    get projectScores() {
        return this.precedentData[this.projectName]['scores'];
    }


    setProjectScores(_newScores) {
        this.precedentData[this.projectName]['scores'] = _newScores;
    }
}