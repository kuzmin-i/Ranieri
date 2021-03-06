import LineChart from "./lineChart"
import { lcData } from "../../data/linechart"

import SwitchToogle from "./switchToogle"
import { useEffect, useState } from "react"
import Param1 from "./param1"

import Slider from "@farbenmeer/react-spring-slider";
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ChartCardFooter from "./ChartCardFooter"

import styled from 'styled-components';


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

const ChartCardClose = styled.div`
    position: absolute;
    top: -17px;
    right: 15px;
    font-size: 1remж
    font-weight: 500;
    color: #7141FB
`


const SliderComponent = ({mainSettings, onboardStatus}) => {
    const [MainSettingsStatus, setMainSettings] = mainSettings
    const [isActiveFooterBtn, setActiveFooterBtn] = useState(false)
    const [isActiveMessage, setActiveMessage] = useState(false)
    const onSlideChange = (index) => {
        const startIndex = (onboardStatus) ? 0 : -1
        const newIndex = (index) ? startIndex+index : 0;

        (newIndex === 5) ? setActiveFooterBtn(true) : setActiveFooterBtn(false);
        (newIndex === 1) ? setActiveMessage(true) : setActiveMessage(false)
    }

    let onBoardSlide 
    
    

    if(onboardStatus) onBoardSlide = (
        <div className="chart__carditem">
            <h2>
                <span>В графике пока нет данных о вашей финансовой активности</span>
                <br/><br/>
                <b>Для настройки графика необходимо пройти всего 5 шагов <img src="/d/onboard_arrow.svg"/></b>
            </h2>
        </div>
    )

    return (
        <div className="chart__slider">
            {(!onboardStatus) ? <ChartCardClose onClick={() => setMainSettings(false)}>Готово</ChartCardClose> : <></>}
            <ChartCardFooter 
                btn={isActiveFooterBtn} 
                message={isActiveMessage}
                showSettings={setMainSettings}
            />
            <Slider
                hasBullets
                BulletComponent={BulletComponent}
                onSlideChange={onSlideChange}
            >
                {onBoardSlide}
                <div className="chart__carditem">
                    
                    <h2>
                        <span>Введите </span>
                        <b>средние ежедневные траты</b>
                    </h2>
                    <h4>К примеру, карманные расходы на питание, бензин и жвачку "Орбит" из Пятерочки на углу</h4>
                
                    
                    <div className="chart__cardmaincontent">
                    <Param1 
                        placeholder={1500}
                    />
                    </div>
                    
                </div>
                <div className="chart__carditem">
                    
                    <h2>
                        <span>Какие у вас </span>
                        <b>фиксированные доходы в&nbsp;месяц</b>
                    </h2>
                    <h4>К примеру, зарплата на основной работе</h4>
                
                    <div className="chart__cardmaincontent">
                        <Param1 
                            data={[
                                {
                                    sum: 40000,
                                    date: 5
                                },
                                {
                                    sum: 40000,
                                    date: 20
                                }
                            ]}
                            placeholder={20000}
                            addmore={true}
                            cycle={true}
                        />
                    </div>
                </div>
                <div className="chart__carditem">
                    <h2>
                        <span>Введите </span>
                        <b>фиксированные ежемесячные расходы</b>
                    </h2>
                    <h4>К примеру, кредиты, оплата за квартиру и так далее</h4>
                    <Param1 
                        data={[
                            {
                                sum: 40000,
                                date: 5
                            },
                            {
                                sum: 40000,
                                date: 20
                            },
                            {
                                sum: 40000,
                                date: 20
                            },
                            {
                                sum: 40000,
                                date: 20
                            },
                            {
                                sum: 40000,
                                date: 20
                            },
                        ]}
                        placeholder={20000}
                        addmore={true}
                        cycle={true}
                    />
                </div>
                <div className="chart__carditem">
                    <h2>
                        <span>Какой для вас </span>
                        <b>минимальный бюджет </b>
                        <span>на&nbsp;карте</span>
                    </h2>
                    <h4>т.е. минимальный порог, ниже которого вы уже чувствуете себя некомфортно и нужно подсуетиться по допзаработку</h4>
                    <Param1 
                        data={[]}
                        placeholder={15000}
                    />
                </div>
                <div className="chart__carditem">
                    <h2>
                        <span>Желаемый для&nbsp;вас </span>
                        <b>уровень дохода </b>
                        <span>в&nbsp;ближайшее время</span>
                    </h2>
                    <h4>Этот уровень будет отображаться на графике и поможет представить, сколько еще нужно поднажать по заработку</h4>
                    <Param1 
                        data={[]}
                        placeholder={200000}
                    />
                </div>
            </Slider>
        </div>
	);
}

const Tile = ({children}) => (<div className="whitecard">{children}</div>)
Tile.Header = ({children}) => (<div className="whitecard__header">{children}</div>)
Tile.Title = ({children}) => (<span>{children}</span>)
Tile.Icon = ({iconPath}) => (<div style = {(iconPath) ? {backgroundImage: `url('${iconPath}')`} : {}} className="whitecard__cornerIcon"/>)
Tile.Menu = ({children}) => (<div className="whitecard__menu">{children}</div>)
Tile.Item = ({children, iconPath, ...props}) => (
    <div className="whitecard__item" {...props}>
        <div>
            {(iconPath) ? <div style={{backgroundImage: `url('${iconPath}')`}} className="isIcon"/> : <></>}
            {children}
        </div>
    </div>
)

const AnalyticsScreen = () => {
    const [MainSettingsStatus, setMainSettings] = useState(false)
    const [onboardWindow, showOnboardWindow] = useState(false)

    useEffect(
        () => {
          let showIntroModal = setTimeout(() => {
              setMainSettings(true)
              showOnboardWindow(true)
          }, 500);
          
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
        <Tile>
            <Tile.Header>
                <Tile.Title>Финансовая активность</Tile.Title>
                <Tile.Icon iconPath="/d/fullscreen.svg"/>
            </Tile.Header>
            <SwitchToogle top={24} tabs={['За текущий месяц', 'За период']}/>
            <div className="chart">
                <div className="chart__line">
                    
                    <LineChart data={ chartData }/>
                </div>
            </div>
        </Tile>
        
        <Tile>
            <Tile.Header>
                <Tile.Title>Вводные данные</Tile.Title>
            </Tile.Header>
            <Tile.Menu>
                <Tile.Item 
                    onClick={() => {
                        setMainSettings(true)
                        showOnboardWindow(false)
                    } }
                    iconPath="/d/main_settings.svg">
                    Основные настройки
                </Tile.Item>
                <Tile.Item iconPath="/d/point-settings.svg">
                    Разовые траты / доходы
                </Tile.Item>
            </Tile.Menu>
        </Tile>

        <Modal
            show={MainSettingsStatus}
            onHide={() => setIntro(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
                <SliderComponent 
                    mainSettings={[MainSettingsStatus, setMainSettings]} 
                    onboardStatus={onboardWindow}
                />
            </Modal.Body>
        </Modal>
        </>
    )
}

export default AnalyticsScreen