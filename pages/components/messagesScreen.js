const MessagesScreen = () => {
    const MessagesData = [
        {
            'date': 'Сегодня',
            'total': '520',
            'orders': [
                {
                    'debt': false,
                    'description': 'Продукты',
                    'author': 'me'
                }
            ]
        }
    ]

    return (
        <>  
        <div className="day">
        <div className="day__row day__header">
                <div className="day__left">Сегодня</div>
                <div className="day__right">
                    <div className="day__sum">-520 ₽</div>
                </div>
            </div>
            
            <div className="day__row">
                <div className="day__left">Продукты</div>
                <div className="day__right">
                    <div className="day__sum">-520 ₽</div>
                </div>
            </div>
            
            <div className="day__row day__incoming">
                <div className="day__left">
                    Продукты 
                    <div className="day__users">
                        <div className="day__user"/>
                        <div className="day__user"/>
                        <div className="day__user"/>
                    </div>
                </div>
                <div className="day__right">
                    <div className="day__sum">-520 ₽</div>
                </div>
            </div>
            
            <div className="day__row">
                <div className="day__left">dsfkjsd</div>
                <div className="day__right">
                    <div className="day__varsum">
                        <div className="day__varsumline">
                            <div className="day__sum var">-520 ₽</div>
                            <div className="day__arrowright"/>
                            <div className="day__sum">-520 ₽</div>
                        </div>
                    </div>
                </div>
                <div className="day__scroll"/>
            </div>
        </div>
        </>
    )
}

export default MessagesScreen