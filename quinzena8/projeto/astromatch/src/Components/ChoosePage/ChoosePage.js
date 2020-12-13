import React, {useEffect, useState} from 'react'
import ChooseButtons from './ChooseButtons'
import ProfileCard from './ProfileCard'
import axios from 'axios'
import { BASE_URL } from "../../config/index";
import { AppLogo, CardContainer, ProfileImg, ProfileInfo, AppLogoSpin } from './styles';
import logo from '../../logo.svg';



function ChoosePage() {
    const [profileToChoose, setProfileToChoose] = useState(undefined)

    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi/person')
            .then(response => {
            setProfileToChoose(response.data.profile)
        })
    }

    const ChooseProfile = (boolean) => {
        const body = {
            choice: boolean,
            id: profileToChoose.id
        }
        setProfileToChoose(undefined)

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi/choose-person', body)
        .then((response) => {
            console.log(response.data.isMatch)
            console.log('escolheu:', boolean)
            getProfileToChoose()
        })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const onClickLike = () => {
        ChooseProfile(true)
    }
    
    const onClickNo = () => {
        ChooseProfile(false)
    }

    return (
        <div>
            { profileToChoose ? 
                (<>
                    <ProfileCard profile={profileToChoose}/>
                    <ChooseButtons onClickNo={onClickNo} onClickLike={onClickLike}/>
                </>) : <AppLogo src={logo} alt="logo"/>
            }
        </div>
    )
}

export default ChoosePage
