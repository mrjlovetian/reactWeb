import React, { Component } from 'react'
import {AppBar, Paper, Tabs, Tab} from '@material-ui/core'

class Nav extends Component {
    render() {
        return <div>
            <AppBar>
                <Tabs
                indicatorColor="primary"
                textColor="primary"
                variant={'standard'}
                >
                    <Tab label="年度个税"></Tab>
                    <Tab label="年终奖"></Tab>
                </Tabs>
            </AppBar>
        </div>
    }
}

export default Nav;