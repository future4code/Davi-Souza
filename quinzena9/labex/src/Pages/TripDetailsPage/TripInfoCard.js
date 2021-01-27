import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import TripInfoItem from './TripInfoItem'

export default function TripInfoCard(props) {
    const {name, planet, description, date, durationInDays} = props.info
    return (
        <Card>
            <CardContent>
                <Typography variant={"h5"} gutterBottom>
                    Informações da viagem
                </Typography>
                <TripInfoItem infoName={'Nome'} info={name}/>
                <TripInfoItem infoName={'Planeta'} info={planet}/>
                <TripInfoItem infoName={'Data'} info={date}/>
                <TripInfoItem infoName={'Descrição'} info={description}/>
                <TripInfoItem infoName={'Duração em dias'} info={durationInDays}/>
            </CardContent>
        </Card>
    )
}
