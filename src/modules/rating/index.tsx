import React from "react";
import cn from "classnames";

import { IconStar } from "../../modules/icons/star";
import { IconStarOutline } from "../../modules/icons/star-outline";
import { RatingProps } from "./types/props";

import "./style.scss";

export class Rating extends React.Component<RatingProps> {
  getStarList() {
    return [1, 2, 3, 4, 5];
  }

  public render() {
    const { className, value: currentValue } = this.props;
    const stars = this.getStarList();

    return (
      <div
        className={cn({
          rating: true,
          [`${className}`]: true,
        })}
      >
        {stars.map((value) => {
          const Icon = currentValue >= value ? IconStar : IconStarOutline;

          return (
            <div className="rating__star" onClick={() => this.props.onChange(value)}>
              <Icon className="rating__star-icon" />
            </div>
          );
        })}
      </div>
    );
  }
}
