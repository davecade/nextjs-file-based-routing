import Layout from "../components/layout/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		// Wrapped Layout around Component
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
