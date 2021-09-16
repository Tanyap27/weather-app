import React from 'react';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">Hamburg</Card.Header>
            <Card.Description>
                This is a weather card
            </Card.Description>
        </Card.Content>
    </Card>
)

export default CardExampleCard;
