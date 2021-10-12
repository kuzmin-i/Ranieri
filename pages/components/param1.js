const BlockCom = ({sum, date, cycle, placeholder}) => {
    const _placeholder = (placeholder) ? placeholder : '1000'


    const cycleComp = (cycle) ? (
        <div className="param1__datebtn">Каждое {date}-е число</div>
    ) : <></>

    return (
        <div className="param1__block">
            <input className="param1__input" type="text" placeholder={_placeholder + ' ₽'} defaultValue={(sum)?sum+' ₽':''}/>
            {(cycle) ? cycleComp : <></>}
        </div>
    )}

const Param1 = ({data, label, placeholder, addmore, cycle}) => {
    const IfData = (Array.isArray(data) && data.length > 0) ? true : false

    const addmoreComp = (
        <div className="param1__addmore param1__block">
                Добавить еще
        </div>
    )

    let dataBlocks = false
    if(data) {
        if(data.length > 0) {
            dataBlocks = [...data].map((key, i) => {
                return <BlockCom key={"BlockComp"+i} sum={key.sum} date={key.date} cycle={cycle} placeholder={placeholder}/>
            })
        }
    }

    return (
        <div className="param1">
            <div className="param1__line">
                {(IfData) ? dataBlocks : <BlockCom cycle={cycle} placeholder={placeholder}/>}
                {(addmore) ? addmoreComp : <></>}
            </div>
        </div>
    )
}

export default Param1