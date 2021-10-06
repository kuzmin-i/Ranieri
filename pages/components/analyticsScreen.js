import LineChart from "./lineChart"
import { lcData } from "../../data/linechart"

import SwitchToogle from "./switchToogle"
import { useEffect, useState } from "react"
import Param1 from "./param1"

import Slider from "@farbenmeer/react-spring-slider";
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';


const BulletComponent = ({ onClick, isActive }) => (
    <li
        style={{
            width: "8px",
            height: "8px",
            borderRadius: "10px",
            backgroundColor: "black",
            margin: "0 6px",
            opacity: (isActive) ? 1 : .3,
        }}
        onClick={onClick}
    />
);

BulletComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};

const SliderComponent = () => {
    return (
        <div className="chart__slider">
            <Slider
                hasBullets
                BulletComponent={BulletComponent}
            >
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
                <div className="chart__carditem">
                    <Param1 
                        data={[]}
                        label={'Введите ежемесячный доход / зарплату'}
                        placeholder={20000}
                        addmore={true}
                        cycle={true}
                    />
                </div>
                <div className="chart__carditem">
                    <Param1 
                        data={[]}
                        label={'минимальная сумма для выживания'}
                        placeholder={20000}
                        addmore={true}
                        cycle={true}
                    />
                </div>
            </Slider>
        </div>
	);
}

const AnalyticsScreen = () => {
    const [introStatus, setIntro] = useState(false)

    useEffect(
        () => {
          let showIntroModal = setTimeout(() => setIntro(true), 500);
          
          return () => {
            clearTimeout(showIntroModal);
          };
        },
        []
      );

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
        <div className="whitecard">
            <SwitchToogle tabs={['За текущий месяц', 'За период']}/>
            <div className="chart">
                <div className="chart__line">
                    
                    <LineChart data={ chartData }/>
                </div>
            </div>
        </div>
        
        <div className="chart__cardblock">
            <SliderComponent/>
        </div>

        <Modal
            show={introStatus}
            onHide={() => setIntro(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
                <SliderComponent/>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default AnalyticsScreen