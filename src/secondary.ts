interface TakesPhoto {
    cameraMode: string
    filter: string
    burst: number
}


interface Story {
    createStory(): void
}

class Instagram implements TakesPhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakesPhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log('Story was created')
    }
}