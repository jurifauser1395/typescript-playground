abstract class TakesPhoto {
    constructor(
        public cameraMode: string,
        public filter: string
        
    ){}

    abstract getSepia(): void

    getRealTime(): number{
        return 9
    }
}


class Insta extends TakesPhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log('sepia')
    }
}

const socialMedia = new Insta('fast', 'nice')
socialMedia.getSepia()
