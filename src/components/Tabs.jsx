import React from 'react';
import { useState } from 'react';
import ItemList from './ItemList';

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle: 'List',
            contentTitle: 'List',
            component: ItemList,
        },
        {
            id: 2,
            tabTitle: 'Stock',
            contentTitle: 'Stock',
            component: 'myContent2',
        },
        {
            id: 3,
            tabTitle: 'Prep',
            contentTitle: 'Prep',
            component: 'myContent3',
        },
    ]

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button 
                        key={i}
                        id={tab.id}
                        disabled={currentTab === `${tab.id}`}
                        onClick={(handleTabClick)}
                    >
                        {tab.tabTitle}
                    </button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) => 
                    <div className='key'>
                        {currentTab === `${tab.id}` && 
                    <div>
                        <p className='title'>{tab.contentTitle}</p>
                        <tab.component/>
                    </div>}
                    </div>
                    
                )}
            </div>
        </div>
    )
}

export default Tabs