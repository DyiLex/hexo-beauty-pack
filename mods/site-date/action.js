(function(){
    if (!dateFns) return

    let dateContainer = document.getElementById('site-date')
    let dateDiv = dateContainer.children[0]
    let timeDiv = dateContainer.children[1]
    let dayDiv = dateContainer.children[2]

    let loopDate = () => {
        let now = new Date()
        dateDiv.innerText = dateFns.format(now, 'M/d')
        timeDiv.innerText = dateFns.format(now, 'HH:mm:ss')
        dayDiv.innerText = '周' + ['日', '一', '二', '三', '四', '五', '六'][dateFns.getDay(now)]
    }

    loopDate()

    setInterval(loopDate, 1000)
})()
