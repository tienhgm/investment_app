import { Form, Input, Button } from 'antd';
import { useAppDispatch } from 'app/hooks';
import { register } from 'app/slices/authSlice';
import { LoginPayload } from 'common';
import SelectLanguage from 'features/auth/components/SelectLanguage';
import { REGEX_CHECK_EMAIL } from 'helper/regex';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import styles from './style.module.scss';
export default function RegisterPage() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const onFinish = async (values: LoginPayload) => {
    delete values.re_password;
    await dispatch(register(values));
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleGoToSignIn = () => {
    history.push('/login');
  };
  const { t } = useTranslation();
  return (
    <div className={styles.layout}>
      <div className={styles.loginBox}>
        <h4>{t('common.signUp')}</h4>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={t('common.username')}
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { pattern: REGEX_CHECK_EMAIL, message: 'Email is invalid' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t('common.password')}
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label={t('common.rePassword')}
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
            <Input.Password autoComplete="false" />
          </Form.Item>
          {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {t('common.signUp')}
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.toSignUp}>
          {t('common.haveAccount')}
          <Button type="link" style={{ fontWeight: 'bold' }} onClick={handleGoToSignIn}>
            {t('common.signIn')}
          </Button>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <SelectLanguage />
          </div>
        </div>
      </div>
    </div>
  );
}
