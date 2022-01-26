import { Form, Input, Button } from 'antd';
import SelectLanguage from 'features/auth/components/SelectLanguage';
import { REGEX_CHECK_EMAIL } from 'helper/regex';
import { useTranslation } from 'react-i18next';
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
    history.push('/register');
  };
  const { t, i18n } = useTranslation();
  const handleChangeLang = () => {
    i18n.changeLanguage('en');
  };
  return (
    <div className={styles.layout}>
      <div className={styles.loginBox}>
        <h4>{t('common.signIn')}</h4>
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
              { required: true, message: t('validate.usernameRequired') },
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
          {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {t('common.signIn')}
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.toSignUp}>
          {t('common.haventAccount')}
          <Button type="link" style={{ fontWeight: 'bold' }} onClick={handleGoToSignUp}>
            {t('common.signUp')}
          </Button>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            
            <SelectLanguage />
          </div>
        </div>
      </div>
    </div>
  );
}
