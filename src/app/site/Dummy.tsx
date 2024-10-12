import { auth } from "../../../auth"
export async function Dummy(){
    const session = await auth();
    console.log(session,"session")
    return(
        <>
      {session ? (
        <div>Hello</div>
      ) : (
        <div>Than</div>
      )}
    </>
        
    )
}  