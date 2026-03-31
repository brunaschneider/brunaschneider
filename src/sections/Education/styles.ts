import styled from 'styled-components';

export const EducationSection = styled.section`
  width: 100%;
  background-color: var(--secondary-pink);
  padding: 60px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 48px 5%;
  }
`;

export const Title = styled.h2`
  font-family: var(--font-secondary);
  font-size: 85px;
  font-weight: 700;
  color: var(--primary-red);
  text-transform: uppercase;
  margin-bottom: 50px;
  text-align: center;
  line-height: 0.9;

  @media (max-width: 1024px) {
    font-size: 64px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const EducationGrid = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-bottom: 15px;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.3;
  margin-bottom: 8px;
  min-height: 2.6em;
  display: flex;
  align-items: center;
`;

export const CardInfo = styled.p`
  font-family: var(--font-primary);
  font-size: 0.85rem;
  font-weight: 300;
  font-style: italic;
  color: var(--text-dark);
  opacity: 0.8;
  margin: 0;
`;