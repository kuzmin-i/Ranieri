const Param1 = ({data, label, placeholder, addmore, cycle}) => {
    const _placeholder = (placeholder) ? placeholder : '1000'
    const _label = (label) ? label : 'Введите параметр'

    const addmoreComp = (
        <div className="param1__addmore param1__block">
                Добавить еще
        </div>
    )

    const cycleComp = (
        <div className="param1__datebtn">Каждое 15-е число</div>
    )

    return (
        <div className="param1">
            <div className="param1__block">
                <input className="param1__input" type="text" placeholder={_placeholder + ' ₽'}/>
                {(cycle) ? cycleComp : <></>}
            </div>
            {(addmore) ? addmoreComp : <></>}
            

        </div>
    )
}

export default Param1