import React from "react";

import { Input } from "../../modules/input";
import { FeedbackFormProps } from "./types/props";
import { FeedbackFormState } from "./types/state";

import "./style.scss";

export class FeedbackForm extends React.Component<FeedbackFormProps, FeedbackFormState> {
  constructor(props: FeedbackFormProps) {
    super(props);

    this.state = {
      form: {
        name: "",
        email: "",
        rating: 0,
        comment: "",
      },
    };
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      },
    );
  };

  private onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.submit();
  };

  private submit = () => {
    this.props.onSubmit(this.state.form);
  };

  public render() {
    const { form } = this.state;

    return (
      <form className="feedback-form" onSubmit={this.onSubmit}>
        <Input className="feedback-form__field" name="name" onChange={this.onChange} value={form.name} />
        <Input className="feedback-form__field" name="email" onChange={this.onChange} value={form.email} />
        <Input className="feedback-form__field" name="rating" onChange={this.onChange} value={String(form.rating)} />
        <Input className="feedback-form__field" name="comment" onChange={this.onChange} value={form.comment} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
