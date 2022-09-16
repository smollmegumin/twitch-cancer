import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <a href="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=zl4ajhs54q7c2bbmjdha5epzg9982i&redirect_uri=http://localhost:3000/code&scope=chat%3Aedit%20chat%3Aread&state=c3ab8aa609ea11e793ae92361f002671">connect to twitch</a>
    </div>
  );
}
