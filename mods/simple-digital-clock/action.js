if (!dayjs) {
    _hbp_logger.warn('dayjs is not loaded!')
    return
}

let dateContainer = document.getElementById('simple-digital-clock')
let dateDom = dateContainer && dateContainer.children[0]
let timeDom = dateContainer && dateContainer.children[1]
let dayDom = dateContainer && dateContainer.children[2]
let meridiemDom

if (!CONFIG_SDC.time_format_24_hour) {
    meridiemDom = dayDom.children[1]
    dayDom = dayDom.children[0]
}

if (!(dateContainer && dateDom && timeDom && dayDom)) {
    _hbp_logger.warn('Target dom is not exist!')
    return
}

let tickTock = () => {
    let now = dayjs()
    dateDom.innerText = now.format('M/D')
    timeDom.innerText = now.format(meridiemDom ? 'hh:mm:ss': 'HH:mm:ss')
    dayDom.innerText = '周' + ['日', '一', '二', '三', '四', '五', '六'][now.day()]
    meridiemDom && (meridiemDom.innerText = now.hour() < 12? '上午': '下午')

    setTimeout(tickTock, 1000);
}

tickTock()
