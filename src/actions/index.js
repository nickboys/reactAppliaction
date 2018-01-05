/**
 * Created by JianHuangsh on 2017/12/22.
 */

export function addCount() {
    return {type: 'INCREMENT'};
}

export function paly(song) {
    return {type: 'PLAY', song}

}

