import React, { Component } from 'react'
import axios from "axios"
import random from "random"
import { NASA_BASE_URL } from "../../CONSTANTS/requests";
import { Nav, Button, Section } from "./Styled";


export default class Stargaze extends Component {
    state = {
        title:"",  //titulo da midia
        date: "",  //dia postado no APOD
        explanation:"", //texto da midia
        media_type: "", // video ou image
        url: "" // endereço da midia
    }
    
    componentDidMount() {
        this.getNasaResponse()
    }

    getNasaResponse = () => {
        axios.get(`${NASA_BASE_URL}${random.int(1996, 2021)}-0${random.int(1, 10)}-${random.int(10, 31)}`).then((response) => {
            this.setState({
                title: response.data.title,
                date: response.data.date,
                explanation: response.data.explanation,
                media_type: response.data.media_type,
                url: response.data.url
            })
        }).catch((error) => {
            console.log(error.message)
        })
    }


    render() {
        const renderMedia = () => {
            if (this.state.media_type === "video") {
                return (
                    <iframe width="420" height="315" src={this.state.url}/> 
                )
            } else {
                return (
                    <img src={this.state.url} alt="" />
                )
            }
        }

        return (
            <div>
                <Nav>
                    <Button onClick={() => this.getNasaResponse()}>Show me more!</Button>
                    <Button onClick={this.props.setPage}>Home</Button>
                </Nav>
                <Section>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.date}</p>
                    {renderMedia()}
                    <article>{this.state.explanation}</article>
                </Section>
            </div>
        )
    }
}
