var ani = document.getElementById('ani')
var music = document.getElementById('aud')

var timer
var i=0
// 开始
function play() {
    music.play()
    if(!timer) {
        timer = setInterval(function () {
            ani.innerHTML = data[i]
            i++
            if (data.length==i) {
                i=0
                music.fastSeek()
            }
        },33.33333)
    }
}
// 停止

function stop () {
    clearInterval(timer)
    timer = null
    music.pause()

}
