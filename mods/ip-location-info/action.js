!(function() {
    let key = ILI_CONFIG.amap_api_key

    if (!axios) {
        _hbp_logger.error('axios is not loaded!')
        return
    }

    if (!key) {
        _hbp_logger.error('amap_api_key is not configured!')
        return
    }

    const calcDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // 地球半径，单位为公里
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // 距离单位为公里
        return distance;
    }

    let loctaionDom = document.getElementById('ip-location-info-loc')
    let distanceDom = document.getElementById('ip-location-info-distance')
    let liveLat = ILI_CONFIG.live_lat_lng[0]
    let liveLng = ILI_CONFIG.live_lat_lng[1]

    axios.get(`https://restapi.amap.com/v3/ip?key=${key}&output=json`).then(res => {
        let info = res.data
        let lngLat1 = info.rectangle.split(';')[0]
        let lngLat2 = info.rectangle.split(';')[1]
        let lng1 = lngLat1.split(',')[0] - 0
        let lat1 = lngLat1.split(',')[1] - 0
        let lng2 = lngLat2.split(',')[0] - 0
        let lat2 = lngLat2.split(',')[1] - 0

        loctaionDom.innerText = info.province + info.city
        distanceDom.innerText = calcDistance(liveLat, liveLng, (lat1 + lat2) / 2, (lng1 + lng2) / 2).toFixed(2)
    }).catch(err => {
        _hbp_logger.error(err)
    })
})()
