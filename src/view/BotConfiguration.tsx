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
import UploadIcon from '@atlaskit/icon/glyph/upload';
import VidPlayIcon from '@atlaskit/icon/glyph/vid-play';
import TrashIcon from '@atlaskit/icon/glyph/trash';

import Form, {
    Field,
    FormFooter,
    FormHeader,
    FormSection
  } from "@atlaskit/form";

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
const WorkatoLink = styled.div`
    font-weight: 400;
font-size: 14px;
line-height: 20px;
color: ${colors.B300};

`


const BotConfiguration = () => {
    const history = useHistory();
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
            <WorkatoLink>{'https://app.workato.com/recipes/2828973-getallconfluencecomments#recipe'}</WorkatoLink>
          </WorkatoSection>
          <FormSection>
            <h3>Confluence Configuration</h3>
            <Field
              aria-required={true}
              name="confluencePageId"
              label="Confluence Page ID"
              isRequired
            >
              {({ fieldProps, error }) => (
                <>
                  <TextField autoComplete="off" {...fieldProps} />
                </>
              )}
            </Field>
            <Field
              aria-required={true}
              name="confluencePageLink"
              label="Confluence Page Tiny Link"
              isRequired
            >
              {({ fieldProps, error }) => (
                <>
                  <TextField autoComplete="off" {...fieldProps} />
                </>
              )}
            </Field>
          </FormSection>

          <FormSection>
            <h3>Google Sheet Configuration</h3>
            <Field
              aria-required={true}
              name="emailId"
              label="Enter Email ID"
              isRequired
            >
              {({ fieldProps, error }) => (
                <>
                  <TextField autoComplete="off" {...fieldProps} />
                </>
              )}
            </Field>
            <Field
              aria-required={true}
              name="password"
              label="Enter Password"
              isRequired
            >
              {({ fieldProps, error }) => (
                <>
                  <TextField
                    type="password"
                    autoComplete="off"
                    {...fieldProps}
                  />
                </>
              )}
            </Field>
            <Field
              aria-required={true}
              name="googleSheetId"
              label="Google sheet ID"
              isRequired
            >
              {({ fieldProps, error }) => (
                <>
                  <TextField autoComplete="off" {...fieldProps} />
                </>
              )}
            </Field>
          </FormSection>

          <FormFooter>
            <ButtonGroup>
              <LoadingButton
                type="submit"
                appearance="primary"
                isLoading={submitting}
              >
                Test Connection
              </LoadingButton>
              <Button iconBefore={<StarIcon label="star" />} appearance="default">Save Recipe</Button>
              <Button appearance="default" iconBefore={<EditFilledIcon label='edit' />}>Modify</Button>
              <Button appearance="default" iconBefore={<UploadIcon label='upload' />}>Deploy</Button>
              <Button appearance="primary" iconBefore={<VidPlayIcon label='play' />}>Run</Button>
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