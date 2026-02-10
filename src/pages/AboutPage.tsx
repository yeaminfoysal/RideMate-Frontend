import AboutSection from "@/modules/AboutPage/AboutSection";
import ExperienceSection from "@/modules/AboutPage/ExperienceSection";
import WorkSteps from "@/modules/AboutPage/WorkStepsSection";
import { useEffect } from "react";

export default function AboutPage() {
  
  useEffect(() => {
    document.title = "RideMate | About";
  }, []);

  return (
    <div>
      <AboutSection />
      <ExperienceSection />
      <WorkSteps />
    </div>
  )
}
