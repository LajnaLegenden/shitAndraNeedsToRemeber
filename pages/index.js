import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [tasks, setTasks] = useState([])
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || [])
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>RemeberIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>Things you need to remember</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          e.target.task.value = ""
          setTasks([...tasks, e.target.task.value])
          localStorage.setItem("tasks", JSON.stringify([...tasks, e.target.task.value]))
        }}>
          <input type="text" name="task" />
          <button type="submit">Add</button>
        </form>
        <ul>
          {
            tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))
          }
        </ul>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
