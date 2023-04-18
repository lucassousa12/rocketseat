import { Post } from "./components/Post";
import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/84483007?v=4",
      name: "Lucas Sousa",
      role: "Estudante pela UNIP"  
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"} ,
      { type: "link", content: "👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-04-17 20:18:00")
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/84483007?v=4",
      name: "Vivian Farias",
      role: "Estudante de Direito"  
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"} ,
      { type: "link", content: "👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-04-15 10:00:00")
  }
];

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author = {post.author}
                  content = {post.content}
                  publishedAt = {post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App

