export class Song {
    constructor(
        public id: number,
        public name: string,
        public artistName: string,
        public fileURL: string,
        public playbackTimes: number = 0,
    ) { }
}
