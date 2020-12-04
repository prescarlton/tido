import React from 'react';
import PageTitle from '../atoms/PageTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const SettingsPage = () => {
    return (
        <div className='page settingsPage'>
            <PageTitle>Settings</PageTitle>
            <Tabs>
                <TabList>
                    <Tab>Customization</Tab>
                    <Tab>Account</Tab>
                    <Tab>Password</Tab>
                </TabList>

                <TabPanel>
                    <h2>color</h2>
                    <h2>theme</h2>
                </TabPanel>
                <TabPanel>
                    <h2>email</h2>
                    <h2>display name</h2>
                </TabPanel>
                <TabPanel>
                    <h2>password input</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default SettingsPage;