import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";
import React, { useState } from "react";



function ProfileScreen() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [icon, setIcon] = useState("");
  



  const changeName = (event) => {
    setName(event.target.value);
  }
  const changeBio = (event) => {
    setBio(event.target.value);
  }
  const changeIcon = (event) => {
    setIcon(event.target.value);
  }

  const [profile, setProfile] = useState({})

  const submitForm = () =>{
    alert('Enviado!');
    setProfile({
      name,
      icon, 
      bio
    })
    console.log(name)
  }


  return (
    <ScreenContainer>
      <ProfileMenu 
        name={name}
        bio={bio}
        icon={icon}

        profile={profile}
      />

      <ProfileForm 
        name={name}
        changeName={changeName}
        setName={setName}

        bio={bio}
        changeBio={changeBio}
        setBio={setBio}
        
        icon={icon}
        changeIcon={changeIcon}
        setIcon={setIcon}

        profile={profile}
        setProfile={setProfile}
        submitForm={submitForm}
      />
    </ScreenContainer>
  );
}

export default ProfileScreen;