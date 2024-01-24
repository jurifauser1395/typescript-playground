"use strict";
class TakesPhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getRealTime() {
        return 9;
    }
}
class Insta extends TakesPhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        console.log('sepia');
    }
}
const socialMedia = new Insta('fast', 'nice');
socialMedia.getSepia();
