import React from 'react'
import { useHistory } from 'react-router-dom'

export default function GoToPageButton (props) {
    const history = useHistory()

    const GoToPage = (page) => {
        history.push(page)
    }

    return (
        <div>
            <button onClick={() => GoToPage(props.path)}>{props.text}</button>
        </div>
    )

}
