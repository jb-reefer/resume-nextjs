import * as React from "react";
import "./Header.css";

export interface IDuration {
  from: string;
  to: string;
}

export interface IHeader {
  company: string;
  website: string;
  city: string;
  role: string;
}

export const Header = (props: IHeader & IDuration) => (
  <div>
    <div className="Role">{props.role}</div>
    <div className="Header">
      <div className="Subheader"><a href={props.website} target="_blank">{props.company}</a></div>
      <Duration to={props.to} from={props.from} />
    </div>
    <div className="Subheader">{props.city}</div>
  </div>
);

export const Duration = (props: IDuration) => (
  <div className="Subheader">{props.from} - {props.to}</div>
);
