

export const themeSettings = (mode) => {
    return {
        palette: {
            mode,
            ...(mode === 'dark') ?
                {
                    primary: {
                        dark: "#0c1e3e",
                        main: "#1c418e",
                        light: "#70a2d9",
                        contrastText: "#c7e0f4"
                    },

                    secondary: {
                        main: '#0d2243',
                        light: '#3e6aae',
                        dark: '#081429',
                        contrastText: '#a6c3e6',
                    },
                    text: {
                        primary: '#f1f6fa',
                        secondary: '#d5e5f7',
                        disabled: '#a2c2e8',
                        hint: '#526b95'
                    },
                    background: {
                        paper: '#141f4c',
                        default: '#081429',
                    }
                } :
                {
                    primary: {
                        main: '#9C27B0',
                        light: '#FCE4EC',
                        dark: '#4A148C',
                        contrastText: '',
                    },

                    secondary: {
                        main: '#BA68C8',
                        light: '#F3E5F5',
                        dark: '#4A148C',
                        contrastText: '',
                    },
                    error: {
                        main: '#F44336',
                        light: '#FFEBEE',
                        dark: '#B71C1C',
                        contrastText: '',
                    },
                    text: {
                        primary: '#212121',
                        secondary: '#757575',
                        disabled: '#BDBDBD',
                        hint: '#9C27B0',
                    },
                    background: {
                        paper: '#F3E5F5',
                        default: '#E1BEE7',
                    }
                }
        },
        typography: {
            fontFamily: 'Montserrat , sans-serif',
            fontSize: 18,
            h1: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 48,
            },
            h2: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 36,
            },
            h3: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 24,
            },
            h4: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 20,
            },
            h5: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 18,
            },
            h6: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 16,
            },
        },
    }
}