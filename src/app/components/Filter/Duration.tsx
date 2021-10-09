import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControlLabel } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import React from 'react';
import { ContainerInterest } from './rootStylesFilter';
interface Props {}

export const Duration = (props: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>('on');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <ContainerInterest>
      <Accordion expanded={expanded === 'on'} onChange={handleChange('on')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Duration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                />
              }
              label="Week"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                />
              }
              label="Month"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};