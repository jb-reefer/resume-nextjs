import styled from "styled-components";

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

const StyledHeader = styled.div`
.Header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
}

.Role {
  font-weight: 900;
}

@media (max-width: 450px) {
  .Subheader {
    font-size: 13pt;
  }

  .Role {
    font-style: normal;
  }
}`;

export const Header = (props: IHeader & IDuration) => (
  <StyledHeader>
    <div className="Role">{props.role}</div>
    <div className="Header">
      <div className="Subheader"><a href={props.website} target="_blank">{props.company}</a></div>
      <Duration to={props.to} from={props.from} />
    </div>
    <div className="Subheader">{props.city}</div>
  </StyledHeader>
);

export const Duration = (props: IDuration) => (
  <div className="Subheader">{props.from} - {props.to}</div>
);
