import { Box } from "rebass/styled-components";

export const Container = ({children}) => {
    return (
        <Box sx={{maxWidth: 1024,
        width:'100%',
        mx: 'auto'}}>
           {children}
        </Box>
    )
}