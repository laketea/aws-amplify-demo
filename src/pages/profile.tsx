import { Link } from 'umi';

import styles from './index.less';

export default function ProfilePage() {
  return (
    <div>
      <h1 className={styles.title}>Page profile</h1>
      <Link to="/index">Go to home</Link>
    </div>
  );
}
