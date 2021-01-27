import { Card, CardContent, List, Typography } from '@material-ui/core'
import React from 'react'
import CandidateItem from './CandidateItem'

export default function CandidatesList(props) {
    return (
        <Card>
            <CardContent>
                <Typography variant={'h5'} gutterBottom>
                    Lista de Candidatos
                </Typography>
                <List>
                    {props.candidates.map(candidate => {
                        return (
                            <CandidateItem 
                                candidate={candidate} 
                                decideCandidate={props.decideCandidate}
                            />
                        )
                    })}
                </List>
            </CardContent>
        </Card>
    )
}
