import './App.css';
import React from 'react';
import WForm from './components/form';
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
    <div style={{padding: '2rem'}}>
      <WForm
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <WForm.Item
          label="账户"
          name="account"
          rules={[{ required: true, message: 'Please input your account!' }]}
        >
          <WInput />
        </WForm.Item>
        <WForm.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <WInput type="password" />
        </WForm.Item>
        <WForm.Item>
          <WButton type="submit">登录</WButton>
        </WForm.Item>
        <WForm.Text>
          <span><a href="#">忘记密码</a></span>
        </WForm.Text>
        <WForm.Text>
          <span>还没有账户? <a href="#/auth/register">立即创建</a></span>
        </WForm.Text>
        <WForm.Text>
        <span>登录或注册即表示您同意 <a href="#">使用条款</a> 和 <a href="#">隐私声明</a></span>
        </WForm.Text>
      </WForm>
    </div>
  );

}

export default App;
