import React, { useState, useEffect } from "react";
import { Container } from 'reactstrap';
import NavBarComponent from '../components/navbar';
import CardComponent from '../components/card';
import { getDomanData } from '../utils';

/**
 * Dashboard page component
 * @param props token: String
 */
export default function DashboardPage(props: any){
    const [domains, setDomains] = useState({});
    const { token } = props;
    
    /**
     * data loading
     */
    useEffect(() => {
        // async function to get repsonse from promise
        async function loadData() {
            // confirm token is provided
            if(token === '') return;
            const response = await getDomanData(token);
            setDomains(response.data.domains);
        }
        loadData();
    }, [token]);
    
    // dahsboard page styling
    const MAIN_BG_STYLE = {
        width: '100wh',
        height: '100vh',
        background: '#bdc3c7',
    };


    return (
        <div style={MAIN_BG_STYLE}>
            <NavBarComponent />
            <Container>
                <CardComponent domains={domains}/>
            </Container>
        </div>
    )
}