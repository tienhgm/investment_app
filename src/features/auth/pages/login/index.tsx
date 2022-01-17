import { Form, Input, Button } from 'antd';
import { REGEX_CHECK_EMAIL } from 'constants/regex';
import { useHistory } from 'react-router-dom';
import styles from './style.module.scss';
export default function LoginPage() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const history = useHistory();
  const handleGoToSignUp = () => {
    history.push('/register')
  }
  return (
    <div className={styles.layout}>
      <div className={styles.loginBox}>
        <h4>Sign in</h4>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { pattern: REGEX_CHECK_EMAIL, message: 'Email is invalid' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.toSignUp}>
          Don't have an account ?
          <Button type="link" style={{ fontWeight: 'bold' }} onClick={handleGoToSignUp}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
