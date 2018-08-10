import * as React from "react";
import { ForgotPasswordController } from "@abb/controller";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";

export class ForgotPasswordConnector extends React.PureComponent {
  render() {
    return (
        <ForgotPasswordController>
            {({submit}) => <ForgotPasswordView submit={submit}/>}
        </ForgotPasswordController>);
  }
}