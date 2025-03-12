function solve(arrInfo) {
    class Song {
       constructor(typeList, name, duration) {
           this.typeList = typeList;
           this.name = name;
           this.duration = duration;
       }
    }

    let typeListSong = arrInfo.pop()
    let arrSongs = []

    for (let i = 1; i < arrInfo.length; i++){
            let [type, name, duration] = arrInfo[i].split('_')

            let objSong = new Song(type, name, duration)

            if (objSong.typeList === typeListSong || typeListSong === 'all' ){
                arrSongs.push(objSong.name)
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