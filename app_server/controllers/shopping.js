/*Controladores para la Collection Locations*/

/*GET -> Shopping Cart*/
/*
const cart = (req, res) => {
    res.render('shopping-cart', { title: 'Shopping Cart' });
}



const checkout = (req, res) => {
    res.render('shopping-cart', { title: 'Checkout' });
}




const tracking = (req, res) => {
    res.render('shopping-cart', { title: 'Track Your Order' });
}



const ordercomplete = (req, res) => {
    res.render('shopping-cart', { title: 'Order Complete' });
}

*/

const cart = (req, res) => {
    res.render('shopping-cart', { title: 'Shopping Cart' });
}



const checkout = (req, res) => {
    res.render('checkout', { title: 'Checkout' });
}




const tracking = (req, res) => {
    res.render('tracking', { title: 'Track Your Order' });
}



const ordercomplete = (req, res) => {
    res.render('ordercomplete', { title: 'Order Complete' });
}

module.exports = {
    //separador de módulos con una "COMA"
    cart,
    checkout,
    tracking,
    ordercomplete

}