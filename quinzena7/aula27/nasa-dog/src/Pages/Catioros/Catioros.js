import axios from 'axios'
import React, { Component } from 'react'
import { DOG_BASE_URL } from "../../CONSTANTS/requests";
import { Nav, Button, ImgSection, Img } from "./Styled";

export default class Catioros extends Component {
    state = {
        dogAmount: 1,
        dogImages: []
    }

    componentDidMount() {
        this.getDogs()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.dogAmount !== this.state.dogAmount) {
            this.getDogs()
        }
    }

    getDogs = async () => {
        try {
            const response = await axios.get(`${DOG_BASE_URL}/${this.state.dogAmount}`)
            this.setState({dogImages: response.data.message})
        } catch (error) {
            console.log(error.message)
        }
    }

    updateDogs = (number) => {
        if (this.state.dogAmount === number) {
            this.getDogs()
        } else {
            this.setState({dogAmount: number})
        }
    }

    render() {
        const renderDogs = this.state.dogImages.map((dog) =>{
            return (
                <Img src={dog} alt="" />
            )
        })

        return (
            <div>
                <Nav>
                    <Button onClick={() => this.updateDogs(1)}>Outro Catioro!</Button>
                    <Button onClick={() => this.updateDogs(20)}>It Malia!</Button>
                    <Button onClick={this.props.setPage}>Home</Button>
                </Nav>
                <ImgSection>
                    {renderDogs}
                </ImgSection>
            </div>
        )
    }
}
