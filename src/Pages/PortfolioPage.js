import React from 'react'
import Categories from '../Components/Categories'
import Title from '../Components/Title'
import MenuItems from '../Components/MenuItems'
import portfolios from '../Components/allportfolios'
import {useState} from 'react'

const allCatagories = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfolioPage() {
    // eslint-disable-next-line
    const [Catagories, setCatagories] = useState(allCatagories)
    const [menuItems, setmenuItems] = useState(portfolios)

    const filter = (category) => {
        if(category === 'All'){
            setmenuItems(portfolios)
            return;
        }
        const filterData = portfolios.filter((item)=> {
            return item.category === category;
        })
        setmenuItems(filterData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} span={'Portfolio'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={Catagories}/>
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfolioPage
