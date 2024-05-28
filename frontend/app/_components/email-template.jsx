import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const EmailTemplate =({
  body,
}) => (
  <Html>
  <Head />
  <Preview>
    The sales intelligence platform that helps you uncover qualified leads.
  </Preview>
  <Body style={main}>
    <Container style={container}>
      <Img
        src='https://yt3.googleusercontent.com/K4ZufSCvqT-Mx7ylpkoroVUR47Ka7CotpcQcRa2VqX5X5gLB1I7I33lfREK8SBfAZIzBV77sim4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
        width="240"
        height="50"
        alt="Koala"
        style={logo}
      />
      <Text style={paragraph}>Hi {body.fullName},</Text>
      <Text style={paragraph}>
        Thank you purchasing on Tubeguruji. Click on Below download button to download the all digital content
      </Text>
      <Section style={btnContainer}>
        <Button pX={12} pY={12} 
        style={{
          padding:5,
          paddingLeft:10,
          paddingRight:10,


        }}
        href="https://tubeguruji-file-share.vercel.app/f/8mkJMX">
          Download
        </Button>
      </Section>
      <Text style={paragraph}>
        Best,
        <br />
        The Tubeguruji team
      </Text>
      <Hr style={hr} />
      <Text style={footer}>Subscribe to Tubeguruji</Text>
    </Container>
  </Body>
</Html>
);


const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center',
};

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' ,
  display: 'block',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
