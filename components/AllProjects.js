import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid, Link, useTheme } from '@mui/material';
import InsetShadow from './ui/InsetShadow';
import { projectsData } from '../data/projects';
import OutsetShadow from './ui/OutsetShadow';
import SubHeading from './ui/SubHeading';
import { lightenDarkenColor } from '../utils/lightenDarkenColor';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

const descWithUrl = (string, darkerMainClr) => {
   const posStarting = string.indexOf('{');
   const posEnding = string.indexOf('}');
   if (posStarting < 0 || posEnding < 0) return string;
   const seperator = string.indexOf('|', posStarting);
   const url = string.slice(posStarting + 1, seperator);
   const text = string.slice(seperator + 1, posEnding);
   const firstPart = string.slice(0, posStarting);
   const secondPart = string.slice(posEnding + 1, -1);
   const aEl = (
      <a
         style={{ color: darkerMainClr, textDecoration: 'none' }}
         href={url}
         target="_blank"
         rel="noreferrer"
      >
         {text}
      </a>
   );
   return (
      <>
         {[firstPart, aEl, secondPart].map((part, i) => (
            <span key={i}>{part}</span>
         ))}
      </>
   );
};

export default function AllProjects() {
   const mainClr = useTheme().palette.primary.main;
   const darkerMainClr = lightenDarkenColor(-0.4, mainClr);
   return (
      <InsetShadow
         customStyles={{
            marginTop: '4rem',
            padding: { xs: '0.8rem', sm: '1rem' },
         }}
      >
         <SubHeading
            text={'Projects'}
            customStyles={{ marginBottom: '1.3rem' }}
         />
         <Grid container sx={{ justifyContent: 'space-evenly' }}>
            {projectsData &&
               projectsData.map((project) => (
                  <Grid item sm={12} md={6} key={project.key}>
                     <OutsetShadow
                        customStyles={{
                           padding: { xs: '1rem', sm: '1.5rem' },
                           margin: { xs: '0.6rem 0rem', sm: '0.8rem' },
                        }}
                     >
                        {/* Title */}
                        <Typography
                           variant="h6"
                           component="h4"
                           sx={{
                              textShadow: '3px 3px 4px #000',
                              marginBottom: '0.5rem',
                              display: 'inline-block',
                           }}
                        >
                           {project.title}
                        </Typography>
                        {/* Link */}
                        {project.link && (
                           <Link
                              target={'_blank'}
                              href={project.link}
                              color={darkerMainClr}
                              sx={{
                                 verticalAlign: 'middle',
                                 marginLeft: '0.5rem',
                              }}
                           >
                              <LaunchIcon fontSize="small" />
                           </Link>
                        )}
                        {/* Github */}
                        {project.github && (
                           <Link
                              textAlign={'center'}
                              target={'_blank'}
                              href={project.github}
                              color={darkerMainClr}
                              sx={{
                                 verticalAlign: 'middle',
                                 marginLeft: '0.5rem',
                              }}
                           >
                              <GitHubIcon fontSize="small" />
                           </Link>
                        )}
                        {/* Used stack */}
                        <Typography
                           sx={{
                              fontSize: { xs: '0.9rem', sm: '0.95rem' },
                              marginBottom: '0.5rem',
                           }}
                           // color="text.secondary"
                        >
                           {project.stack &&
                              project.stack.map((tech, i) => (
                                 <Box
                                    sx={{ color: darkerMainClr }}
                                    component="span"
                                    key={tech}
                                 >
                                    {`${tech}${
                                       i === project.stack.length - 1
                                          ? ''
                                          : ', '
                                    }`}
                                 </Box>
                              ))}
                        </Typography>

                        {/* Project desc */}
                        {project.desc && (
                           <Typography
                              sx={{
                                 textAlign: 'left',
                                 fontSize: { xs: '0.95rem', sm: '1rem' },
                                 marginBottom: '1rem',
                                 lineHeight: '1.6rem',
                              }}
                           >
                              {descWithUrl(project.desc, darkerMainClr)}
                           </Typography>
                        )}

                        {/* Points */}
                        {project.points?.length > 0 && (
                           <>
                              <Typography
                                 sx={{
                                    marginBottom: '0.6rem',
                                    fontSize: {
                                       xs: '0.95rem',
                                       sm: '1rem',
                                    },
                                 }}
                              >
                                 {`Few interesting details:`}
                              </Typography>
                              {project.points.map((point) => (
                                 <Typography
                                    key={point}
                                    sx={{
                                       marginBottom: '0.6rem',
                                       fontSize: {
                                          xs: '0.9rem',
                                          sm: '0.95rem',
                                       },
                                    }}
                                 >
                                    <ArrowRightRoundedIcon
                                       fontSize="medium"
                                       sx={{
                                          verticalAlign: 'middle',
                                          color: darkerMainClr,
                                          marginLeft: '-5px',
                                          marginRight: '-2px',
                                       }}
                                    />
                                    {point}
                                 </Typography>
                              ))}
                           </>
                        )}
                     </OutsetShadow>
                  </Grid>
               ))}
         </Grid>
      </InsetShadow>
   );
}
