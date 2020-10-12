import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from 'next/app';
import { appWithTranslation } from '../i18n';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)