import React, { useState, useEffect } from "react";
import { Container } from 'reactstrap';
import NavBarComponent from '../components/navbar';
import CardComponent from '../components/card';
import { getDomanData } from '../utils';


export default function DashboardPage(props: any){
    const [domains, setDomains] = useState({});
    const { token } = props;
    /**
     * data loading
     */
    useEffect(() => {
        async function loadData() {
            if(token === '') return;
            const response = await getDomanData(token);
            setDomains(response.data.domains);
        }
        loadData();
    }, [token]);
    
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