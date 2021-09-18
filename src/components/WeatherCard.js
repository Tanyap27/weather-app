import React from 'react';
import { Card } from 'semantic-ui-react'

export default function WeatherCard({weatherData}) {
    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header className="header">{weatherData.name}</Card.Header>
                    <Card.Description>
                        This is a weather card
                    </Card.Description>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}
