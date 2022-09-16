import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { TwitchContext } from "../../context";

function Chat(props) {
  const { accessData } = useContext(TwitchContext);
  const router = useRouter();
  useEffect(() => {
    if (!accessData) {
      router.push("/");
    }
  }, [accessData,router]);

  return <div>{JSON.stringify(accessData, null, "\t")}</div>;
}

export default Chat;
