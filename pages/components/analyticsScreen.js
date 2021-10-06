import LineChart from "./lineChart"
import { lcData } from "../../data/linechart"

import SwitchToogle from "./switchToogle"
import { useSpringCarousel } from 'react-spring-carousel-js'
import { useEffect, useState } from "react"
import Param1 from "./param1"

const SliderComponent = () => {
    const items = [
        {
            id: "CarouselItem-0",
            renderItem: (
                <div className="chart__carditem">
                    В графике пока нет данных, 
                    поэтому&nbsp;он пуст <br/>
                    <b>5 шагов, и график будет заполнен!</b>
                    <hr/>
                    <Param1 
                        data={[]}
                        label={'Введите средние траты за день'}
                        placeholder={825}
                        addmore={false}
                        cycle={false}
                    />
                </div>
            ),
          },
          {
            id: "CarouselItem-1",
            renderItem: (
                <div className="chart__carditem">
                    <Param1 
                        data={[]}
                        label={'Введите ежемесячный доход / зарплату'}
                        placeholder={20000}
                        addmore={true}
                        cycle={true}
                    />
                </div>
            ),
          },
          {
            id: "CarouselItem-2",
            renderItem: (
                <div className="chart__carditem">
                    <Param1 
                        data={[]}
                        label={'Введите ежемесячные кредиты / оплаты'}
                        placeholder={20000}
                        addmore={true}
                        cycle={true}
                    />
                </div>
            ),
          },
          {
            id: "CarouselItem-3",
            renderItem: (
                <div className="chart__carditem">
                    <Param1 
                        data={[]}
                        label={'минимальная сумма для выживания'}
                        placeholder={20000}
                        addmore={true}
                        cycle={true}
                    />
                </div>
            ),
          },
    ]

   
    

    const { carouselFragment, getIsActiveItem } = useSpringCarousel({
      withThumbs: false,
      items: items,
    });

    const [ActiveBullet, setActiveBullet] = useState('CarouselItem-0')
    const BullArray = ["CarouselItem-0", "CarouselItem-1", "CarouselItem-2", "CarouselItem-3"]

    let itemBullets = []
    for(let b in items) {
        let bulletsClass = ('CarouselItem-'+b === ActiveBullet) ? 'chart__bullet selected' : 'chart__bullet'

        itemBullets.push(
            <div key={"cardbullet"+b} className={bulletsClass}/>
        )
    }

    useEffect(() => {
        for(let b in BullArray) {
            let sumup = 'CarouselItem-'+b
            if(getIsActiveItem('CarouselItem-'+b)) {
                console.log('L' + sumup)
                setActiveBullet(sumup)
            }
        }
    })
  
    return (
        <>
        <div className="chart__bullets">
            {itemBullets}
        </div>
        <div className="chart__slider">{carouselFragment}</div>
        </>
    );
}

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
    let datePeriod = {start: new Date(2021, 8, 1), end: new Date(2021, 8, 29)}
    const dateUPeriod = {start: datePeriod.start.setDate(datePeriod.start.getDate()-3), end: datePeriod.end.setDate(datePeriod.start.getDate()+3)}

    const diffTime = Math.abs(datePeriod.end - datePeriod.start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let chartData = [{
        "id": "Budget",
        "color": "#ff0000",
        "data": []
    }, {
        "id": "Predict",
        "color": "#00ff00",
        "data": []
    }]

    
    const monthNames = ["Янв", "Фев", "Мар", "Апр", "Мая", "Июня",
  "Июля", "Авг", "Сен", "Окт", "Ноя", "Дек"
    ];

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    let ikKey = 19
    let fKey = 0

    for(let i=0; i<diffDays; i++) {
        let n = new Date(datePeriod.start.getTime())
        n.setDate(n.getDate() + i)
        let DateNam = formatDate(n.getTime())
        
        chartData[fKey].data.push(
            {
                x: DateNam,
                y: pointProfit-dailyAv
            }
        ) 

        if(i === ikKey) {
            fKey += 1
            chartData[fKey].data.push(
                {
                    x: DateNam,
                    y: pointProfit-dailyAv
                }
            ) 

        }

        for(let v=0; v<pointInf.length; v++) {
            if(n.getTime() === pointInf[v].date.getTime()) {
                pointProfit += pointInf[v].sum
            }
        }

        pointProfit -= dailyAv
    }


    


    return (
        <>
        <SwitchToogle tabs={['За текущий месяц', 'За период']}/>
        <div className="chart">
            <div className="chart__line">
                
                <LineChart data={ chartData }/>
            </div>
        </div>
        <div className="chart__greybox">
            <div className="chart__cardblock">
                <SliderComponent/>
            </div>
        </div>
        </>
    )
}

export default AnalyticsScreen