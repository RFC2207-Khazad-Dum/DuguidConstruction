import Layout from '../components/Layout'
import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';   // Note bellow

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp



// NOTE:

/***************************************

On the frontend side,
the SDK uses React Context to manage
the authentication state of your users.

To make that state available to all your pages,
you need to override the App component
and wrap its inner component with a UserProvider.

****************************************/