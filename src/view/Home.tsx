import { useState } from "react";
import styled from "styled-components";
import Textfield from "@atlaskit/textfield";
import VidAudioOnIcon from "@atlaskit/icon/glyph/vid-audio-on";
import SearchIcon from "@atlaskit/icon/glyph/search";
import Button from "@atlaskit/button";
import ImageURL from "../BuildExtend-Software-Development-Workflow-1-1560x760.png";
import { useHistory } from "react-router-dom";
import Form, { Field } from "@atlaskit/form";
import CreateBot from "./CreateBot";
const HomeContainer = styled.div``;
const BannerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 322px;
  left: 0px;
  top: 0;
  background: #1e46a0;
`;
const TextWrapper = styled.div`
  position: absolute;
  width: 484px;
  height: 138px;
  left: 102px;
  top: 70px;
  font-family: "Charlie Display";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  display: flex;
  text-align: left;
  color: #ffffff;
`;
const TextFieldWrapper = styled.div`
  width: 600px;
  height: 60px;
  top: 200px;
  position: absolute;
  left: 102px;
`;
const SearchButtonWrapper = styled.div`
  width: 60px;
  height: 42px;
  position: absolute;
  left: 610px;
  background-color: #0052cc;
  top: 5px;
`;
const SearchIconWrapper = styled.div`
  padding-top: 10px;
  color: #ffffff;
`;
const ImageWrapper = styled.div`
  position: absolute;
  height: 324px;
  left: 980px;
`;
const CreateBotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 378px);
`;
const CreateBotText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  margin-bottom: 12px;
`;
const Home = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState<string>();
  const [search, setSearch] = useState(false);
  const [showCreateBot, setShowCreateBot] = useState(false);
  function setSearchState(formState: any) {
    setSearchQuery(formState["search-bar"]);
    setSearch(true);
  }
  function handleChange() {
    setShowCreateBot(true);
    setSearch(false);
  }
  return (
    <HomeContainer>
      <BannerStyled>
        <TextWrapper>
          Get Started easily with our library of BOT templates
        </TextWrapper>
        <TextFieldWrapper>
          <Form onSubmit={(formState: any) => setSearchState(formState)}>
            {({ formProps }: any) => (
              <form {...formProps}>
                <Field name="search-bar">
                  {({ fieldProps }: any) => (
                    <Textfield
                      elemAfterInput={<VidAudioOnIcon label="" />}
                      placeholder="Describe your use case?"
                      {...fieldProps}
                    />
                  )}
                </Field>
                <SearchButtonWrapper>
                  <Button type="submit" appearance="primary">
                    <SearchIconWrapper>
                      {<SearchIcon label="" />}
                    </SearchIconWrapper>
                  </Button>
                </SearchButtonWrapper>
                ​
              </form>
            )}
          </Form>
        </TextFieldWrapper>
        <ImageWrapper>
          <img src={ImageURL} alt="exmake background" />
        </ImageWrapper>
      </BannerStyled>
      {search && (
        <CreateBotContainer>
          <CreateBotText>Did not find what you are looking for?</CreateBotText>
          <Button appearance="primary" onClick={() => handleChange()}>
            Create a BOT{" "}
          </Button>
        </CreateBotContainer>
      )}
      {showCreateBot && <CreateBot searchQuery={searchQuery} />}​
    </HomeContainer>
  );
};
export default Home;
