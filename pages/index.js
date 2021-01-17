import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [tasks, setTasks] = useState([])
  const [tasksLoaded, setTL] = useState(false)
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || [])
    setTimeout(() => {
      setTL(true)
    }, 50)
  }, [])

  useEffect(() => {
    if (tasksLoaded) {
      console.log("Saving taksjs")
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }, [tasks])
  console.log(tasks)
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
          setTasks([...tasks, e.target.task.value])
          e.target.task.value = ""
        }}>
          <input type="text" name="task" />
          <button type="submit">Add</button>
        </form>
        <ul>
          {
            tasks.map((t, i) => (
              <li key={i}>{t} <input type="checkbox" onClick={
                () => {
                  setTasks(tasks.length == 1 ? [] : tasks.splice(i, 1))
                }
              } /></li>
            ))
          }
        </ul>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div >
  )
}
