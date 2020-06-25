import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const CardComponent = (props:any) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle style={{textAlign: "center"}}>Domains</CardTitle>
          { props.domains && props.domains.length > 0 && <ul>
                {props.domains.map((el: String) => <li>{el}</li>)}
          </ul>}
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;