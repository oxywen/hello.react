import './App.css';
import React from 'react';
import WForm from './components/form/WForm';
import WFormItem from './components/form/WFormItem';
import WButton from './components/button/WButton'
import WInput from './components/input/WInput'

function App() {

  const onFinish = () => {
    console.log("ok")
  }

  const onFinishFailed = () => {
    console.log("failed")
  }


  return (
    <WForm
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <WFormItem
        label="账户"
        name="account"
        rules={[{ required: true, message: 'Please input your account!' }]}
      >
        <WInput />
      </WFormItem>
      <WFormItem
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <WInput type="password" />
      </WFormItem>
      <WFormItem>
        <WButton type="submit">登录</WButton>
      </WFormItem>
    </WForm>
  );

}

export default App;
