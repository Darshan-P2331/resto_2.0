import Message from "../../../components/Message";
import { AuthStyle, FormStyle } from "./AuthStyle";

type Props = {};

export default function ActivateEmail({}: Props) {
  return (
    <div className={AuthStyle}>
      <form className={FormStyle}>
        <Message variant="success">Activated success</Message>
      </form>
    </div>
  );
}
