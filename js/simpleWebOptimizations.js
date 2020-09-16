class ResponsiveLayout {
    constructor(width,height,leftDiv,rightDiv){
        this.width = width
        this.height = height
        this.leftDiv = d3.select(leftDiv)
        this.rightDiv = d3.select(rightDiv)
        

        this.leftMin = 720
        this.leftPercent = 0.55
        this.rightPercent = 1-this.leftPercent
        this.respond()
    }

    resize(width,height){
        this.width = width
        this.height = height
        this.respond()
    }

    respond(){
        console.log('responding')
        let height = this.height
        let width = this.width - 20
        let leftMin = this.leftMin
        let minWindow = leftMin / this.leftPercent
        let leftSize = this.leftPercent * width
        let rightSize = this.rightPercent * width
        this.leftSize = leftSize
        this.rightSize = rightSize
        let leftDiv = this.leftDiv
        let rightDiv = this.rightDiv

        console.log(width)
        console.log(leftDiv)
        console.log(rightDiv)
        if (width < minWindow){
            console.log('full sizes')
            leftDiv.style('width',width + 'px')
            rightDiv.style('width',width + 'px')
        } else {
            console.log('shared screen')
            leftDiv.style('width',leftSize + 'px')
            rightDiv.style('width',rightSize + 'px')
        }
    }
}