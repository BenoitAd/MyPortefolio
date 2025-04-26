import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenue sur mon portfolio !

        </SectionTitle>
        <SectionText>
        Je m'appelle Benoît Auger-Dubois, développeur Full Stack français, passionné par la conception d'applications. Fort de plusieurs expériences chez CGI France à Nantes, j'ai intégrer des projets innovant aussi bien de maintenance évolutive que de refonte complète d'interfaces avec Angular et Java Spring
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>Mon CV 👈</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
