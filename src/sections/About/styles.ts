import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  background-color: var(--bg-dark);
  padding: 60px 8%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 40px 5%;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  width: 100%;
  max-width: 1400px;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
    justify-items: center;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-family: var(--font-secondary);
  font-size: 80px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.9;
  margin-bottom: 20px;
  color: var(--text-white);

  @media (max-width: 1024px) {
    font-size: 60px;
  }
`;

export const Presentation = styled.p`
  font-family: var(--font-secondary);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 30px;
  max-width: 550px;
  color: var(--text-white);

  @media (max-width: 1024px) {
    font-size: 30px;
    max-width: 100%;
  }
`;

export const AboutList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AboutListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-primary);
  font-size: 18px;
  font-weight: 300;
  color: var(--text-white);

  svg {
    width: 18px;
    flex-shrink: 0;
    color: var(--text-white);
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: center;
    order: -1;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;

  @media (max-width: 1024px) {
    max-width: 350px;
  }
`;