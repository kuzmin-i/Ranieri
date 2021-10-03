import LineChart from "./lineChart"
import { lcData } from "../../data/linechart"

const AnalyticsScreen = () => {
    let dailyAv = 1500
    let pointProfit = 40000
    let pointInf = [
        {
            date: new Date(2021, 8, 5),
            sum: -10000
        },
        {
            date: new Date(2021, 8, 10),
            sum: 45000
        },
        {
            date: new Date(2021, 8, 18),
            sum: -8000
        }
    ]
    const datePeriod = {start: new Date(2021, 8, 1), end: new Date(2021, 8, 29)}

    const diffTime = Math.abs(datePeriod.end - datePeriod.start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let chartData = [{
        "id": "Бюджет",
        "color": "black",
        "data": []
    }, {
        "id": "М",
        "color": "black",
        "data": []
    }]

    
    const monthNames = ["Янв", "Фев", "Мар", "Апр", "Мая", "Июня",
  "Июля", "Авг", "Сен", "Окт", "Ноя", "Дек"
    ];

    for(let i=0; i<diffDays; i++) {
        let n = new Date(datePeriod.start.getTime())
        n.setDate(n.getDate() + i)
        let DateNam = (n.getDate() + ' ' + monthNames[n.getMonth()])
        
        chartData[0].data.push(
            {
                x: DateNam,
                y: pointProfit-dailyAv
            }
        ) 

        chartData[1].data.push(
            {
                x: DateNam,
                y: 0
            }
        ) 

        for(let v=0; v<pointInf.length; v++) {
            if(n.getTime() === pointInf[v].date.getTime()) {
                pointProfit += pointInf[v].sum
            }
        }

        pointProfit -= dailyAv
    }

    return (
        <div className="chart">
            <div className="chart__line">
                <LineChart data={ chartData }/>
            </div>
        </div>
    )
}

export default AnalyticsScreen