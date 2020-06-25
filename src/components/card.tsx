import React from 'react';
import {
  Card, 
  CardBody,
  CardTitle
} from 'reactstrap';

/**
 * Card Component
 * @param props doman array
 */

const CardComponent = (props:any) => {
  return (    
      <Card>
        <CardBody>
          <CardTitle style={{textAlign: "center"}}>Domains</CardTitle>
          { props.domains && props.domains.length > 0 && <ul>
                {props.domains.map((el: String) => <li>{el}</li>)}
          </ul>}
        </CardBody>
      </Card>
  );
};

export default CardComponent;