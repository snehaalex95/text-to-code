import styled from 'styled-components';
import {colors} from "@atlaskit/theme";
import { useHistory } from 'react-router-dom';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left'
import ButtonGroup from "@atlaskit/button/button-group";
import LoadingButton from "@atlaskit/button/loading-button";
import Button from "@atlaskit/button/standard-button";
import TextField from "@atlaskit/textfield";
import StarIcon from '@atlaskit/icon/glyph/star';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import VidPlayIcon from '@atlaskit/icon/glyph/vid-play';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import { toast } from 'react-toastify';
import {useState} from 'react';
import Form, {
    Field,
    FormFooter,
    FormHeader,
    FormSection
  } from "@atlaskit/form";
import { timeout } from './CreateBot';

const ConfigContainer = styled.div`
    height: calc(100vh - 56px);
    background-color: ${colors.N20};
    display: flex;
    padding-top: 20px;
    justify-content: center;
`
const Header = styled.div`
    display: flex;
`
const HeaderText = styled.div`
font-weight: 500;
font-size: 24px;
line-height: 28px;
color: #253858;
margin-left: 4px;
`
const WorkatoSection = styled.div`
    background-color: ${colors.Y50};
    padding: 20px;
    margin-top: 4px;
`
const WorkatoText = styled.div`
font-weight: 600;
font-size: 12px;
line-height: 16px;
color: ${colors.N500};
`
const WorkatoLink = styled.a`
    font-weight: 400;
font-size: 14px;
line-height: 20px;
color: ${colors.B300};
`
const BotConfiguration = () => {
    const history = useHistory();
    const [isSavingRecipe, setIsSavingRecipe] = useState(false);
    const [isRunningRecipe, setIsRunningRecipe] = useState(false);
    async function displayToastForRecipeSaved(){
      setIsSavingRecipe(true);
      await timeout(5000);
      setIsSavingRecipe(false);
      toast.success("Recipe successfully saved")
    }
    async function displayToastForRecipeRun() {
      setIsRunningRecipe(true);
      await timeout(5000);
      setIsRunningRecipe(false);
      toast.success("Recipe successfully Run")
    }
    return(
       <ConfigContainer>
          
                <Form<{ username: string; password: string; remember: boolean }>
      onSubmit={(data) => {
        console.log("form data", data);
      }}
    >
      {({ formProps, submitting }) => (
        <form style={{width: '800px'}} {...formProps}>
          <FormHeader
            title={
                <Header>
                <div onClick={() => history.goBack()} style={{cursor:'pointer'}}>
                <ArrowLeftIcon size='large' label='Back' />
                </div>
                <HeaderText>Your Bot is created. It is now ready to be configured!</HeaderText>
            </Header>
            }
            description="Enter below details to deploy automation"
          />
          <WorkatoSection>
            <WorkatoText>Workato recipe Link:</WorkatoText>
            <WorkatoLink href='https://app.workato.com/recipes/5345359' target="_blank">{'https://app.workato.com/recipes/5345359'}</WorkatoLink>
          </WorkatoSection>
          <FormSection>
            <h3>Configuration</h3>
            <Field
              aria-required={true}
              name="jiraProject"
              label="Jira project Instance"
              isRequired
            >
              {({ fieldProps, error }) => (
                <>
                  <TextField autoComplete="off" {...fieldProps}
                  />
                </>
              )}
            </Field>
            <Field
              aria-required={true}
              name="gsheetLink"
              label="Google Sheet Link"
              isRequired
            >
              {({ fieldProps, error }) => (
                <>
                  <TextField autoComplete="off"
                             {...fieldProps} />
                </>
              )}
            </Field>
          </FormSection>
          <FormFooter>
            <ButtonGroup>
              <LoadingButton iconBefore={<StarIcon label="star" />} isLoading={isSavingRecipe} appearance="default" onClick = {()=>displayToastForRecipeSaved()}>Save Recipe</LoadingButton>
              <Button appearance="default" iconBefore={<EditFilledIcon label='edit' />}>Modify</Button>
              <LoadingButton appearance="primary" iconBefore={<VidPlayIcon label='play' />} isLoading={isRunningRecipe} onClick = {()=>displayToastForRecipeRun()}>Run</LoadingButton>
              <Button appearance="danger" iconBefore={<TrashIcon label='delete' />}>Delete</Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
       </ConfigContainer>
    )
}
export default BotConfiguration
