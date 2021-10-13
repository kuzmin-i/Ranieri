import styled, { css } from 'styled-components'


const Comment = ({children, hidden}) => (
        <div className={`param1__comment ${(hidden) ? "hidden" : ""}`}>
            {children}
        </div>
)

const Btn = ({children, hidden}) => <div className={`param1__btn ${(hidden) ? "hidden" : ""}`}>{children}</div>
const HR = () => <div className="param1__hr"/>
const WhiteGradient = () => <div className="param1__gradient"/>

const LocalFooter = ({children}) => <div className="param1__footer">{children}</div>
LocalFooter.Comment = Comment
LocalFooter.Btn = Btn
LocalFooter.HR = HR
LocalFooter.WhiteGradient = WhiteGradient

const ChartCardFooter = ({btn, message}) => {
    return (
        <LocalFooter>
            <LocalFooter.WhiteGradient/>
            <LocalFooter.HR/>
            <LocalFooter.Btn hidden={!btn}>Перейти к графику</LocalFooter.Btn>
            <LocalFooter.Comment hidden={!message}>Пока берутся усредненные данные. Далее, вы сможете настроить более точные показатели</LocalFooter.Comment>
        </LocalFooter>
    )
}

export default ChartCardFooter