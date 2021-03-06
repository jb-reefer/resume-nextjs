import React from "react";
import styled from 'styled-components'

const EducationStyle = styled.div`
  .Institute {
    font-weight: bold;
    margin-top: 1rem;
  }
`;

export const Education = (props: any) => (
  <EducationStyle>
    <h3>EDUCATION</h3>
    <div className="Institute">Georgia Institute of Technology</div>
    <div>Atlanta, GA</div>
    <div>Masters in Computer Science with Specialization in Computing Systems</div>
    <div>Anticipated Graduation 2021</div>
    <div>Honors: Dean’s List</div>
    <div className="Institute">Rensselaer Polytechnic Institute</div>
    <div>Troy, NY</div>
    <div>Bachelor of Science in Business Management, Minor in Information Technology</div>
    <div>December 2012</div>
    <div>Honors: Merit Scholarship; Dean’s List</div>
  </EducationStyle>);
