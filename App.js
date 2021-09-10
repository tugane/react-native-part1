import React,{useState} from 'react';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import Screen from './app/components/Screen';
export default function App() {
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput placeholder="First Name" icon="email" />
    </Screen>

    );
}
