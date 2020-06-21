import React from "react";

import { Input } from "../../modules/input";
import { Textarea } from "../../modules/textarea";
import { Button } from "../../modules/button";
import { FeedbackFormProps } from "./types/props";
import { FeedbackFormState } from "./types/state";
import { validateEmail } from "../../helpers/validate/email";

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
      errors: {
        name: false,
        email: false,
        rating: false,
        comment: false,
      },
    };
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState(
      {
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      },
      this.validate,
    );
  };

  private onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.submit();
  };

  private submit() {
    if (this.validate()) {
      this.props.onSubmit(this.state.form);
    }
  }

  private getValidationErrors(): FeedbackFormState["errors"] {
    const { name, email, comment } = this.state.form;
    const errors: FeedbackFormState["errors"] = {
      name: false,
      email: false,
      rating: false,
      comment: false,
    };

    if (!name) {
      errors.name = true;
    }

    if (!email || !validateEmail(email)) {
      errors.email = true;
    }

    if (!comment) {
      errors.comment = true;
    }

    return errors;
  }

  private validate = (): boolean => {
    const errors = this.getValidationErrors();
    const keys = Object.keys(errors) as Array<keyof typeof errors>;
    const isValid = keys.every((key) => !errors[key]);

    this.setState({ errors });

    return isValid;
  };

  public render() {
    const { form, errors } = this.state;

    return (
      <form className="feedback-form" onSubmit={this.onSubmit}>
        <Input
          className="feedback-form__field"
          name="name"
          placeholder="Name"
          onChange={this.onChange}
          value={form.name}
          error={errors.name}
        />

        <Input
          className="feedback-form__field"
          name="email"
          placeholder="Email"
          onChange={this.onChange}
          value={form.email}
          error={errors.email}
        />

        <Input className="feedback-form__field" name="rating" onChange={this.onChange} value={String(form.rating)} />

        <Textarea
          className="feedback-form__field"
          name="comment"
          placeholder="Comment"
          onChange={this.onChange}
          value={form.comment}
          error={errors.comment}
        />

        <Button className="feedback-form__button" type="submit">
          Add feedback
        </Button>
      </form>
    );
  }
}
