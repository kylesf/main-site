import port1 from '../img/portImages/logo.png';
import port2 from '../img/portImages/terraform.jpg';
import port3 from '../img/portImages/esp.jpg';
import booked from '../img/portImages/booked.png';



const portfolios = [
    {
        id: 1,
        category: 'React',
        link1: 'https://booked.byteword.net',
        link2: 'https://github.com/kylesf/booked',
        icon1: 'Demo',
        icon2: 'Code',
        image: booked,
        title: 'Bookmark App',
        description: 'Progressive Web App for Managing Bookmarks Independent of Browser '
    },
    {
        id: 2,
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
        id: 3,
        category: 'Terraform',
        link1: 'https://github.com/San-Jose-Technology-Group/Terraform_Workshop',
        icon1: 'Code',
        icon2: 'Demo',
        image: port2,
        title: 'Terraform Workshop',
        description: 'Deploy Go App to AWS Infrastructure'
    },
    {
        id: 4,
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