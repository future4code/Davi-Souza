import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'


export default function BackButton () {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return (
        <div>
            <Button 
                variant='outlined' 
                color='primary' 
                onClick={goBack}
                size='small'
            >
                Voltar
            </Button>
        </div>
    )
}
