import { handleSignOut } from "@/app/actions/authActions";
import { auth } from "../../../../auth";
import Link from "next/link";
import styles from '../../../../public/Assets/module/SignInSignOut.module.css';
export async function SignInSignOut(){
    const session = await auth();
    console.log(session,"sessionNew")
    return(
    <div className={styles.sign_in_out_wrapper}>
      {session ? (
        <form action={handleSignOut}>
            <button className={`${styles.button_wrapper} ${styles.button_wrapper_out}`}></button>
        </form>

    ) : (
          <Link href="/sign-in" className={styles.button_wrapper}></Link>
      )}
    </div>
        
    )
}  