import { Input } from 'antd';
import AuthLayout from 'components/Layout/AuthLayout';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
export default function Activate() {
  const [otp, setOtp] = useState<any>('');
  const handleActivate = () => {
    console.log('dispatch activate');
  };
  useEffect(() => {
    if (otp.length < 6) return;
    handleActivate();
  }, [otp]);

  return (
    <AuthLayout>
      <h3 className={styles.title}>Please input otp</h3>
      <Input
        placeholder="Otp number"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        size="large"
        allowClear
      />
    </AuthLayout>
  );
}
