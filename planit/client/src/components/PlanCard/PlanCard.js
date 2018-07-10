import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import placeholder from '../../img/placeholder_200x200.png';

const PlanCardDiv = styled.div`
    float: left;
    text-align: center;
    width: 30%;
    margin: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
    background: #ffffff;
`;

const PlanImage = styled.img`
    width: 100%;
    height: auto;
`;   

const PlanTitle = styled.h4`
    margin-left: 1em;
    margin-right: 1 em;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`;

const PlanInfo = styled.p`
    margin-left: 1em;
    margin-right: 1 em;
    text-align: left;
    font-family: 'Roboto', sans-serif;
`;


class PlanCard extends Component {

    state = {
        plans: [],
        clickedPlan: null
    }

    componentDidMount = () => {
        // this.getUserPlans();
    }

    getUserPlans = () => {
        //API call to get all plans associated with logged in user
        //set these to state.....somehow and render them on the page for each element found
        API.getAllUserPlans()
        .then(plans => this.setState({
            plans: plans
        }))
        .catch(err => console.log(err))
    }

    loadPlan = id => {
        // const planID = id

        // API.getPlanByID(id)
        // .then(plan => this.setState({
        //     clickedPlan: plan
        // }))
        // //add another .then to load the plan page with the specific cleckedPlan planID
        // .catch(err => console.log(err))
    }

    render () {

        return (
            <Fragment>
                {this.state.plans.map( plan => (
                    <PlanCardDiv id={plan._id} onClick={ () => this.loadPlan(plan._id)}>
                        <PlanImage src={placeholder} alt='Plan Visual' />
                        <PlanTitle>
                            {plan.title}
                        </PlanTitle>
                        <PlanInfo>Location: {plan.location}</PlanInfo>
                        <PlanInfo>Dates: {plan.date}</PlanInfo>
                    </PlanCardDiv>
                ))}
            </Fragment>
        );
    }

}

export default PlanCard;