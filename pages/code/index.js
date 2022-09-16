import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { TwitchContext } from "../../context";

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { code } = context.query;
  const body = new URLSearchParams();

  body.append("client_id", "zl4ajhs54q7c2bbmjdha5epzg9982i");
  body.append("client_secret", "yk7puqufiw3jq2e3zvkgito9fxoy8n");
  body.append("code", code);
  body.append("grant_type", "authorization_code");
  body.append("redirect_uri", "http://localhost:3000/chat");

  const res = await fetch(`https://id.twitch.tv/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  const data = await res.json();
  
  // Pass data to the page via props
  return { props: { data } };
}

export default function Code(props) {
  const router = useRouter();
  const context = useContext(TwitchContext);

  useEffect(() => {
    context.setAccessData(props.data);
    router.push({ pathname: "/chat"});
  }, []);

  return <spam>could not redirect</spam>;
}
