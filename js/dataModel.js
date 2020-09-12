class MatrixAndPrecedentsDataModel {
    constructor(_rawData,_matrixDataKey,_precedentDataKey,_activeProjectName) {
        this.matrixData = _rawData[_matrixDataKey];
        this.precedentData = _rawData[_precedentDataKey];
        this.projectName = _activeProjectName;
        this.categoryData = this.buildCategories(this.matrixData)
        this.suggestions = this.determineSuggestions()
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

    determineSuggestions(){
        let numberOfSuggestions = 5
        let projectScores = this.projectScores
        let maximumScore = 0
        let lowestScoringAttributes = []
        while (maximumScore < 5 && lowestScoringAttributes.length < numberOfSuggestions){
            let projectsIdentified = 0
            for (let d of this.matrixData){
                    let barrier = 100
                    for (let b of d['barriers']){
                        if (b['before'] < barrier){
                            barrier = b['before']
                        }
                    }
                    barrier -= 1
                    if (projectScores[d['tag']]['value'] == maximumScore && 
                                    maximumScore < barrier && 
                                    lowestScoringAttributes.length < numberOfSuggestions &&
                                    projectScores[d['tag']]['value'] < 4){
                        lowestScoringAttributes.push(projectScores[d['tag']])
                        projectsIdentified += 1
                        }
            }

            maximumScore += 1
            
        }

        return lowestScoringAttributes
    }

    setProjectScores(_newScores) {
        this.precedentData[this.projectName]['scores'] = _newScores;
        this.suggestions = this.determineSuggestions()
    }
}