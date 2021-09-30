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

const Bar = ({notifications, add, openMessages, openAdd }) => {

    return (
        <div className="bar space-between borders">
          <div className="bar__left"></div>
          <div className="bar__right">
            { (add) ? <AddMore click={ openAdd }/> : true }
            { (notifications) ? <Notifications click={ openMessages } /> : true }
          </div>
        </div>
    )
}

export default Bar