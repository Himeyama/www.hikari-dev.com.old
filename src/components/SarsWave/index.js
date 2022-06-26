import React from 'react';
import { useState, useEffect } from 'react';
import sarscov2 from '@site/src/components/SarsCov2'
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Chart.register(...registerables)

function TabCov2City({sumCities, sumCities7}){
    let cityNames = ["下関市", "宇部市", "山口市", "萩市", "防府市", "下松市",
        "岩国市", "光市", "長門市", "柳井市", "美祢市", "周南市", "山陽小野田市", "..."]
    let townNames = ["周防大島町", "和木町", "上関町", "田布施町", "平生町", "阿武町"]

    let render = []
    for(let cityName of cityNames){
        if(cityName != "..."){
            render.push(
                <TabItem value={cityName} label={cityName.slice(0, -1)}>
                    <p>陽性者合計: {sumCities[cityName]} 人</p>
                    <p>陽性者 1 日平均 (過去 1 週間): {(sumCities7[cityName] / 7).toFixed(2)} 人</p>
                </TabItem>
            )
        }else{
            let child_render = []
            for(let townName of townNames){
                child_render.push(
                    <TabItem value={townName} label={townName.slice(0, -1)}>
                        <p>陽性者合計: {sumCities[townName]} 人</p>
                        <p>陽性者 1 日平均 (過去 1 週間): {(sumCities7[townName] / 7).toFixed(2)} 人</p>
                    </TabItem>
                )
            }
            render.push(
                <TabItem value="etc" label="その他">
                    <Tabs>{child_render}</Tabs>
                </TabItem>
            )
        }
        
    }

    return(
        <Tabs>{render}</Tabs>
    );
}

export default function Cov2Wave() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [cov2dataAll, setCov2DataAll] = useState({})
    const [cov2dataAYear, setCov2DataAYear] = useState({})
    const [cov2dataHalfYear, setCov2DataHalfYear] = useState({})
    const [cov2data30Days, setCov2Data30Days] = useState({})
    const [cov2data14Days, setCov2Data14Days] = useState({})
    const [cov2data7Days, setCov2Data7Days] = useState({})
    const [sumCities, setSumCities] = useState({})
    const [sumCities7, setSumCities7] = useState({})

    useEffect(() => {
        fetch("https://nishidayoshikatsu.github.io/covid19-yamaguchi-opendata/patients.json")
            .then(res => res.json())
            .then(
                (result) => {
                    let data_list = result['data']
                    let chartjs_data = sarscov2.to_chartjs_obj(data_list, -1)
                    setCov2DataAll(chartjs_data)
                    setCov2DataAYear(sarscov2.to_chartjs_obj(data_list, 365))
                    setCov2DataHalfYear(sarscov2.to_chartjs_obj(data_list, 183))
                    setCov2Data30Days(sarscov2.to_chartjs_obj(data_list, 30))
                    setCov2Data14Days(sarscov2.to_chartjs_obj(data_list, 14))
                    setCov2Data7Days(sarscov2.to_chartjs_obj(data_list, 7))

                    // 全期間の合計
                    let sumCities = {}
                    for(let city of chartjs_data.datasets){
                        let nPositive = city.data.reduce(function(sum, element){
                            return sum + element;
                        }, 0)
                        let cityName = city.label
                        sumCities[cityName] = nPositive
                    }
                    sumCities["合計"] = Object.values(sumCities).reduce(function(sum, element){
                        return sum + element;
                    }, 0)
                    setSumCities(sumCities)

                    // 1週間の合計
                    let sumCities7 = {}
                    for(let city of chartjs_data.datasets){
                        let nPositive = city.data.slice(-8, -1).reduce(function(sum, element){
                            return sum + element;
                        }, 0)
                        let cityName = city.label
                        sumCities7[cityName] = nPositive
                    }
                    setSumCities7(sumCities7)


                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const options = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div>
                <h2>読み込み中...</h2>
            </div>
        );
    } else {
        return (
            <div>
                <h2>陽性者合計 {sumCities["合計"]} 人</h2>
                <Tabs>
                    <TabItem value="all" label="全期間">
                        <Line data={cov2dataAll} options={options} />
                    </TabItem>
                    <TabItem value="a-year" label="1 年">
                        <Line data={cov2dataAYear} options={options} />
                    </TabItem>
                    <TabItem value="half-year" label="半年">
                        <Line data={cov2dataHalfYear} options={options} />
                    </TabItem>
                    <TabItem value="30days" label="30 日" default>
                        <Line data={cov2data30Days} options={options} />
                    </TabItem>
                    <TabItem value="14days" label="14 日">
                        <Line data={cov2data14Days} options={options} />
                    </TabItem>
                    <TabItem value="7days" label="7 日">
                        <Line data={cov2data7Days} options={options} />
                    </TabItem>
                </Tabs>
                <TabCov2City sumCities={sumCities} sumCities7={sumCities7} />
            </div>
        );
    }
}
