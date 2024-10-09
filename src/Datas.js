

let xAxisData = [
    {
        "name": 'jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 125_000
    },
    {
        "name": 'Mar',
        "Sale": 140_000
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'jun',
        "Sale": 85_000
    },
    {
        "name": 'jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 118_000
    },
    {
        "name": 'Sep',
        "Sale": 12_000
    },
    {
        "name": 'Oct',
        "Sale": 73_000
    },
    {
        "name": 'Nov',
        "Sale": 25_000
    },
    {
        "name": 'Dev',
        "Sale": 66_000
    },
]

const transaction = [
    {
        id: 1,
        customer: 'Alireza Imani',
        data: '12 jun 2024',
        amount: 123,
        status: 'Declined'
    },
    {
        id: 2,
        customer: 'Ali porkarimi',
        data: '24 jun 2024',
        amount: 123,
        status: 'Approved'
    },
    {
        id: 3,
        customer: 'reza Imani',
        data: '1 jun 2023',
        amount: 123,
        status: 'Pending'
    },
    {
        id: 4,
        customer: 'shahab mosavi',
        data: '5 Sep 2024',
        amount: 123,
        status: 'Declined'
    }
]

const userRow = [
    {
        id: 1,
        username: 'alireza imani',
        avatar: './20240501_175315.jpg',
        status: 'active',
        transation: '$0',
        email: 'alireza@gmail.com'
    },
    {
        id: 2,
        username: 'shahab imani',
        avatar: './20240501_175315.jpg',
        status: 'non-active',
        transation: '$0',
        email: 'alireza@gmail.com'
    },
    {
        id: 3,
        username: 'alimohammad imani',
        avatar: './20240501_175315.jpg',
        status: 'active',
        transation: '$0',
        email: 'alireza@gmail.com'
    },
    {
        id: 4,
        username: 'ali akbari',
        avatar: './20240501_175315.jpg',
        status: 'non-active',
        transation: '$0',
        email: 'alireza@gmail.com'
    },
    {
        id: 5,
        username: 'hosein zamani',
        avatar: './20240501_175315.jpg',
        status: 'active',
        transation: '$0',
        email: 'alireza@gmail.com'
    }
]

const products = [
    {
        id: 1,
        title: 'acer',
        avatar: '/acer.jpg',
        price: '$890'
    },
    {
        id: 2,
        title: 'hp',
        avatar: '/hp.jpg',
        price: '$960'
    },
    {
        id: 3,
        title: 'asus',
        avatar: '/asus.jpg',
        price: '$750'
    },
    {
        id: 4,
        title: 'del',
        avatar: '/del.jpg',
        price: '$865'
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 5000
    },
    {
        name: 'Feb',
        sales: 3000
    },
    {
        name: 'Mar',
        sales: 4000
    },
]

export { xAxisData, transaction, userRow, products,productsData }