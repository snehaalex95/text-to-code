import styled from 'styled-components';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left'
import ButtonGroup from "@atlaskit/button/button-group";
import LoadingButton from "@atlaskit/button/loading-button";
import Button from "@atlaskit/button/standard-button";
import TextArea from "@atlaskit/textarea";
import TextField from "@atlaskit/textfield";
import {colors} from "@atlaskit/theme";
import Spinner from '@atlaskit/spinner';
import {useState} from 'react';
import Form, {
    ErrorMessage,
    Field,
    FormFooter,
    FormHeader,
    FormSection
  } from "@atlaskit/form";
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { createBot } from '../api/createBot';
import { useParams } from 'react-router-dom';
const CreateBotContainer = styled.div`
    display: flex;
    height: calc(100vh - 56px);
    justify-content: center;
    padding-top: 20px;
    background-color: ${colors.N20};
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
export function timeout(delay: number) {
  return new Promise( res => setTimeout(res, delay) );
}

const CreateBot = (props:any) => {
    const history = useHistory();
    const [isCreating, setIsCreating] = useState(false);
    const {mutate: createBotMutation, data} = useMutation(() => createBot());
    async function handleCreate(){
      setIsCreating(true)
      createBotMutation()
      await timeout(3000)
      setIsCreating(false)
      history.push('/bot-configuration');
    }
    return(
        <CreateBotContainer>
    <Form<{ username: string; password: string; remember: boolean }>
      onSubmit={(data: any) => {
        if(data){
            history.push('/bot-configuration');
        }
      }}
    >
      {({ formProps, submitting }) => (
        <form style={{width: '450px'}} {...formProps}>
          <FormHeader
            title={
                <Header>
                    <HeaderText>Create a BOT</HeaderText>
                </Header>
            }
            
          />
          <FormSection>
            <Field
              aria-required={true}
              name="usecaseTitle"
              label="Use-case Title"
              isRequired
            >
              {({ fieldProps, error }) => (
                <>
                  <TextField placeholder=''
                             defaultValue={props.searchQuery}
                             autoComplete="off" {...fieldProps}/>
                </>
              )}
            </Field>
            <Field
              label="Describe your usecase to automate the process"
              name="example-text"
              isRequired
            >
              {({ fieldProps }: any) => (
                <>
                  <TextArea style={{minHeight: '195px'}} placeholder="" {...fieldProps} />
                </>
              )}
            </Field>
          </FormSection>
          <FormFooter>
            <ButtonGroup>
            { isCreating && <Spinner/>}
              <Button appearance="subtle">Clear</Button>
              <LoadingButton
                type="submit"
                appearance="primary"
                isLoading={submitting}
                onClick={() => handleCreate()}
              >
                Create
              </LoadingButton>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
        </CreateBotContainer>
    )
}
export default CreateBot;
