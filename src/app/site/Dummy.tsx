import { auth } from "../../../auth"
export async function Dummy(){
    const session = await auth();
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