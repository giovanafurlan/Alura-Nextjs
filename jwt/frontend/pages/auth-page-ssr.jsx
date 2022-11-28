import { authService } from "../src/services/auth/authService";
import nookies from 'nookies';
import { withSession } from "../src/services/auth/session";

function AuthPageSSR(props) {

  return (
    <div>
      <h1>
        Auth Page Server Side Render
      </h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}

export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.req.session,
    }
  }
})

// export async function getServerSideProps(ctx) {
//   try {
//     const session = await authService.getSession(ctx);

//     return {
//       props: {
//         session,
//       },
//     }
//   } catch (err) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/?error=401'
//       }
//     }
//   }
// }

export default AuthPageSSR;
