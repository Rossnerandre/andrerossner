import {Grid} from "@mui/material";
import CardProjectItem from "./CardProjectItem";
import {CardProjectProps, ProjectsProps,} from "./types";

export default function CardProjects(props: ProjectsProps) {
  const {projects} = props;
  return (
    <>
      <Grid container mt={5} spacing={2}>
        {
          projects.map((project: CardProjectProps, index: any) => (
            <Grid
              item xs={12}
              sm={6}
              md={4}
              key={project.title}
            >
              {index % 2 === 0 ? (
                <>
                  <CardProjectItem title={project.title} description={project.description} url={project.url}
                                   fade={'inDown'} image={project.image}/>
                </>
              ) : (
                <>
                  <CardProjectItem title={project.title} description={project.description} url={project.url}
                                   fade={'inUp'} image={project.image}/>
                </>
              )}
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}
