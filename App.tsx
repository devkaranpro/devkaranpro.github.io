import React, { Fragment } from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <><Fragment>       
      <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
    </Fragment></>

  )
}

