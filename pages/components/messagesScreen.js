import {users} from '../data/users'

const MessagesScreen = () => {
    

    const MessagesData = [
        {
            'date': 'Сегодня',
            'total': '520',
            'orders': [
                {
                    'description': 'Продукты',
                    'author': 'me',
                    'sum': '320'
                },
                {
                    'description': 'Бензин',
                    'author': 'me',
                    'sum': '450'
                },
                {
                    'description': 'На подарок',
                    'share': true,
                    'users': ['me', 'yurii', 'kristina'],
                    'author': 'me',
                    'sum': '450',
                    'varsum': '800'
                },
                {
                    'description': 'Продукты',
                    'income': true,
                    'author': 'yurii',
                    'sum': '470'
                }
            ]
        },
        {
            'date': 'Вчера',
            'total': '520',
            'orders': [
                {
                    'description': 'Продукты',
                    'author': 'me',
                    'sum': '320'
                },
                {
                    'description': 'Бензин',
                    'author': 'me',
                    'sum': '450'
                },
                {
                    'description': 'На подарок',
                    'share': true,
                    'users': ['me', 'yurii', 'kristina'],
                    'author': 'me',
                    'sum': '450',
                    'varsum': '800'
                },
                {
                    'description': 'Продукты',
                    'income': true,
                    'author': 'yurii',
                    'sum': '470'
                }
            ]
        },
        {
            'date': '28 сентября',
            'total': '520',
            'orders': [
                {
                    'description': 'Продукты',
                    'author': 'me',
                    'sum': '320'
                },
                {
                    'description': 'Бензин',
                    'author': 'me',
                    'sum': '450'
                },
                {
                    'description': 'На подарок',
                    'share': true,
                    'users': ['me', 'yurii', 'kristina'],
                    'author': 'me',
                    'sum': '450',
                    'varsum': '800'
                },
                {
                    'description': 'Продукты',
                    'income': true,
                    'author': 'yurii',
                    'sum': '470'
                }
            ]
        },
    ]

    let daysData = []

    for(let i=0; i<MessagesData.length; i++) {

        let ordersData = []

        for(let b=0; b<MessagesData[i].orders.length; b++) {
            let usersList
            
            if(MessagesData[i].orders[b].share) {
                let usersComps = []

                for(let c=0; c<MessagesData[i].orders[b].users.length; c++) {
                    let userPhoto = users[MessagesData[i].orders[b].users[c]].avatar
                    let user = <div key={"Day"+i+"_Row"+b+"_User"+c} className="day__user" style={{background: 'url("' + userPhoto + '")', backgroundSize: 'contain'}}/>

                    usersComps.push(user)
                }

                usersList = (
                    <div key={"Day"+i+"_usersList"+b} className="day__users">
                            { usersComps }
                    </div>
                )
            }

            let incomeClass = (MessagesData[i].orders[b].income) ? ' day__incoming' : ''
            
            let sumBlock = (<div className="day__sum">-{ MessagesData[i].orders[b].sum } ₽</div>)
            let scrollBlock = (<></>)
            if(MessagesData[i].orders[b].share && MessagesData[i].orders[b].varsum) {
                sumBlock = (
                    <div className="day__varsum">
                        <div className="day__varsumline">
                            <div className="day__sum var">-{ MessagesData[i].orders[b].varsum } ₽</div>
                            <div className="day__arrowright"/>
                            <div className="day__sum">-{ MessagesData[i].orders[b].sum } ₽</div>
                        </div>
                    </div>
                )

                scrollBlock = (<div className="day__scroll"/>)
            }

            let orderDOM = (
                <div key={"day"+i+"_row"+b} className={"day__row" + incomeClass}>
                    <div className="day__left">{ MessagesData[i].orders[b].description.substr(0, 8) } { usersList }</div>
                    <div className="day__right">
                        {
                            sumBlock
                        }
                    </div>
                    { scrollBlock }
                </div>
            )

            ordersData.push(orderDOM)
        }


        daysData.push(
            <div key={"day"+i} className="day">
                <div className="day__row day__header">
                    <div className="day__left">{ MessagesData[i].date }</div>
                    <div className="day__right">
                        <div className="day__sum">-{ MessagesData[i].total } ₽</div>
                    </div>
                </div>

                {
                    ordersData
                }
            </div>
        )
    }

    return (
        <>
            { daysData }
        </>
    )

    /*

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
    */
}

export default MessagesScreen