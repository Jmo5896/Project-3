import React, { Component } from 'react';
import { Redirect } from 'react-router';
// import styled from 'styled-components';
import './Dashboard.css';
// import API from '../../utils/API';
import Button from '../../components/Button';
import PlanCard from '../../components/PlanCard/PlanCard';
import ProfileSnippet from '../../components/ProfileSnippet/ProfileSnippet';
import API from '../../utils/api';
// import { getMaxListeners } from 'cluster';


const CreateButton = Button.extend`
    margin-top: 2em;
    margin-left: 1.5em;
    margin-right: 1.5em;
    margin-bottom: 2em;
    width: 85%;
`;

class HomePage extends Component {

    state = {
        currentUser: '',
        currentUserProfile: {
            email: 'email@gmail.com',
            username: 'defaut username',
            name: 'default user'
        }
    }

    createPlan = () => {
        API.postPlan({
            title: '',
            location: '',
            members: [this.state.currentUser]
        })
        .then(res => {
            <Redirect to={'/plan/' + res._id}  />
        })
        .catch(err => console.log(err))
    }

    fetchProfileInfo = () => {
        //get call using the currentUser to get all user information
            //set profile info to state currentUserProfile
        //pass through as props to the <ProfileSnippet /> component
        
    }

    render () {
        return (
            <div className='container clearfix'>
                <div className='leftPanel'>
                    <ProfileSnippet profile={this.state.currentUserProfile}/>
                    <div>
                        <CreateButton onClick={this.createPlan}>
                            Create a new plan
                        </CreateButton>
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