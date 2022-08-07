import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Background from '../components/layout/Background';
import StackInfoList from '../components/StackInfoList';
export default function HomePage({ changeTheme, mainClr }) {
   const heroSectionHeight = '80vh';
   return (
      <>
         <Hero
            changeTheme={changeTheme}
            mainClr={mainClr}
            heroSectionHeight={heroSectionHeight}
         />
         <Background heroSectionHeight={heroSectionHeight}>
            <StackInfoList />
            <Contact />
         </Background>
      </>
   );
}
