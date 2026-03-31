import * as S from './styles';
import perfilImg from '../../assets/perfil-inicio.png'; 

export const Hero = () => {
  return (
    <S.HeroSection>
      <S.HeroBannerImage 
        src={perfilImg} 
        alt="Bruna Schneider - Portfólio" 
      />
    </S.HeroSection>
  );
};