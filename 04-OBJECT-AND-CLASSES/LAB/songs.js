function solve(arrInfo) {
    class Song {
       constructor(typeList, name, duration) {
           this.typeList = typeList;
           this.name = name;
           this.duration = duration;
       }
    }

    let typeList = arrInfo.pop()
    let arrSongs = []

    for (let i = 1; i < arrInfo.length; i++){
        let [type, name, duration] = arrInfo[i].split('_')
        if (type === typeList || typeList === 'all') {
            arrSongs.push(name)
        }
    }

    return arrSongs.join('\n')
}

console.log(solve(
    [2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']
))