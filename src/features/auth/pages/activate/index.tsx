import { Input } from 'antd';
import { useAppDispatch } from 'app/hooks';
import { activeThunk } from 'app/slices/authSlice';
import AuthLayout from 'components/Layout/AuthLayout';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
export default function Activate() {
  const [otp, setOtp] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleActivate = async () => {
    setLoading(true);

    const result = await dispatch(activeThunk(otp));
    if (result.meta.requestStatus === 'fulfilled') {
      if (result.payload === undefined) {
        _.delay(() => {
          setLoading(false);
          setOtp('');
        }, 1500);
      } else {
        history.push('/')
      }
    }
  };
  useEffect(() => {
    if (otp.length < 6) return;
    handleActivate();
  }, [otp]);

  return (
    <AuthLayout>
      <h3 className={styles.title}>Input OTP to active account!</h3>
      <Input
        placeholder="OTP number"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        size="large"
        allowClear
        disabled={loading}
      />
    </AuthLayout>
  );
}
