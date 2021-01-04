import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'





export default function GotoPageBtn (props) {
    const history = useHistory()

    const goToPage = (page) => {
        history.push(page)
    }

    return (
        <div>
            <Button
                variant={props.variant} 
                color={props.color}
                onClick={() => goToPage(props.path)}
                size={props.size}
                className={props.class}
            >
                {props.text} 
            </Button>
        </div>
    )

}
