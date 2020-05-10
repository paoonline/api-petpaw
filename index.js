const express = require('express');
const http = require('http');
const bodyParser =  require('body-parser');
const app = express()
const multer = require('multer');
const upload = multer()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload.single())

app.get('/product_list', (req, res, next) => {
    const MockProduct = [
        {
            Chairs: [
                {
                    id: 'c1',
                    productName: 'Amos Chair',
                    productDescription: 'A modren tak on tradition',
                    price: 680,
                    imageUrl: 'https://aumento.officemate.co.th/media/catalog/product/O/F/OFMA010470.jpg?imwidth=320'
                },
                {
                    id: 'c2',
                    productName: 'Kew Chair',
                    productDescription: 'A modren tak on tradition',
                    price: 580,
                    imageUrl: 'https://pronto-core-cdn.prontomarketing.com/433/wp-content/uploads/sites/2/2019/05/cane_chair-04_01.jpg'
                },
                {
                    id: 'c3',
                    productName: 'Nan Chair',
                    productDescription: 'A modren tak on tradition',
                    price: 280,
                    imageUrl: 'https://www.ikea.com/th/en/images/products/nordviken-chair__0714202_PE729964_S5.JPG'
                }
            ],
            Tables: [
                {
                    id: 't1',
                    productName: 'Amos Tables',
                    productDescription: 'A modren tak on tradition',
                    price: 780,
                    imageUrl: 'https://www.ikea.com/th/en/images/products/vangsta-extendable-table__0809397_PE771036_S5.JPG?f=xs'
                },
                {
                    id: 't2',
                    productName: 'Kew Tables',
                    productDescription: 'A modren tak on tradition',
                    price: 480,
                    imageUrl: 'https://cdn.shopify.com/s/files/1/2660/5202/products/xfg3azcsuyuhwvexza5h_87bb0ade-d151-41e7-9805-c27255314ae1_1400x.jpg?v=1571710219'
                }
            ],
            Sofa: [
                {
                    id: 's1',
                    productName: 'Amos Sofa',
                    productDescription: 'A modren tak on tradition',
                    price: 780,
                    imageUrl: 'https://www.ikea.com/th/en/images/products/friheten-corner-sofa-bed-with-storage__0175610_PE328883_S5.JPG'
                },
                {
                    id: 's2',
                    productName: 'Kew Sofa',
                    productDescription: 'A modren tak on tradition',
                    price: 480,
                    imageUrl: 'https://www.ikea.com/th/en/images/products/hemlingby-2-seat-sofa__0728848_PE736539_S5.JPG'
                }
            ],
            Bed : [
                {
                    id: 'b1',
                    productName: 'Amos Bed',
                    productDescription: 'A modren tak on tradition',
                    price: 780,
                    imageUrl: 'https://cdn.shopify.com/s/files/1/2660/5202/products/xoir1j2ihw9b4bw2apj5_a6ba22e9-258d-435e-86c6-7fadbe115a84_1400x.jpg?v=1571710381'
                },
                {
                    id: 'b2',
                    productName: 'Kew Bed',
                    productDescription: 'A modren tak on tradition',
                    price: 480,
                    imageUrl: 'https://media.4rgos.it/i/Argos/7093319_R_Z001A?w=750&h=440&qlt=70'
                }
            ]
        }
    ]
    res.send({ product:MockProduct })
})

// Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app)
server.listen(port)
console.log('Server listen on:', port)
