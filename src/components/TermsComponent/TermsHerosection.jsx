import React from 'react'
import { Container, Typography, Button, Box, Grid2, Paper } from '@mui/material';
import vector from '../../assets/imageFiles/Vector1.png';

const TermsHerosection = () => {
    const terms = [
        {
            title: 'Service Level Agreement',
            desc: 'This Service Level Agreement (SLA) delineates the Support and Maintenance Services offered by Service Pack to customers who have procured a Software Services subscription license as specified in an authorized Order Form. Unless explicitly defined otherwise herein, all capitalized terms used in this agreement shall bear the meanings ascribed to them in the Agreement.'
        },
        {
            title: 'Service Levels',
            desc: 'Service Pack pledges a Service Availability of 99.0% to the Customer for the Service. Additionally, Service Pack commits to providing email support for the Service to the Customer on an 8x5x252 basis, referred to as "Service Support." Service Support encompasses assistance with issues solely attributable to errors with the Service, i.e., a failure of the Service to conform to the written specifications provided by Service Pack.'
        },
        {
            title: 'Error Response Times',
            desc: 'An "Error" denotes a discrepancy in the Services that substantially deteriorates the Services compared to Service Pack’s published performance specifications. For each reported Error, Service Pack will assign a priority level at its discretion and furnish the Customer with responses and status updates accordingly.'
        }
    ]
  return (  
    <>
    <Container className='terms-container' maxWidth={false} sx={{ paddingTop: { xs: '150px', sm: '230px', lg: '190px' } }}>

        <Box className='terms-inner-container'>

            <Box className='terms-details'>

                <Typography className='terms-typo' sx={{ width: { xs: '100%', lg: '1048px' }, fontSize: { xs: '20px', lg: '40px' }, fontFamily: 'Inter', fontWeight: '600', lineHeight: { xs: '48px', lg: '70px' }}}>
                Service Level Agreement Overview
                    <Box src={vector} component={'img'} sx={{ width: { xs: '24px', md: '27.5px' }, height: { xs: '20px', md: '28.5px' }, position: 'absolute', right: 'auto' }} />
                </Typography>
            </Box>
            <Typography sx={{ width: { xs: '100%', lg: '1112px' }, textAlign: 'center', color: '#ADADAD', fontSize:'16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: { xs: '24px', lg: '32px' }, wordWrap: 'break-word' }}>
            Explore our Service Level Agreement (SLA) for a concise overview of our commitments regarding Service Availability, Error Response Times, and Support Services.
            </Typography>
        </Box>


    </Container>


    <Box className='terms' >
        <Box sx={{ padding:{xs:'10px'},
            paddingBottom: '20px', width: '100%', maxWidth: '1200px',gap:'48px'
        }}>
           
            {
                terms.map((el, id) => {
                    return <Box key={id} className='terms-details1'
                        sx={{ width: { xs: '100%', maxWidth: '1200px' } }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ color: 'white', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '42px', wordWrap: 'break-word', fontSize:'20px' }}
                        >
                            {el.title}
                        </Typography>
                        <Typography
                            sx={{ alignSelf: 'stretch', color: '#ADADAD', fontFamily: 'Inter', fontWeight: 400, lineHeight: '32px', wordWrap: 'break-word', fontSize: '16px' }}
                        >
                            {el.desc}
                        </Typography>

                    </Box>
                })

            }






        </Box>

    </Box>

</>
  )
}

export default TermsHerosection
