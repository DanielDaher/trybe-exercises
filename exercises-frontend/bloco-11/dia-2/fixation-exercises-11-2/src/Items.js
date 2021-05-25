import React from 'react';
import Order from './Order';

class Items extends React.Component {
    render() {

        const items = [
            {
                id: 102,
                user: "cena@gmail.com",
                product: "Razer Headphone",
                price: {
                    value: 99.99,
                    currency: "dollars"
                }
            },
            
            {
                id: 77,
                user: "cena@gmail.com",
                product: "Monster 500mL",
                price: {
                    value: 9.99,
                    currency: "dollars"
                }
            }
        ]
        
        return items.map((item) => <Order key={item.id} order={item}/>);
    }
}

export default Items;