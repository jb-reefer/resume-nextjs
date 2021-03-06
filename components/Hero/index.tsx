import React from "react";
import { GithubButton } from "../GithubButton";
import "./Hero.css";

export const Hero = (props: any) => (
  <address className="Hero">
    <h1 title="Really it's James Brooks Gardner Reefer but this is so much simpler">J.B. Reefer</h1>
    <div>New York, NY 10128</div>
    <div>(573) 308-2658</div>
    <div className="Contacts">
      <GithubButton link="https://github.com/jb-reefer" />
      <a href="mailto:james.reefer@gmail.com?subject=Let's be friends!">Email</a>
    </div>
  </address>
);
