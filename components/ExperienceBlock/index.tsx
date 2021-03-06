import { Entry } from "../Entry";
import { Header, IDuration, IHeader } from "../Header";

export interface IExperienceBlock extends IHeader, IDuration {
  bulletPoints: string[];
}

export const ExperienceBlock = (props: IExperienceBlock ) => (
  <>
  <Header company={props.company} website={props.website} city={props.city} role={props.role} from={props.from} to={props.to} />
  <ul>
      {props.bulletPoints.map((bulletPoint) => <Entry>{bulletPoint}</Entry>)}
  </ul>
  </>
);
