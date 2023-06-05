import { Button, Form, FormWrapper, Input, InputWrapper, Label } from "./ProfileForm.styled";


const ProfileForm = (props) => {
  
  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form onSubmit={props.submitForm}>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={props.name}
            onChange={props.changeName}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            value={props.bio}
            onChange={props.changeBio}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            value={props.icon}
            onChange={props.changeIcon}
          />
        </InputWrapper>

        <Button type= "submit" onClick={props.submitForm}>Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
