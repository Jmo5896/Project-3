import React, { Component } from 'react';
import './Dashboard.css';
import PlanCard from '../../components/PlanCard/PlanCard';
import ProfileSnippet from '../../components/ProfileSnippet/ProfileSnippet';

class HomePage extends Component {

    render () {
        return (
            <div className='container clearfix'>
                <div className='leftPanel'>
                    <ProfileSnippet />
                    <div className='add'>
                        <button>Add a plan</button>
                    </div>
                </div>
                <div className='cardPanel'>
                    <PlanCard />
                </div>
            </div>
        );
    }
}

export default HomePage;