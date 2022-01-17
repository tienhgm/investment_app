import { Form, Input, Button } from 'antd';
import { REGEX_CHECK_EMAIL } from 'constants/regex';
import { useHistory } from 'react-router-dom';
import styles from './style.module.scss';
export default function RegisterPage() {
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    localStorage.setItem('access_token_invest', '1234');
    history.push('/confirm-info');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleGoToSignIn = () => {
    history.push('/login');
  };
  return (
    <div className={styles.layout}>
      <div className={styles.loginBox}>
        <h4>Sign Up</h4>
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
          <Form.Item
            label="Re password"
            name="re_password"
            rules={[
              { required: true, message: 'Please input your password!' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password placeholder="Repeat Password" autoComplete="false" />
          </Form.Item>
          {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.toSignUp}>
          Have already an account ?
          <Button type="link" style={{ fontWeight: 'bold' }} onClick={handleGoToSignIn}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
