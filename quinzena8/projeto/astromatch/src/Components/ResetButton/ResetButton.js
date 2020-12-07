import axios from 'axios'
import React from 'react'

function ResetButton() {
    const onClickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi/clear')
        .then((response) =>{console.log(response)}).catch((err) => {console.log(err)})
    }

    return (
        <div>
            <button onClick={onClickReset}>reset</button>
        </div>
    )
}

export default ResetButton
