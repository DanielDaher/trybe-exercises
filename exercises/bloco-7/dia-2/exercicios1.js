const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

/*   console.log(Object.values(order));
 */  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const ana = Object.values(order)[3].delivery.deliveryPerson;
    Object.values(order)[3].delivery.price = 10;
    const newPrice = Object.values(order)[3].delivery.price;
    const rafael = Object.values(order)[0];
    const telefone = Object.values(order)[1];
    const endereco = Object.values(order)[2];
    console.log(`Olá ${ana}, entrega para ${rafael}, telefone ${telefone}, ${endereco.street}, número ${endereco.number}, apartamento ${endereco.apartment}. O preço é ${newPrice} reais.`);
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);