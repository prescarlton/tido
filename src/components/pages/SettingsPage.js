import React from 'react';
import PageTitle from '../atoms/PageTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const colorList = [
    'tart',
    'sienna',
    'green',
    'acid',
    'light-blue',
    'blue',
    'charcoal'

]

const SettingsPage = () => {
    return (
        <div className='page settingsPage'>
            <PageTitle>Settings</PageTitle>
            <Tabs>
                <TabList>
                    <Tab>Customization</Tab>
                    <Tab>Account</Tab>
                </TabList>

                <TabPanel>
                    <h2>Color</h2>
                    <div className='dotContainer'>
                    {colorList.map(color=>(
                        <div className={`colorDot ${color}`}/>
                    ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>email</h2>
                    <h2>display name</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default SettingsPage;