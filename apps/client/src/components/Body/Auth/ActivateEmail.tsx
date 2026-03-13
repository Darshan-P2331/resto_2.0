import { AuthStyle, FormStyle } from "./AuthStyle";
import Message from "../../../utils/Message";

type Props = {};

export default function ActivateEmail({}: Props) {
  return <div className={AuthStyle}>
    <form className={FormStyle}>
      <Message variant="success">Activated success</Message>
    </form>
  </div>;
}
