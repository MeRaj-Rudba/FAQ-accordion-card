import Head from "next/head";
import Image from "next/image";
import Questions from "../Components/Questions";
import styles from "../styles/Home.module.css";

export default function Home() {
  const questions = [
    {
      title: "How many team members can I invite?",
      content:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      title: "What is the maximum file upload size?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      title: "How do I reset my password?",
      content:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      title: "Can I cancel my subscription?",
      content:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      title: "Do you provide additional support?",
      content:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>FAQ Accordion Card</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="faqs">
          <div className="background-div">
            <div className="img-background-div"></div>
          </div>
          <h1 className="main-title">FAQ</h1>
          <div className="question-div">
            {questions ? (
              questions.map((qstn, idx) => <Questions key={idx} data={qstn} />)
            ) : (
              <p>No Questions</p>
            )}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </div>
  );
}
