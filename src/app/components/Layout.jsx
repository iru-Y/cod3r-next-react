import Link from "next/link";
import Header from "./Header"
import styles from "./Layout.module.css"
export default function Layout (props) {
 
  console.log(props.children)
  return (
      <>
        <div className={styles.layout}>
            <Header titulo="eu" subTitulo="ae" />
    </div>
        <div className={styles.content}>
    {props.children}
    </div>
                  
    </>

  )

}
