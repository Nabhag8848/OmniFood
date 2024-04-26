import styles from "./Cta.module.css";
import common from "./Common.module.css";
function Cta() {
  return (
    <section className={styles.section} id="cta">
      <div className={`${common.container}`}>
        <div className={`${styles.cta}`}>
          <div className={styles.textBox}>
            <h2 className={common["heading-secondary"]}>
              Get your first meal for free !
            </h2>
            <p className={styles.text}>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form className={styles.form}>
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="where">Where did you here about us ?</label>
                <select id="where" required>
                  <option value="empty">Please choose one option</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">Youtube</option>
                  <option value="podcast">Podcast</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button className={styles.btn}>Sign up now</button>
            </form>
          </div>
          <div
            className={styles.image}
            role="img"
            aria-label="women enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
