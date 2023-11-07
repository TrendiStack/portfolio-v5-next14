import ContextDivider from '../ContextDivider';
import HeaderText from '../HeaderText';
import List from '../List';
import Overview from '../Overview';
import Section from '../Section';

const Info = () => {
  return (
    <Section id="info" padding>
      <HeaderText text="info" />
      <ContextDivider colour="black" />
      <Overview
        title="overview"
        initial="A dedicated and versatile Software Engineer passionate about creating exceptional user experiences. With expertise in JavaScript, React, and Next.js, I specialize in delivering high-quality, scalable solutions. "
        full="From optimizing front-end structures to implementing seamless navigation and form validation, I consistently drive UI changes and contribute to the success of software engineering applications. With a strong command over developer tools and experience in Agile methodologies, I am well-equipped to deploy applications and ensure their robustness and scalability. I am always eager to take on new challenges and expand my skill set. Let's connect and discuss how I can deliver impactful solutions for your projects."
      />
      <ContextDivider colour="black" />
      <List
        homepage
        services
        title="services"
        list={[
          'SEO optimization',
          'web development',
          'UX/UI design',
          'E-Commerce web design',
          'mobile development',
          'web hosting',
          'web maintenance',
          'content management system (CMS) integration',
        ]}
      />
    </Section>
  );
};

export default Info;
