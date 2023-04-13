import styles from './styles/layout.module.scss';
import Button from '../components/Button';

export default function Home() {
  return (
    <main>
      <h1 className={styles.header}>adam</h1>
      <Button>adam was here</Button>
    </main>
  )
}
