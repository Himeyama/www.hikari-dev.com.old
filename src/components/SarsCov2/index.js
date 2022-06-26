const range = (start, stop, step) => Array.from(
    { length: (stop - start) / step + 1},
    (_, i) => start + (i * step)
);

function index_date(data_list){
    let date = data_list.map(x => 
        [
            new Date(Date.parse(x["公表日"])),
            x["居住地"]
        ]
    )
    let first_date = date[0][0]
    let last_date = date[date.length - 1][0]
    let ary_len = parseInt((last_date - first_date) / 86400_000)
    let idx_date = range(0, ary_len, 1)
    let date_i = new Date(first_date)
    let i = 0
    while(date_i <= last_date){
        idx_date[i] = new Date(date_i)
        date_i.setDate(date_i.getDate() + 1)
        i += 1
    }
    return idx_date
}

// エリアごとの陽性者数 (配列)
function n_positives_area(
    data_list,
    area,
    index_date
){
    let area_data = {}
    for(let entry of data_list){
        if(entry['居住地'] == area){
            date_str = (new Date(Date.parse(entry['公表日']))).toISOString()
            if(typeof(area_data[date_str]) === 'undefined'){
                area_data[date_str] = 1
            }else{
                area_data[date_str] += 1
            }
        }
    }
    area_data_ary = index_date.slice()
    let i = 0
    for(let date of index_date){
        date_str = (new Date(Date.parse(date))).toISOString()
        n_positive = area_data[date_str]
        if(typeof(n_positive) === 'undefined'){
            area_data_ary[i] = 0
        }else{
            area_data_ary[i] = n_positive
        }
        i += 1
    }
    return area_data_ary
}

function n_positives_areas(data_list){
    let idx_date = index_date(data_list)
    let areas = ["岩国市", "下関市", "周南市", "山口市", "下松市", "防府市", "宇部市",
        "光市", "山陽小野田市", "柳井市", "平生町", "周防大島町", "美祢市",
        "和木町", "田布施町", "長門市", "萩市", "上関町", "阿武町"]
    let datasets = []
    let colors = ["#F44336", "#E91E63", "#9C27B0", "#673Ab7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"]
    let i = 0
    for(let area of areas){
        entry = {
            "label": area, 
            "data": [...n_positives_area(data_list, area, idx_date)],
            "borderColor": colors[i],
            "backgroundColor": colors[i]
        }
        datasets.push(entry)
        i += 1
    }
    return datasets
}

exports.to_chartjs_obj = function (data_list, period){
    let idx_date = index_date(data_list).map(e => {
        return `${e.getYear() + 1900}-${e.getMonth() + 1}-${e.getDate()}`
    })
    let datasets = n_positives_areas(data_list)

    if(period != -1){
        idx_date = idx_date.slice(-period-1, -1)
        for(let dataset of datasets){
            dataset.data = dataset.data.slice(-period-1, -1)
        }
    }

    let chartjs_data = {
        "labels": idx_date,
        "datasets": datasets
    }
    return chartjs_data
}
