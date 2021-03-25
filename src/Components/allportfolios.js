import port1 from '../img/portImages/logo.png';
import port2 from '../img/portImages/terraform.jpg';
import port3 from '../img/portImages/esp.jpg';


const portfolios = [
    {
        id: 1,
        category: 'Business',
        link1: 'https://theclearicecompany.com',
        link2: 'https://instagram.com/theclearicecompany/',
        icon1: 'Site',
        icon2: 'Insta',
        image: port1,
        title: 'Clear Ice Company',
        description: 'Self Bootstraped Company'
    },
    {
        id: 2,
        category: 'Terraform',
        link1: 'https://github.com/San-Jose-Technology-Group/Terraform_Workshop',
        icon1: 'Code',
        icon2: 'Demo',
        image: port2,
        title: 'Terraform Workshop',
        description: 'Deploy Go App to AWS Infrastructure'
    },
    {
        id: 3,
        category: 'Hardware',
        link1: 'https://github.com/San-Jose-Technology-Group/IOT_Workshop_ESP8266',
        link2: '/',
        icon1: 'Code',
        icon2: 'Demo',
        image: port3,
        title: 'ESP8266 Workshop',
        description: 'Fullstack IOT Device'
    },
]

export default portfolios;