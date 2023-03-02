import React from 'react';

import Avatar from '@atlaskit/avatar';
import { AtlassianIcon } from '@atlaskit/logo';
import { NotificationIndicator } from '@atlaskit/notification-indicator';
import styled from 'styled-components';
import {
    AtlassianNavigation,
    PrimaryButton,
    ProductHome,
    Profile,
    Help,
    Notifications
} from '@atlaskit/atlassian-navigation';

const LogoStyled = styled.div`
display: flex; 
flex-direction:row; 
align-items: flex-start; 
align-items: center;
margin-right: 20px;
`

const LogoTextStyled = styled.div`
height: 56px;
top: 0px;
font-family: 'Charlie Display';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 56px;
color: ${props =>props.color};
`

const AtlassianProductHome = () => (
    <LogoStyled>
        <AtlassianIcon appearance="brand" />
        <LogoTextStyled color = "#253858">EZ</LogoTextStyled>
        <LogoTextStyled color = "#0052CC">MAKE</LogoTextStyled>
    </LogoStyled>

);

const DefaultProfile = () => (
    <Profile
        icon={<Avatar size="small"/>}
        tooltip="Your profile and settings"
    />
);

const NotificationsBadge = () => (
    <NotificationIndicator
        onCountUpdated={console.log}
        notificationLogProvider={Promise.resolve({}) as any}
    />
);

const GlobalNavigation = () => (
    <AtlassianNavigation
        label="site"
        primaryItems={[
            <PrimaryButton>Discover</PrimaryButton>,
            <PrimaryButton>Dashboard</PrimaryButton>,
        ]}
        renderProductHome={AtlassianProductHome}
        renderProfile={DefaultProfile}
        renderHelp={() => <Help tooltip="Get help" />}
        renderNotifications={() => (
            <Notifications badge={NotificationsBadge} tooltip="Notifications" />
        )}
    />
);

export default GlobalNavigation;

