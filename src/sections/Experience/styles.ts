import styled from 'styled-components';

export const ExperienceSection = styled.section`
  width: 100%;
  background-color: var(--bg-deep);
  padding: 60px 5% 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: var(--font-secondary);
  font-size: 85px;
  font-weight: 700;
  color: var(--text-white);
  text-transform: uppercase;
  margin-bottom: 50px;
  line-height: 0.9;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 64px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 1;
  }

  @media (max-width: 1024px) {
    &::before {
      display: none;
    }
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceCard = styled.article`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    border-color: var(--primary-red);
  }
`;

export const CardTitle = styled.h3`
  font-family: var(--font-primary);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-white);
  margin-bottom: 6px;
  min-height: 2.6em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardSubtitle = styled.span`
  font-family: var(--font-primary);
  font-size: 0.85rem;
  color: var(--text-white);
  opacity: 0.8;
  display: block;
  margin-bottom: 15px;
  font-style: italic;
`;

export const CardDescription = styled.p`
  font-family: var(--font-primary);
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 1.5;
  color: var(--text-white);
  opacity: 0.9;
  min-height: 8.5em;
`;