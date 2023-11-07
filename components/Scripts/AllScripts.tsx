import { useEffect } from 'react';
import posthog from 'posthog-js';
import PosthogScript from './PostHogs';
import CrispChatScript from './CrispChatScript';
import GoogleAnalytics from './GoogleAnalyticsScript';
import ChatBotScript from './ChatBotScript';
 
const AllScripts = () => {


    return <>
        <GoogleAnalytics />
        <PosthogScript />
        {/* <CrispChatScript /> */}
        {/* <ChatBotScript/> */}
    </>;
};

export default AllScripts;
