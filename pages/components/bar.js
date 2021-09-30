import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const AddMore = ({click}) => {
    return (
        <div className="bar__addmore" onClick={ click }/> 
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

const Bar = ({openMessages, openAdd, activeScreen }) => {
    let notifications = true
    let add = (activeScreen === "Messages") ? true : false

    return (
        <div className="bar space-between borders">
          <div className="bar__left">
              { (add) ? <DropList/> : true }
          </div>
          <div className="bar__right">
            { (add) ? <AddMore click={ openAdd }/> : true }
            { (notifications) ? <Notifications click={ openMessages } /> : true }
          </div>
        </div>
    )
}

export default Bar