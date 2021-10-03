import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const AddMore = ({click}) => {
    return (
        <div className="bar__addmore" onClick={ click }/> 
    )
}

const Analytics = ({click}) => {
    return (
        <div className="bar__analytics" onClick={ click }/> 
    )
}

const Filter = ({click}) => {
    return (
        <div className="bar__filter" onClick={ click }/> 
    )
}

const Notifications = ({click}) => {
    return (
        <div className="bar__notification" onClick={ click }>
            <div className="bar__messages">1</div>
        </div>
    )
}

const DropList = () => {
    return (
        <DropdownButton id="dropdown-item-button" title="Все расходы">
            <Dropdown.ItemText>Все расходы</Dropdown.ItemText>
            <Dropdown.Item as="button">Мои покупки</Dropdown.Item>
            <Dropdown.Item as="button">Долги</Dropdown.Item>
        </DropdownButton>
    )
}

const Bar = ({openMessages, openAdd, openAnalytics, activeScreen }) => {
    let notifications = true
    let add = (activeScreen === "Messages" || activeScreen === 'Analytics') ? true : false
    let analytics = (activeScreen === "Messages") ? true : false

    return (
        <div className="bar space-between borders">
          <div className="bar__left">
              { (add) ? <Filter/> : true }
          </div>
          <div className="bar__right">
            { (add) ? <Analytics click={ openAnalytics }/> : true }
            { (add) ? <AddMore click={ openAdd }/> : true }
            { (notifications) ? <Notifications click={ openMessages } /> : true }
          </div>
        </div>
    )
}

export default Bar