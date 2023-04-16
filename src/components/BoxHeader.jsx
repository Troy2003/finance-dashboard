import { Box, Typography, useTheme } from '@mui/material';
import Flexbetween from '@/components/Flexbetween';
const BoxHeader = ({ title, subtitle, sideText }) => {
    const { palette } = useTheme();
    return (
        <Flexbetween
            color={palette.text.primary}
            margine="1.5rem 1rem 0 1rem"
        >
            <Box>
                <Typography variant='h4'>
                    {title}
                </Typography>
                <Typography variant='h6'>
                    {subtitle}
                </Typography>
            </Box>
            <Typography
                variant='h5'
                fontWeight="700"
                color={palette.primary.light}
            >
                {sideText}
            </Typography>
        </Flexbetween>
    )
}

export default BoxHeader;