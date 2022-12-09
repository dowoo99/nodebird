import Prototype from "prop-types";
import "antd/dist/reset.css";
import Head from "next/head";
import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};
NodeBird.prototype = {
  Component: Prototype.elementType.isRequired,
};
export default wrapper.withRedux(NodeBird);
