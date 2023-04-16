import { useState } from "react";
import { Box, useTheme, Typography, colors } from "@mui/material";
import { Link } from "react-router-dom";
import PixIcon from '@mui/icons-material/Pix';

import Flexbetween from "@/components/Flexbetween";
const Navbar = () => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState('dashboard');
    return (
        <Flexbetween
            p="0.5rem 0rem"
        >
            {/* LEFT SIDE  */}
            <Flexbetween gap="0.75rem">
                <PixIcon sx={{ fontSize: "28px" }} />
                <Typography>
                    finance
                </Typography>
            </Flexbetween>

            {/* RIGHT SIDE  */}
            <Flexbetween gap="0.75rem">
                <Box sx={{ "&:hover": { color: palette.text.secondary } }}>
                    <Link
                        to="/"
                        onClick={() => setSelected('dashboard')}
                        style={{
                            color: selected === 'dashboard' ? "inherit" : palette.text.disabled,
                            textDecoration: "none"
                        }}
                    >
                        Dashboard
                    </Link>
                </Box>
                <Box sx={{ "&:hover": { color: palette.text.secondary } }}>
                    <Link
                        to="/predictions"
                        onClick={() => setSelected('predictions')}
                        style={{
                            color: selected === 'predictions' ? "inherit" : palette.text.disabled,
                            textDecoration: "none"
                        }}
                    >
                        Predictions
                    </Link>
                </Box>
            </Flexbetween>
        </Flexbetween>
    )
}

export default Navbar