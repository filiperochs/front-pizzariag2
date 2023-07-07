import { MenuSection, ShowcaseBanner } from "../../components";

const Home: React.FC = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <ShowcaseBanner />
      <MenuSection />
    </div>
  );
};

export default Home;
