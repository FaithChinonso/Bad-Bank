import styles from "./style.module.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footerCopyright}>
      © Bad Bank <span>{year}</span>, All Rights Reserved
    </div>
  );
};
export default Footer;
