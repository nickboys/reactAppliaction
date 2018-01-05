/**
 * Created by JianHuangsh on 2018/1/5.
 */
export class Song {
    constructor(id, name, title, url, singer) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.url = url;
        this.singer = singer;
    }
}


export function createSong(data) {
    return new Song(
        data.songid,
        data.songmid,
        data.songname,
        `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.albummid}.jpg?max_age=2592000`,
        data.interval,
        "",
        filterSinger(data.singer)
    );

}

function filterSinger(singers) {
    let singerArray = singers.map(singer => {
        return singer.name;
    });
    return singerArray.join("/");
}