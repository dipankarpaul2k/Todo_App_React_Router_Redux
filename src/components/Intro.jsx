import { UserPlus } from "@phosphor-icons/react";
import { Form } from "react-router-dom";

export default function Intro() {
  return (
    <div className="intro">
      <div>
        <div className="headings">
          <h1>
            Take Control of <span className="accent">Tasks.</span>
          </h1>
          <p>
            Task management is the secret to time management and improved
            productivity. Start your journey today.
          </p>
        </div>
        <Form method="post">
          <input type="hidden" name="_action" value="newUser" />
          <input
            type="text"
            name="userName"
            placeholder="What is your name?"
            aria-label="Your name"
            autoComplete="given-name"
            required
          />
          <button type="submit" className="btn create_user_btn">
            <span>Create Account</span>
            <UserPlus size={25} weight="fill" />
          </button>
        </Form>
      </div>
      {/* <img src={illustration} alt="Person with money" width={600} /> */}
    </div>
  );
}
