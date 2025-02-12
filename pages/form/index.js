import FormComponent from "../../components/TypeFormLikePage/FormComponent";
import { useState } from "react";
import { useSelector } from "react-redux";
import GreenBudgetForm from "../../components/TypeFormLikePage/BudgetComponent";
import ScopeRolesComponent from "../../components/TypeFormLikePage/ScopeRolesComponent";
import GeneralGreenFromComponent from "../../components/GenralComponents/GeneralGreenFromComponent";
import RoleComponent from "../../components/TypeFormLikePage/RoleComponent";
import ColabEnvComponent from "../../components/TypeFormLikePage/ColabEnvComponent";
import StepsForOnboardComponent from "../../components/TypeFormLikePage/StepsForOnboardComponent";
import ProjectBoard from "../../components/ProjectComponent";
import YouDidItComponet from "../../components/TypeFormLikePage/YouDidItComponet";
import DescpitionComponent from "../../components/TypeFormLikePage/DescpitionComponent";

function Form() {
  const [phase, setPhase] = useState(0);

  const changePhase = (phaseNow) => {
    if (phaseNow <= 5) {
      setPhase((phaseNow += 1));
    }
  };

  const skills = useSelector((state) => state.skillsInspect.skillsInfo);
  const _id = useSelector((state) => state.projectInspect._id);
  const title = useSelector((state) => state.projectInspect.title);
  const description = useSelector((state) => state.projectInspect.description);
  const budget = useSelector(
    (state) => state.projectInspect.budget.totalBudget
  );
  const dates = useSelector((state) => state.projectInspect.dates);
  const links = useSelector((state) => state.projectInspect.links);
  const stepsJoinProject = useSelector((state) => state.projectInspect.steps);

  return (
    <>
      {phase == 0 ? (
        <FormComponent
          fieldTitle="What’s the tilte of the new project?"
          changePhase={changePhase}
          phase={phase}
          // submitReply={submitReply}
        />
      ) : phase == 1 ? (
        <DescpitionComponent
          fieldTitle="Description of the new project?"
          changePhase={changePhase}
          phase={phase}
          // submitReply={submitReply}
          _id={_id}
        />
      ) : phase == 2 ? (
        <GreenBudgetForm changePhase={changePhase} phase={phase} _id={_id} />
      ) : phase == 3 ? (
        <ColabEnvComponent changePhase={changePhase} phase={phase} _id={_id} />
      ) : phase == 4 ? (
        <StepsForOnboardComponent
          changePhase={changePhase}
          phase={phase}
          _id={_id}
        />
      ) : phase == 5 ? (
        <ProjectBoard
          changePhase={changePhase}
          phase={phase}
          projectTitle={title}
          description={description}
          budget={budget}
          links={links}
          dates={dates}
          stepsJoinProject={stepsJoinProject}
          _id={_id}
        />
      ) : phase == 6 ? (
        <YouDidItComponet />
      ) : (
        phase
      )}

      {/* <ScopeRolesComponent/> */}
      {/* <GeneralGreenFromComponent/> */}
      {/* <RoleComponent
      skills = {skills}
       /> */}
      {/* <ColabEnvComponent/> */}
      {/* <StepsForOnboardComponent/> */}
    </>
  );
}

export default Form;

// bash gitBash/
